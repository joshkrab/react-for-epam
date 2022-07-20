import React from 'react';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import Styles from './Header.module.css';

export default function Header() {
  return (
    <div className={Styles.header}>
      <Logo />
      <div>User Name</div>
      <Button buttonText="Logout" />
    </div>
  );
}
