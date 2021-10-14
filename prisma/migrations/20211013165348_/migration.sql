/*
  Warnings:

  - A unique constraint covering the columns `[id,user_id]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,user_id]` on the table `CardItem` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "user_id" INTEGER;

-- AlterTable
ALTER TABLE "CardItem" ADD COLUMN     "user_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "authCard" ON "Card"("id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "authItem" ON "CardItem"("id", "user_id");

-- AddForeignKey
ALTER TABLE "Card" ADD FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardItem" ADD FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "uniqueTab" RENAME TO "authTab";
