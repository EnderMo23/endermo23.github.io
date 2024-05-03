"use client";
import Image from "next/image";
import styles from "./page.module.css"
import { useState } from 'react';


export default function SignIn() {
  const [invisible, setInvisible] = useState<boolean>(true);

  const toggleVisibility = (): void => {
    setInvisible(!invisible);
  };

  return (
    <main className={styles.signIn}>
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
             <a href="/">                
               <button className={styles.submitBtn}>
                   Submit
               </button>
             </a>
         </div>
         <div className={styles.signUp}>
           <a href="">
             Don&apos;t have an account? - <br/>
             Create one for free here!
           </a>
         </div>
       </div>
    </main>
  );
}