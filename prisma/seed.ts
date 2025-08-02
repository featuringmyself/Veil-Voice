import { PrismaClient, Prisma } from "./app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    clerkId: "a234aa3",
    questions: {
      create: {
        question: "Kaisen ba?",
        published: true,
        answers: {
          create: {
            answer: "ACHA BA",
          }
        }
      }
    }
  }

];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();