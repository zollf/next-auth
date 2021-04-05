import React from 'react';
import { useRouter } from 'next/router';
import { SignIn as SignInBlock, Wrapper } from '@/components';

const SignIn = () => {
  const router = useRouter();
  const { error } = router.query;
  return (
    <Wrapper>
      <h1>Sign In</h1>
      {error && <p>Credentials are incorrect</p>}
      <SignInBlock />
    </Wrapper>
  );
};

export default SignIn;
