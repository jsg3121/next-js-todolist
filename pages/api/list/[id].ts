import { PrismaClient } from '@prisma/client'
import type { NextApiHandler } from 'next'
import { pick } from 'lodash-es'

interface Data {
  result: string
}

const prisma = new PrismaClient()

const handler: NextApiHandler<Data> = async (req, res) => {
  const { id } = req.query
  const data = await prisma.post
    .findMany({
      where: {
        writer: parseInt(<string>id, 10),
      },
    })
    .then((res) => {
      const data: any = []
      res.forEach((item) => {
        data.push(pick(item, ['title', 'content', 'createDate']))
      })
      return data
    })
  if (data) {
    res.status(200).send(data)
  }
  res.end()
}

export default handler
