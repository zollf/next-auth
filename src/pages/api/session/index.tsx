import { getSession } from 'next-auth/client';

export default async (req: any, res: any) => {
  const session = await getSession({ req });
  res.send(JSON.stringify(session, null, 2));
};
