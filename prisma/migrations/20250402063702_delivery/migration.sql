-- AlterTable
ALTER TABLE "Packages" ADD COLUMN     "delivery" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "deliveryLocation" TEXT;
