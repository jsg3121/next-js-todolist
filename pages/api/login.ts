import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name, password } = req.body;

  res.end();
};

export default handler;
