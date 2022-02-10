import { PrismaClient, User } from '@prisma/client'
import jwt from 'jsonwebtoken'
import { NextApiHandler } from 'next'

interface RequestData {
  email: string
  password: string
}

const prisma = new PrismaClient()

const TOKEN_KEY_ACCESS = 'toDOlisT-madeBy-JSG-12#$'
const ACCESS_TOKEN_EXP = '10d'
const ACCESS_TOKEN_ISSUER = 'toDoList-admin'

const TOKEN_KEY_REFRESH = 'toDOlisT-madeBy-JSG-rEfREsH'
const REFRESH_TOKEN_EXP = '30d'
const REFRESH_TOKEN_ISSUER = 'toDoList-admin'

const createToken = (user: User) => {
  const token = jwt.sign(user.userEmail, TOKEN_KEY_ACCESS)
  return token
}

const handler: NextApiHandler = async (req, res) => {
  const { email, password } = <RequestData>req.body

  const data = await prisma.user.findUnique({
    where: {
      userEmail: email,
    },
    rejectOnNotFound: false,
  })

  if (data) {
    if (data.password === password) {
      const token = createToken(data)
      await prisma.token
        .create({
          data: {
            refreshToken: '',
            accessToken: token,
            userId: data.id,
          },
        })
        .finally(async () => {
          prisma.$disconnect
        })

      res
        .status(200)
        .send({ name: data.userName, email: data.userEmail, token })
      res.end()
    }
    if (data.password !== password) {
      res.status(500)
      res.end()
    }
  }
  res.status(500)
  res.end()
}

export default handler
