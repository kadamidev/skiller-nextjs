/*
  Warnings:

  - A unique constraint covering the columns `[id,user_id]` on the table `Tab` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "uniqueTab" ON "Tab"("id", "user_id");
