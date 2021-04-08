import { NextApiRequest, NextApiResponse } from 'next';
import MongoConnect from '@/util/MongoConnect';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = JSON.parse(req.body);
  console.log(data);
  try {
    const response = await (await MongoConnect()).collection('users').insertOne(data);
    if (response) {
      console.log(response);
      return res.json({ success: true, response: response, error: null });
    } else {
      return res.json({ success: false, response: null, error: 'error in connecting to mongodb' });
    }
  } catch (e) {
    console.log(e);
    return res.json({ success: false, response: null, error: e });
  }
};

export default handler;
