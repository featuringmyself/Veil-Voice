/*
  Warnings:

  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - Added the required column `question` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- First add the question column with a default value
ALTER TABLE "public"."Post" ADD COLUMN "question" TEXT NOT NULL DEFAULT 'Migrated question';

-- Update existing rows to use title or content as question
UPDATE "public"."Post" SET "question" = COALESCE("title", "content", 'Migrated question');

-- Now drop the old columns
ALTER TABLE "public"."Post" DROP COLUMN "content",
DROP COLUMN "title",
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- CreateTable
CREATE TABLE "public"."Answer" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "postId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Answer" ADD CONSTRAINT "Answer_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
