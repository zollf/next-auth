import React, { useState } from 'react';
import Router from 'next/router';

const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
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
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <section>
        <label htmlFor="username">Username</label>
        <input value={name} name="username" type="text" onChange={(e) => setName(e.target.value)} />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <input value={password} name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
      </section>
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SignUp;
