/*
  Warnings:

  - You are about to drop the column `socialId` on the `Users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Users_socialId_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "socialId",
ADD COLUMN     "location" TEXT;
