import { Query } from 'database'
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * ! TodoList 화면에 표시
 * @auth 장선규
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @return {Promise<void>}
 */
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { id } = req.query

  const { data, status } = await Query.findPost(<string>id)

  res.status(status).send(data)
  res.end()
}

export default handler
