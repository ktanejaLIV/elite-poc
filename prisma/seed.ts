import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const members = [
    {
      email: 'test1@example.com',
      firstName: 'Kavita',
      lastName: 'Taneja',
      currentEmployer: 'Elite',
      currentTitle: 'Developer',
      employmentStatus: 'Active',
      verificationStatus: 'Verified'
    },
    {
      email: 'test2@example.com',
      firstName: 'John',
      lastName: 'Doe',
      currentEmployer: 'Elite',
      currentTitle: 'Tester',
      employmentStatus: 'Active',
      verificationStatus: 'Pending'
    }
    // add 3-5 more members
  ];

  for (const member of members) {
    await prisma.member.create({ data: member });
  }

  console.log('Seeded test members ✅');
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
