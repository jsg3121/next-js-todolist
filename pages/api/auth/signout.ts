import { PrismaClient } from '@prisma/client'
import { NextApiHandler } from 'next'

const prisma = new PrismaClient()

const handler: NextApiHandler = async (req, res) => {
  const { token } = req.body

  return await prisma.token
    .delete({
      where: {
        accessToken: token,
      },
    })
    .then(() => {
      res.status(200)
      res.end()
    })
    .catch(() => {
      res.status(400)
      res.end()
    })
}

export default handler
