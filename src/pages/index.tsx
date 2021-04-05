import React from 'react';
import { useSession, signOut } from 'next-auth/client';

const Index = () => {
  const [session] = useSession();
  return (
    <div>
      {session?.user ? <p>Sign in as {session?.user.name}</p> : <p>Not Signed In</p>}
      <section>
        <a href="/signIn">Sign In</a>
        <a href="/signUp">Sign Up</a>
        <a href="/api/users">View All Users</a>
      </section>
      {session?.user && <button onClick={() => signOut()}>Logout</button>}
    </div>
  );
};

export default Index;
