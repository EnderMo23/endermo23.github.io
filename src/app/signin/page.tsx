"use client";
import Image from "next/image";
import styles from "./page.module.css"
import { useState, FormEvent } from 'react';
import PocketBase from 'pocketbase';
import Link from "next/link";
import { useRouter } from 'next/navigation'
import {createUser ,signIn } from "../api/auth";



export default function SignIn() {
  const router = useRouter()
  const [invisible, setInvisible] = useState<boolean>(true);

  function toggleVisibility(): void {
    setInvisible(!invisible);
  };

  async function addUser(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      signIn(email, password)

      router.push('/');
    } catch(error) {
      console.error(error);
    }
  }

  async function addGuest() {
    try {
      createUser("Guest", "guest@guest.com", "guestPassword", "guestPassword")
      router.push('/');
    }
    catch(error){
      console.error(error)
    }
  }

  return (
    <form className={styles.signIn} onSubmit={addUser}>
      <div className={styles.container}>

        <div className={styles.header}>
          Sign in to your Account!
        </div>

        <div className={styles.main}>
          <input type="email" name="email" placeholder="Enter Email"/>
          <div className={styles.passwordContainer}>   
            <input className={styles.password} name="password" type={invisible ? 'password' : 'text'} placeholder="Enter Password"/>
            <Image src={invisible ? 'invisible.svg' : 'visible.svg'} alt="" className={styles.visible} onClick={toggleVisibility} width={20} height={20}/>
          </div>
        </div>

        <div className={styles.forgotPassword}>
          <Link href="/">Forgot Password? - Click here!</Link>
        </div>

        <div className={styles.footer}>
          <button type="submit" className={styles.submitBtn}>Login</button>
        </div>

        <div className={styles.guest}>
          <button className={styles.guestBtn} onClick={addGuest}>Login as guest</button>
        </div>

        <div className={styles.signUp}>
          <Link href="/signup">
            Don&apos;t have an account? - <br/>
            Create one for free here!
          </Link>
        </div>

      </div>
    </form>
  );
}