# NEXT AUTH EXAMPLE
This is basic use of next auth. This is an example using custom credential sign in form and sign up.

Deployed using vercel: https://dylanio-next-auth.vercel.app/

git https://github.com/zollf/next-auth

## Local Use
Clone Repo

Copy .env.example and rename to .env
```bash
yarn
docker-compose build
docker-compose up
```


##Custom Auth
Simple Custom Authorize function
```tsx
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
```
