/*
  Warnings:

  - Made the column `text` on table `CardItem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CardItem" ALTER COLUMN "text" SET NOT NULL;
