import { PrismaClient } from '@prisma/client';
import { fetchJobChange } from './apolloService';
import { sendJobChangeEmail } from './emailService'; // add this import

const prisma = new PrismaClient();

export async function detectJobChanges() {
  const members = await prisma.member.findMany();
  const results = [];

  for (const member of members) {
    const jobData = await fetchJobChange(member.email);
    if (jobData?.jobChanged) {
      results.push(jobData);

      // -------------------------------
      // SEND EMAIL TO YOUR KTANEJA EMAIL
      // -------------------------------
      await sendJobChangeEmail(
        'ktaneja@liventus.com',     // recipient (you)
        jobData.token,              // token for confirmation link
        jobData.currentEmployer,    // proposed employer
        jobData.currentTitle        // proposed title
      );
    }
  }

  return {
    checked: members.length,
    changesDetected: results.length,
    details: results
  };
}
