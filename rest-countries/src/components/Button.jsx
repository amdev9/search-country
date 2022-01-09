import React from 'react';
import styles from './Button.module.scss';

const Button = () => {
  return (
    <>
      <button
        className={styles.btn}
        onClick={() => alert('scss setup')}
      >
        Button
      </button>
    </>
  );
};

export default Button;
