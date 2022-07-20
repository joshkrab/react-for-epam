// rfc
import React from 'react';
import Styles from './Button.module.css';

function Button({ buttonText }) {
  return (
    <button
      className={Styles.button}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      {buttonText}
    </button>
  );
}

export default Button;
