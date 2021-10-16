import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authenticated } from "../../../../lib/auth";


export default authenticated(async function (req: NextApiRequest, res: NextApiResponse, user_id) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { tab: tabData } = req.body
        const tab = await prisma.tab.update({
            where: {
                    // @ts-ignore
                authTab: {
                    id: tabData.id,
                    // @ts-ignore
                    user_id: user_id,
                },
            },
            data: {
                name: tabData.name,
            },
        })
        res.status(201)
        res.json({tab})
    } catch(e) {
        console.log(e)
        res.status(500)
        res.json({error: "unable to update tab name in the database"})
    } finally {
        await prisma.$disconnect()
    }

})