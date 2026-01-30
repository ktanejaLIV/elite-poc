// src/services/apolloService.ts
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export async function fetchJobChange(memberEmail: string) {
  const member = await prisma.member.findUnique({ where: { email: memberEmail } });
  if (!member) return null;

  // MOCK DATA for testing without Apollo
  const mockData: Record<string, any> = {
    "andy.jassy@amazon.com": { title: "President and CEO", organization: { name: "Amazon" } },
    "satya@example.com": { title: "CEO", organization: { name: "Microsoft" } },
    "john.doe@example.com": { title: "Developer", organization: { name: "OldCompany" } },
  };

  const person = mockData[memberEmail] || { title: member.currentTitle, organization: { name: member.currentEmployer } };

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
}
