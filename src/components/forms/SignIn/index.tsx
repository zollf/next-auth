import React, { useState } from 'react';
import Router from 'next/router';
import { signIn } from 'next-auth/client';

const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    signIn('credentials', { name, password, redirect: false }).then((res) => {
      if (res.error) {
        Router.push(`/signIn?error=${res.error}`);
      } else {
        Router.push('/');
      }
    });
  };

  return (
    <div>
      <section>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={name} onChange={(e) => setName(e.target.value)} />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </section>
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SignIn;
