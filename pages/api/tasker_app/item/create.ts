import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authenticated } from "../../../../lib/auth";



export default authenticated(async function (req: NextApiRequest, res: NextApiResponse, user_id) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { cardItem: itemData } = req.body
        const card = await prisma.card.findUnique({
            where: {
                    // @ts-ignore
                authCard: {
                    id: itemData.card_id,
                    // @ts-ignore
                    user_id: user_id,
                },
            }

        })
        // @ts-ignore
        if (card.user_id == user_id) {
            const cardItem = await prisma.cardItem.create({
                data: {
                    text: itemData.text,
                    card_id: itemData.card_id,
                    // @ts-ignore
                    user_id: user_id
                },
            })
            res.status(201)
            res.json({dbid: cardItem.id})
        } else {
            res.status(400).json({msg: `failed to create item`})
        }
    } catch(e) {
        console.log(e)
        res.status(500)
        res.json({error: "unable to save item to the database"})
    } finally {
        await prisma.$disconnect()
    }

})