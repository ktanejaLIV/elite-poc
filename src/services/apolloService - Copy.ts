// src/services/apolloService.ts
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface JobChangeResult {
  jobChanged: boolean;
  currentEmployer: string;
  currentTitle: string;
  memberId: string;
  token?: string;
}

// Function to fetch job data
export async function fetchJobChange(memberEmail: string): Promise<JobChangeResult | null> {
  const member = await prisma.member.findUnique({ where: { email: memberEmail } });
  if (!member) return null;

  if (!process.env.APOLLO_API_KEY) {
    console.error('Apollo API Key missing! Set APOLLO_API_KEY in .env');
    return null;
  }

  const apolloUrl = 'https://api.apollo.io/v1/mixed_people/api_search';

  try {
    const response = await axios.post(
      apolloUrl,
      { query: memberEmail }, // Apollo expects POST body with query
      {
        headers: {
          'Authorization': `Bearer ${process.env.APOLLO_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const person = response.data?.people?.[0];
    if (!person) return { jobChanged: false, currentEmployer: member.currentEmployer, currentTitle: member.currentTitle, memberId: member.id };

    const current_employer = person.organization?.name || member.currentEmployer;
    const current_title = person.title || member.currentTitle;

    const jobChanged = current_employer !== member.currentEmployer || current_title !== member.currentTitle;

    if (jobChanged) {
      const token = uuidv4();
      await prisma.pendingConfirmation.create({
        data: {
          memberId: member.id,
          confirmationToken: token,
          proposedEmployer: current_employer,
          proposedTitle: current_title,
          status: 'Pending',
          expiresAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        },
      });
      console.log(`Job change detected for ${member.email}: ${member.currentEmployer}/${member.currentTitle} → ${current_employer}/${current_title}`);
      return { jobChanged, currentEmployer: current_employer, currentTitle: current_title, memberId: member.id, token };
    }

    return { jobChanged, currentEmployer: current_employer, currentTitle: current_title, memberId: member.id };

  } catch (error: any) {
    console.error('Error fetching job data from Apollo API:', error.response?.data || error.message);
    return null;
  }
}
