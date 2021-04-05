import NextAuth, { User } from 'next-auth';
import Providers from 'next-auth/providers';
import MongoConnect from '@/util/MongoConnect';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Record<string, string>) {
        const user = await (await MongoConnect())
          .collection('users')
          .findOne({ name: credentials.name, password: credentials.password });
        if (user && user.password == credentials.password) {
          return user as User;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/',
    error: '/signIn',
  },
  events: {},
  debug: false,
});
