import React from 'react';
import styles from 'components/header.module.css';

const Header = props => {
  const logoImage = require('assets/logo.png');
  const searchImage = require('assets/search.png');

  return (
    <header>
      <div className={styles.logoArea}>
        <img src={logoImage} alt="" />
        Youtube
      </div>
      <div className={styles.inputArea}>
        <input type={'text'} placeholder="Search video" />
        <button type={'button'}>
          <img src={searchImage} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
