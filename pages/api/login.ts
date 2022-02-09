import { PrismaClient } from '@prisma/client';
import { NextApiHandler } from 'next';

interface RequestData {
  email: string;
  password: string;
}

const prisma = new PrismaClient();

const handler: NextApiHandler = async (req, res) => {
  const { email, password } = <RequestData>req.body;

  const data = await prisma.user.findUnique({
    where: {
      userEmail: email,
    },
    rejectOnNotFound: false,
  });

  if (data) {
    if (data.password === password) {
      res.status(200).send({ name: data.userName });
      res.end();
    }
    if (data.password !== password) {
      res.status(500);
      res.end();
    }
  }
  res.status(500);
  res.end();
};

export default handler;
