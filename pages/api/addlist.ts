import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  result: string
}

interface RequestData {
  title: string
  content: string
  email: string
}

const prisma = new PrismaClient()

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { title, content, email } = req.body

  const user = await prisma.user.findUnique({ where: { userEmail: email } })

  if (user) {
    await prisma.post
      .create({
        data: {
          title,
          content,
          writer: user.id,
        },
      })
      .then(() => {
        res.status(200)
      })
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        prisma.$disconnect
      })
  }
  res.end()
}

export default handler
