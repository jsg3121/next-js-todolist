import { User } from '@prisma/client'
import { Query } from 'database'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

interface RequestData {
  email: string
  password: string
}

const TOKEN_KEY_ACCESS = 'toDOlisT-madeBy-JSG-12#$'

// Info : 추후 Token exp, refresh 토큰 적용하기 위한 정보
// const ACCESS_TOKEN_EXP = '10d'
// const ACCESS_TOKEN_ISSUER = 'toDoList-admin'

// const TOKEN_KEY_REFRESH = 'toDOlisT-madeBy-JSG-rEfREsH'
// const REFRESH_TOKEN_EXP = '30d'
// const REFRESH_TOKEN_ISSUER = 'toDoList-admin'

/**
 * ! 토큰 생성
 * @auth 장선규
 * @param {User} user
 * @returns {string}
 */
const createToken = (user: User): string => {
  const token = jwt.sign(user.userEmail, TOKEN_KEY_ACCESS)
  return token
}

/**
 * ! 로그인을 API
 * @auth 장선규
 * @param {NextApiRequest} req
 * @param {NextApiResponse<UserData>} res
 */
const handler = async (req: NextApiRequest, res: NextApiResponse<UserData>) => {
  const { email } = <RequestData>req.body

  const data = await Query.findUser(email)

  if (data) {
    const { id, password, userEmail, userName } = data

    if (data.password === password) {
      const token = createToken(data)

      await Query.insertToken(token, id)

      res.status(200).send({
        id: id,
        name: userName,
        email: userEmail,
        token,
      })
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
