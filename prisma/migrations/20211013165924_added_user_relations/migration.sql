/*
  Warnings:

  - Made the column `user_id` on table `Card` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `CardItem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "CardItem" ALTER COLUMN "user_id" SET NOT NULL;
