import Image from "next/image";
import styles from "./signIn.module.css"
import { useState } from 'react';

export default function Home() {
  const [invisible, setInvisible] = useState<boolean>(true);

  const toggleVisibility = (): void => {
    setInvisible(!invisible);
  };

  return (
    <main>
      <div className={styles.signIn}/>
        <div className={styles.container}>

          <div className={styles.header}>
            Sign in to your Account!
          </div>
    
           <div className={styles.main}>
             <input type="email" placeholder="Enter Email"/>

              <div className={styles.passwordContainer}>   
                <input id="password" type={invisible ? 'password' : 'text'} placeholder="Enter Password"/>
                <Image src={invisible ? 'img/invisible.svg' : 'img/visible.svg'} alt="" id="visible" onClick={toggleVisibility}/>
              </div>
                
            </div>

           <div className={styles.forgotPassword}>
             <a href="#">Forgot Password? - Click here!</a>
           </div>

            <div className={styles.footer}>
              <a href="index.html">                
                <button className={styles.submitBtn}>
                    Submit
                </button>
              </a>

          </div>

          <div className={styles.sigUp}>
            <a href="">
              Don&apost have an account? - <br/>
              Create one for free here!
            </a>
          </div>
            
        </div>
      <div/>
    </main>
  );
}