import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { card: cardData } = req.body
        const card = await prisma.card.delete({
            where: {
                id: cardData.id
            }
        })
        
        res.status(201)
        res.json({card})
    } catch(e) {
        res.status(500)
        res.json({error: "unable to delete card from the database"})
    } finally {
        await prisma.$disconnect()
    }

}