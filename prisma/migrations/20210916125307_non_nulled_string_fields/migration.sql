/*
  Warnings:

  - Made the column `header` on table `Card` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Tab` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "header" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tab" ALTER COLUMN "name" SET NOT NULL;
