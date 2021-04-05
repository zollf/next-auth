import React from 'react';
import styles from './styles.module.scss';

interface Props {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'password';
  name: string;
}
const Input = ({ value, onChange, type, name }: Props) => {
  return <input value={value} onChange={onChange} type={type} className={styles.input} name={name} />;
};

export default Input;
