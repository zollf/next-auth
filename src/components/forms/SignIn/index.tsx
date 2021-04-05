import React, { useState } from 'react';
import { signIn } from 'next-auth/client';

import styles from './styles.module.scss';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    signIn('credentials', { username, password });
  };

  return (
    <div className={styles.signIn}>
      <h1>Sign In</h1>
      <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SignIn;
