import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { item: itemData } = req.body
        const card = await prisma.cardItem.update({
            where: {
                id: itemData.id
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