import React from 'react';
import { SignIn } from '@/components';
import { useSession, signOut } from 'next-auth/client';

const Index = () => {
  const [session] = useSession();
  return (
    <div>
      {session?.user ? <p>Sign in as {session?.user.name}</p> : <p>Not Signed In</p>}
      <SignIn />
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Index;
