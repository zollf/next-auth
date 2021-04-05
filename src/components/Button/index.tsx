import React from 'react';
import styles from './styles.module.scss';

interface AnchorProps {
  href: string;
  onClick?: never;
  children?: React.ReactNode;
}

interface ButtonProps {
  onClick: () => void;
  href?: never;
  children?: React.ReactNode;
}

type Props = AnchorProps | ButtonProps;

const Button = ({ onClick, href, children }: Props) => {
  if (href) {
    return (
      <a href={href} className={styles.anchor}>
        <div className={styles.button}>{children}</div>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
