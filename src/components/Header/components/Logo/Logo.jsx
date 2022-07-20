// rfc
import React from 'react';
import logo1 from './01.png';
import Styles from './Logo.module.css';

function Logo() {
  return (
    <div className={Styles.logo}>
      <img src={logo1} alt="logo" />
    </div>
  );
}

export default Logo;
