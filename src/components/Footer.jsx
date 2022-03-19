import React from 'react';
import CopyrightSharpIcon from '@mui/icons-material/CopyrightSharp';
import styles from './footer.module.css';

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className={styles.footerStyle}>
      <CopyrightSharpIcon /> {`LibCompare ${date}`}
      <p style={{ fontSize: '14px' }}>
        {'By '}
        <a
          target={'_blank'}
          className={styles.anchor}
          href={'http://dushyantgoyal.herokuapp.com/'}
          rel={'noreferrer noopener'}
        >
          {' Dushyant Goyal'}
        </a>
      </p>
    </footer>
  );
}
