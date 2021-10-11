// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { hash } from 'bcrypt';


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({ log: ['query'] })

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Wrong Method' })

    }
    
    try {
        const { user: userData } = req.body

        hash(userData.password, 10, async (err, hash) => {

            const user = await prisma.user.create({
                data: {
                    username: userData.username,
                    email: userData.email,
                    avatar: userData.avatar,
                    password: hash,
                }
            })

            if (user) {
                const tab = await prisma.tab.create({
                    data: {
                        name: 'Untitled',
                        user_id: user.id,
                    },
                })
            }
            
            res.status(201)
            res.json({user})
        })
    } catch(e) {
        res.status(500)
        res.json({ error: `Unable to create user in the database e: ${e}` })
    } finally {
        await prisma.$disconnect()
    }
  }
  

//   model User {
//     id Int @id @default(autoincrement())
//     username String
//     email String
//     avatar String
//     createdAt DateTime @default(now())
//   }