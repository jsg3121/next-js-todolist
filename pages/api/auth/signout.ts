import { Query } from 'database'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const { token } = req.body

  return await Query.deleteToken(token)
    .then(() => {
      res.status(200).send(true)
      res.end()
    })
    .catch((e) => {
      res.status(500).send(e)
      res.end()
    })
}

export default handler
