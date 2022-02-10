import { PrismaClient } from '@prisma/client'
import { NextApiHandler } from 'next'

interface Result {
  result: boolean
}

interface RequestData {
  title: string
  content: string
  email: string
  id: number
}

const prisma = new PrismaClient()

const handler: NextApiHandler<Result> = async (req, res) => {
  const { title, content, id } = <RequestData>req.body

  await prisma.post
    .create({
      data: {
        title,
        content,
        writer: id,
      },
    })
    .then(() => {
      res.status(200).send({ result: true })
    })
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      prisma.$disconnect
    })
  res.end()
}

export default handler
