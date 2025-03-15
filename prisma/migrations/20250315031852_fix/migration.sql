-- DropForeignKey
ALTER TABLE "Packages" DROP CONSTRAINT "Packages_userId_fkey";

-- AlterTable
ALTER TABLE "Packages" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Packages" ADD CONSTRAINT "Packages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
