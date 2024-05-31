'use client';
import React from 'react';
import styles from '../page.module.css'
import Image from 'next/image';
import ItemSite from '@/item/page';

export default function Item({
  title,
  imgSrc,
  price,
}: {
  title: string,
  imgSrc: string,
  price: string,
}) {
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
          <Image onClick={ItemSite}
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