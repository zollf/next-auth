import React, { useState } from 'react';
import Router from 'next/router';
import { Button, Input } from '@/components';

const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = async () => {
    if (name && password) {
      try {
        const response = await fetch('/api/signUp', {
          method: 'POST',
          body: JSON.stringify({ name, password }),
        }).then((res) => res.json());
        if (!response.error) {
          setError(false);
          Router.push('/');
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <fieldset data-test-error={error}>
      {error && <p>An Error has occurred</p>}
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
