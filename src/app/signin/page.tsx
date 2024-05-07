"use client";
import Image from "next/image";
import styles from "./page.module.css"
import { useRef, useState } from 'react';
import Link from 'next/link';

import PocketBase from 'pocketbase';

const db = new PocketBase('http://127.0.0.1:8090');
db.autoCancellation(false);

export default function SignIn() {
  const [invisible, setInvisible] = useState<boolean>(true);

  function toggleVisibility(): void {
    setInvisible(!invisible);
  };

  async function addUser(e:React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    try {
      await db.collection("test").create({
        "name": "test_username",
      })
      console.log("Completed!")
      //Link
      location.replace("/");
    } catch(error) {
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
          <input type="email" placeholder="Enter Email"/>
          <div className={styles.passwordContainer}>   
            <input className={styles.password} type={invisible ? 'password' : 'text'} placeholder="Enter Password"/>
            <Image src={invisible ? 'invisible.svg' : 'visible.svg'} alt="" className={styles.visible} onClick={toggleVisibility} width={20} height={20}/>
          </div>
        </div>

        <div className={styles.forgotPassword}>
          <a href="/">Forgot Password? - Click here!</a>
        </div>

        <div className={styles.footer}>

            <button type="submit" className={styles.submitBtn}>Submit</button>
  
          

          </div>

        <div className={styles.signUp}>
          <a href="">
            Don&apos;t have an account? - <br/>
            Create one for free here!
          </a>
        </div>

      </div>
    </form>
  );
}