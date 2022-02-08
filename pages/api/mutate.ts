import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  result: string;
}

interface RequestData {
  name: string;
  email: string;
  password: string;
}

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email, name, password } = req.body;
  await prisma.user
    .create({
      data: {
        userName: name,
        password: password,
        userEmail: email,
      },
    })
    .then(() => {
      res.status(200);
    })
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      prisma.$disconnect;
    });

  res.end();
};

export default handler;
