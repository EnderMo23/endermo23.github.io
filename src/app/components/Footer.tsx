'use client';
import React from 'react';
import styles from '../page.module.css'
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.headerImpr}>
        <h2>Impressum</h2>
      </div>

      <ul className={styles.links}>
        <Link href="/">• Discord</Link>
        <Link href="/">• Support</Link>
        <Link href="/">• Managemant</Link>
        <Link href="/">• Hibutschu Twitch</Link>
      </ul>

    </footer>
  )
};

export default Header;