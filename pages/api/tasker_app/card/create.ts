import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authenticated } from "../../../../lib/auth";


export default authenticated(async function (req: NextApiRequest, res: NextApiResponse, user_id: any) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { card: cardData } = req.body
        const tab = await prisma.tab.findUnique({
            where: {
                id: cardData.tab_id
            }
        })

        // @ts-ignore
        if (tab.user_id == user_id) {
            const card = await prisma.card.create({
                data: {
                    header: cardData.header,
                    tab_id: cardData.tab_id,
                    collapsed: cardData.collapsed,
                    // @ts-ignore
                    user_id: user_id
                }
            })
            const cardItem = await prisma.cardItem.create({
                data: {
                    text: "",
                    card_id: card.id,
                    // @ts-ignore
                    user_id: user_id,
                },
            })
            res.status(201)
            res.json({cardDbId: card.id, itemDbId: cardItem.id})
        } else {
            throw "Tab not owned by user"
        }
    } catch(e) {
        console.log(e)
        res.status(500)
        res.json({error: "unable to save card to the database"})
    } finally {
        await prisma.$disconnect()
    }

})