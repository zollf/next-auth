import React, { useState } from 'react';
import Router from 'next/router';
import { signIn } from 'next-auth/client';
import { Button, Input } from '@/components';

const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const onSubmit = () => {
    signIn('credentials', { name, password, redirect: false }).then((res) => {
      if (res.error) {
        setError(true);
      } else {
        Router.push('/');
        setError(false);
      }
    });
  };

  return (
    <fieldset data-test-error={error}>
      {error && <p data-test-id="error">Credentials are incorrect</p>}
      <section>
        <label htmlFor="username">Username</label>
        <Input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </section>
      <Button onClick={onSubmit}>Submit</Button>
    </fieldset>
  );
};

export default SignIn;
