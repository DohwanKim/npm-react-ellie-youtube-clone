import React, { memo } from 'react';
import styles from 'components/header/header.module.css';

const Header = memo(({ onSearch, onReset }) => {
  const logoImage = require('assets/logo.png');
  const searchImage = require('assets/search.png');
  const inputRef = React.useRef();
  const handleSearch = () => {
    const value = inputRef.current?.value ?? '';

    onSearch(value);
  };

  return (
    <header>
      <div className={styles.logoArea} onClick={onReset}>
        <img src={logoImage} alt="" />
        Youtube
      </div>
      <div className={styles.inputArea}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search video"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <button type="button" onClick={handleSearch}>
          <img src={searchImage} alt="" />
        </button>
      </div>
    </header>
  );
});

export default Header;
