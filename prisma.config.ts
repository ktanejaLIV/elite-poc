import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  // Direct connection
  adapter: 'postgresql', // ya accelerateUrl agar accelerate use karte ho
  url: process.env.DATABASE_URL,
});
