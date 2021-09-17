import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { cardItem: itemData } = req.body
        const item = await prisma.cardItem.delete({
            where: {
                id: itemData.id
            }
        })
        
        res.status(201)
        res.json({item})
    } catch(e) {
        res.status(500)
        res.json({error: "unable to delete item from the database"})
    } finally {
        await prisma.$disconnect()
    }

}