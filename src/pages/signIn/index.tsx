import React from 'react';
import { useRouter } from 'next/router';
import { SignIn as SignInBlock } from '@/components';

const SignIn = () => {
  const router = useRouter();
  const { error } = router.query;
  return (
    <div>
      <h1>Sign In</h1>
      {error && <p>Credentials are incorrect</p>}
      <SignInBlock />
    </div>
  );
};

export default SignIn;
