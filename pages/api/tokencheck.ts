import { PrismaClient } from '@prisma/client'
import { decrypToken } from 'common/src/decrypToken'
import { NextApiHandler } from 'next'

const prisma = new PrismaClient()

const handler: NextApiHandler = async (req, res) => {
  const { data } = req.body
  const token = JSON.parse(decrypToken(data))

  const check = await prisma.token.findUnique({
    where: {
      accessToken: token.data,
    },
  })
  if (check) {
    const user = await prisma.user.findUnique({
      where: {
        id: check.userId,
      },
    })

    if (user) {
      res.status(200).send({ name: user.userName, email: user.userEmail })
    }
  }
}

export default handler
