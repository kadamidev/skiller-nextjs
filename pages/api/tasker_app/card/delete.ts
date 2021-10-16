import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authenticated } from "../../../../lib/auth";


export default authenticated(async function (req: NextApiRequest, res: NextApiResponse, user_id) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { card: cardData } = req.body
        const card = await prisma.card.delete({
            where: {
                    // @ts-ignore
                authCard: {
                    id: cardData.id,
                    // @ts-ignore
                    user_id: user_id,
                },
            }
        })
        
        res.status(201)
        res.json({success: `${card.header} card successfully deleted`})
    } catch(e) {
        res.status(500)
        res.json({error: "unable to delete card from the database"})
    } finally {
        await prisma.$disconnect()
    }

})