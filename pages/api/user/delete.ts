// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authenticated } from "../../../lib/auth";


export default authenticated(async function (req: NextApiRequest, res: NextApiResponse, user_id) {
    const prisma = new PrismaClient({ log: ['query'] })

    try {
        const { user: userData } = req.body
        console.log(`api inserted id: ${userData.id}, auth id: ${user_id}`)
        if (user_id == userData.id) { //checks authed user id to ensure no deletion of other users
            const user = await prisma.user.delete({
                where: {
                    id: userData.id
                }
            })
            res.status(201)
            res.json({message: `successfully deleted ${user.username}`})
        } else {
            res.status(400).json({error: `cant delete another user`})
        }
    } catch(e) {
        console.log(e)
        res.status(500)
        res.json({ error: `Unable to delete user from the database` })
    } finally {
        await prisma.$disconnect()
    }
  }
)

