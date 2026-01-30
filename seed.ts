import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  adapter: 'postgresql',          // direct connection
  url: process.env.DATABASE_URL,  // dotenv me set URL
});
