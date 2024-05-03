'use client';
import React from 'react';
import styles from '../page.module.css'
import Image from 'next/image';

interface ItemProps {
  
}

const Item = ({ title, imgSrc, price }) => {
  return (
    <div className={styles.item} style={{ visibility: "hidden" }}>

      <Image
        src={imgSrc}
        alt=""
        className={styles.img}
      />

      <div className={styles.info}>

        <h3>{title}</h3>

        <span className={styles.shoppingCart}>
          <Image
            className={styles.imgCart}
            src="shopping_cart.svg"
            alt="ShoppingCart"
            height={30}
            width={30}
          />
        </span>
        <span className={styles.price}>{price}</span>
      </div>

    </div>
  )
};

export default Item;