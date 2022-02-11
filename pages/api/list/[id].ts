import type { NextApiHandler } from 'next'
import { Query } from 'database'

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.query

  const { data, status } = await Query.findPost(<string>id)

  res.status(status).send(data)
  res.end()
}

export default handler
