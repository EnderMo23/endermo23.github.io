"use client";
import Image from "next/image";
import styles from "./page.module.css"
import { useState, FormEvent } from 'react';
import PocketBase from 'pocketbase';
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { setCookies } from "../api/cookies";
import { cookies } from "next/headers";
import {testCookies} from "../api/test-cookies"


export default function SignUp() {
  const router = useRouter()
  const [invisible, setInvisible] = useState<boolean>(true);
  const db = new PocketBase('http://127.0.0.1:8090');

  function toggleVisibility(): void {
    setInvisible(!invisible);
  };

  async function addUser(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const data = {username, email, password}




    try {

      testCookies(username, email, password)

      /*const response = await fetch('/api/middleware', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, email, password})
  
      })
  
      if (response.ok) {
        console.log('Set cookies', response)
      }
      else {
        const errorText = await response.text();
        console.error('Error whileeeee setting the cookies', errorText)
      }*/
      await db.collection("users").create({
        "username": username,
        "email": email,
        "emailVisibility": false,
        "password": password,
        "passwordConfirm": password
      });

      router.push('/')
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <form className={styles.signIn} onSubmit={addUser}>
      <div className={styles.container}>

        <div className={styles.header}>
          Sign up to your Account!
        </div>

        <div className={styles.main}>
          
          <div className={styles.data}>
            <input type="email" name="email" placeholder="Enter Email"/>
            <input type="text" name="username" placeholder="Enter Username"/>
          </div>

          <div className={styles.passwordContainer}>   
            <input className={styles.password} name="password" type={invisible ? 'password' : 'text'} placeholder="Enter Password"/>
            <Image src={invisible ? 'invisible.svg' : 'visible.svg'} alt="" className={styles.visible} onClick={toggleVisibility} width={20} height={20}/>
            <input className={styles.password} name="password" type='password' placeholder="Confirm Password"/>
          </div>
        </div>

        <div className={styles.footer}>
          <button type="submit" className={styles.submitBtn}>Create Account</button>
        </div>

        <div className={styles.signin}>
          <Link href="/signin">
            Already have an account? - <br/>
            Sign in to it here!
          </Link>
        </div>

      </div>
    </form>
  );
}