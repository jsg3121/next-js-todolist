import { PrismaClient } from '@prisma/client'
import { decrypToken } from 'common/src/decrypToken'
import { NextApiHandler } from 'next'

const prisma = new PrismaClient()

const handler: NextApiHandler = async (req, res) => {
  const { token } = req.body
  const { data } = JSON.parse(decrypToken(token))

  const check = await prisma.token.findUnique({
    where: {
      accessToken: data,
    },
  })

  if (check) {
    const user = await prisma.user.findUnique({
      where: {
        id: check.userId,
      },
    })
    if (user) {
      res.status(200).send({
        name: user.userName,
        email: user.userEmail,
        id: user.id,
        token: data,
      })
    }
  }
}

export default handler
