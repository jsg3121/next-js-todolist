import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

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

/**
 * ! Todolist 추가 API
 * @auth 장선규
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @return {Promise<void>}
 */
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { title, content, id = 0 } = <RequestData>req.body

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
