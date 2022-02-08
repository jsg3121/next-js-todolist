import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  result: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).send({ result: '1111' });
  res.end();
};

export default handler;
