import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authenticated } from "../../../../lib/auth";


export default async function (req: NextApiRequest, res: NextApiResponse, user_id) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { item: itemData } = req.body
        const card = await prisma.cardItem.update({
            where: {
                authItem: {
                    id: itemData.id,
                    user_id: user_id,
                },
            },
            data: {
                text: itemData.text,
                checked: itemData.checked
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

}