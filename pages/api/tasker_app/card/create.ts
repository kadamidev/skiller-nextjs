import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import card from ".";


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { card: cardData } = req.body
        const card = await prisma.card.create({
            data: {
                header: cardData.header,
                tab_id: cardData.tab_id,
                collapsed: cardData.collapsed,
            },
        })
        
        res.status(201)
        res.json({dbid: card.id})
    } catch(e) {
        res.status(500)
        res.json({error: "unable to save card to the database"})
    } finally {
        await prisma.$disconnect()
    }

}