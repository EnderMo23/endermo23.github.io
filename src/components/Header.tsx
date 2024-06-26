import React from 'react';
import styles from '../app/page.module.css'
import Link from 'next/link';
import Image from 'next/image';

import Profile from '@/app/profile/page';

export default function Header() {
  return (

    
    <header className={styles.header}>
      <Link href="/">
        <span style={{ color: "white" }} className={'material-symbols-outlined'}>home</span>
      </Link>

      <h2 className={styles.title}>Chug Store</h2>
      
      <div className={styles.profile}>
        <div className={styles.dropdown}>
          <Image src="/profile.svg" alt="Profile" width={40} height={40}/>
          <div className={styles.dropdownContent}>
            <Link href="profile" className={styles.navLinks}>Profile</Link>
            <Link href="/" className={styles.navLinks}>Settings</Link>
            <Link href="/" className={styles.navLinks}>News</Link>
            <Link href="/" className={styles.navLinks}>LogOut</Link>
          </div>
        </div>
      </div>
      
      <div className={styles.headerRight}>
      <Link href="/signup" className={styles.navLinks}>Sign Up</Link>
        <Link href="/signin" className={`${styles.active} ${styles.navLinks}`}>Sign In</Link>
        <Link href="/" className={styles.navLinks}>Order History</Link>
        <Link href="/" className={styles.navLinks}>
          <Image src="/shopping_cart.svg" alt="Shopping Cart" width={20} height={20} className={styles.shoppingCartHeader}/> Shopping-Cart
        </Link>
      </div>
    </header>
  )
};