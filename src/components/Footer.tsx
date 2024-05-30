import React from 'react';
import styles from '../app/page.module.css'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.headerImpr}>
        <h2>Impressum</h2>
      </div>

      <ul className={styles.links}>
        <Link href="/">• Discord</Link>
        <Link href="/">• Support</Link>
        <Link href="/">• Managemant</Link>
        <Link href="https://www.twitch.tv/hbjju">• Hibutschu Twitch</Link>
      </ul>

    </footer>
  )
};