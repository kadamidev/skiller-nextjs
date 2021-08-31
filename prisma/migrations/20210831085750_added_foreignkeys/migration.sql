/*
  Warnings:

  - You are about to drop the `cardItem` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "header" DROP NOT NULL,
ALTER COLUMN "collapsed" DROP NOT NULL,
ALTER COLUMN "collapsed" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Tab" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "avatar" DROP NOT NULL;

-- DropTable
DROP TABLE "cardItem";

-- CreateTable
CREATE TABLE "CardItem" (
    "id" SERIAL NOT NULL,
    "card_id" INTEGER NOT NULL,
    "checked" BOOLEAN DEFAULT false,
    "text" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Tab" ADD FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD FOREIGN KEY ("tab_id") REFERENCES "Tab"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardItem" ADD FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
