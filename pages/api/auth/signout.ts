import { Query } from 'database'
import { NextApiRequest, NextApiResponse } from 'next'

type SignOutType = Boolean | Error

/**
 * ! 로그아웃 API
 * @auth 장선규
 * @param {NextApiRequest} req
 * @param {NextApiResponse<SignOutType>} res
 * @returns
 */
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<SignOutType>
) => {
  const { token } = req.body

  return await Query.deleteToken(token)
    .then(() => {
      res.status(200).send(true)
      res.end()
    })
    .catch((e: Error) => {
      res.status(500).send(e)
      res.end()
    })
}

export default handler
