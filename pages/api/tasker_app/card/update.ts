import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authenticated } from "../../../../lib/auth";



export default authenticated(async function (req: NextApiRequest, res: NextApiResponse, user_id) {
    const prisma = new PrismaClient( {log: ["query"] })
    try {
        const { card: cardData } = req.body
        const card = await prisma.card.update({
            where: {
                authCard: {
                    id: cardData.id,
                    user_id: user_id,
                },
            },
            data: {
                header: cardData.header,
                collapsed: cardData.collapsed
            }
        })
        
        res.status(201)
        res.json({card})
    } catch(e) {
        res.status(500)
        res.json({error: "unable to update card in the database"})
    } finally {
        await prisma.$disconnect()
    }

})