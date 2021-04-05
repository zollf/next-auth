import { NextApiRequest, NextApiResponse } from 'next';
import MongoConnect from '@/util/MongoConnect';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await (await MongoConnect()).collection('users').find({}).toArray();
    return res.json({ data: users, success: true, error: null });
  } catch (e) {
    return res.json({ data: null, success: false, error: e });
  }
};

export default handler;
