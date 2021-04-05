import React, { useState } from 'react';
import Router from 'next/router';
import { Button, Input } from '@/components';

const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    if (name && password) {
      try {
        const response = await fetch('/api/signUp', {
          method: 'POST',
          body: JSON.stringify({ name, password }),
        });
        if (response) {
          Router.push('/');
        } else {
          Router.push(`/signUp?error='InternalError'`);
        }
      } catch (e) {
        Router.push(`/signUp?error='InternalError'`);
      }
    }
  };

  return (
    <fieldset>
      <section>
        <label htmlFor="username">Username</label>
        <Input value={name} name="name" type="text" onChange={(e) => setName(e.target.value)} />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <Input value={password} name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
      </section>
      <Button onClick={onSubmit}>Submit</Button>
    </fieldset>
  );
};

export default SignUp;
