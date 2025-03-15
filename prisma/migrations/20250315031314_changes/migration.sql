/*
  Warnings:

  - Added the required column `destination` to the `Packages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Packages" ADD COLUMN     "destination" TEXT NOT NULL;
