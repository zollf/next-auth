import React from 'react';
import { useSession, signOut } from 'next-auth/client';
import { Button, Wrapper } from '@/components';

const Index = () => {
  const [session] = useSession();
  return (
    <Wrapper data-logged-in={!!session}>
      <h1>Next Auth Login</h1>
      {session?.user ? <p>Sign in as {session.user.name}</p> : <p>Not Signed In</p>}
      <section>
        <Button href="/signIn">Sign In</Button>
        <Button href="/signUp">Sign Up</Button>
        <Button href="/api/users">View All Users</Button>
      </section>
      {session?.user && (
        <Button data-test-id="logout" onClick={() => signOut()}>
          Logout
        </Button>
      )}
    </Wrapper>
  );
};

export default Index;
