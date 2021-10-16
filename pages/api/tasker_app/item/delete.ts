import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authenticated } from "../../../../lib/auth";


export default authenticated(async function (req: NextApiRequest, res: NextApiResponse, user_id) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { cardItem: itemData } = req.body
        const item = await prisma.cardItem.delete({
            where: {
                    // @ts-ignore
                authItem: {
                    id: itemData.id,
                    // @ts-ignore
                    user_id: user_id,
                },
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

})