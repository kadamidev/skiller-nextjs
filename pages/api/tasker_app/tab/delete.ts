import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authenticated } from "../../../../lib/auth";


export default authenticated(async function (req: NextApiRequest, res: NextApiResponse, user_id) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { tab: tabData } = req.body
        const deleteTab = await prisma.tab.delete({
            where: {
                authTab: {
                    id: tabData.id,
                    user_id: user_id,
                },
            }
        })
        res.status(201)
        res.json({msg: `successfully deleted tab: ${deleteTab.name}`})
    } catch(e) {
        res.status(500)
        res.json({error: "unable to delete tab from the database"})
    } finally {
        await prisma.$disconnect()
    }

})