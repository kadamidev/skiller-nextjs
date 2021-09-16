import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";



export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { cardItem: itemData } = req.body
        const cardItem = await prisma.cardItem.create({
            data: {
                text: itemData.text,
                card_id: itemData.card_id,
            },
        })
        
        res.status(201)
        res.json({dbid: cardItem.id})
    } catch(e) {
        res.status(500)
        res.json({error: "unable to save item to the database"})
    } finally {
        await prisma.$disconnect()
    }

}