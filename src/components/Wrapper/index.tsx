import React from 'react';
import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => <div className={styles.wrapper}>{children}</div>;

export default Wrapper;
