import { PrismaClient } from '@prisma/client'
import { decrypToken } from 'common/src/decrypToken'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

/**
 * ! 페이지 접속시 토큰 체크 API
 * @auth 장선규
 * @param {NextApiRequest} req
 * @param {NextApiResponse<UserData>} res
 * @return {Promise<void>}
 */
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<UserData>
): Promise<void> => {
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
