"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Item from "../components/Item";
import { useRef, useEffect } from "react";


export default function Home() {
  const sortSelect = useRef<HTMLSelectElement>(null);
  const itemList = useRef<HTMLDivElement>(null);
  const itemElement = useRef<HTMLDivElement>(null);
  const preloader = useRef<HTMLDivElement>(null);
  const infoElement = useRef<HTMLHeadingElement>(null);
  const priceElement = useRef<HTMLElement>(null);
  const imgElement = useRef<HTMLImageElement>(null);

  itemElement.current?.remove();
  const items: Item[] = [];
  const names: string[] = ["Chug Jug", "Chug Splash", "Slap Splash", "Chilli Chug Splash", "Flowberry", "Flowberry Fizz"];
  const amount: number = 1;

  useEffect(() => {
    generateItems();
    updateList();

    preloader.current?.remove();
  });

  class Item {
    info: string;
    price: string;
    img: string;
      
    constructor(info: string, price: string, img: string) {
      this.info = info;
      this.price = price;
      this.img = img;
    };
  };

  function sortItems(): void {
    const sortValue = sortSelect.current?.value;
    if (sortValue !== "random") {
      items.sort((a, b) => {
      const priceA = parseFloat(a.price.slice(1));
      const priceB = parseFloat(b.price.slice(1));
      if (sortValue === "price-low") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    } else if (sortValue == "random") {
      shuffleArray(items);
    }
  }

  function updateList(): void {
      itemList.current!.innerHTML = "";
      sortItems();
      displayItems();
  }

  function generateItems(): void {
      for (let i = 0; i < amount; i++) {
          const itemName: string = names[getRndInt(0, names.length - 1)];
          items.push(new Item(
              getRandomName(itemName),
              getRandomPrice(),
              getImage(itemName)
          ));
      };
  }

  function displayItems(): void {
    items.forEach(item => {
      let clone = itemElement.current?.cloneNode(true) as HTMLElement;
      clone.style.visibility = "visible";

      infoElement.current!.textContent = item.info;
      priceElement.current!.textContent = item.price;
      imgElement.current!.src = item.img;

      itemList.current?.appendChild(clone);
      })
  }

  function getRandomName(itemName: string): string {
      const prefixes = ["Special", "Delicious"];
      const extras = ["Pro Max", "Mini", "XXL", "v2", "v3", "Pro", "i7", "Q3"];
      const flavours = ["Banana", "Strawberry", "Blueberry", "Vanilla", "Chocolate", "Raspberry"];

      let finalName = "";
      if (getRndInt(0, 1) == 1) { finalName += prefixes[getRndInt(0, prefixes.length - 1)] + " " };
      finalName += itemName + " ";
      if (getRndInt(0, 3) != 1) { finalName += extras[getRndInt(0, extras.length - 1)] + " " };
      if (getRndInt(0, 1) == 1) { finalName += flavours[getRndInt(0, flavours.length - 1)] + " Flavour" };

      return finalName
  }

  function getImage(itemName: string): string {
      switch (itemName) {
          case "Chug Jug":
              return "products/chug-jug.jpeg";
          case "Chug Splash":
              return "products/chug-splash.jpeg";
          case "Slap Splash":
              return "products/slap-splash.jpeg";
          case "Chilli Chug Splash":
              return "products/chili-chug-splash.jpeg";
          case "Flowberry":
              return "products/flowberry.jpeg";
          case "Flowberry Fizz":
              return "products/flowberry-fizz.jpeg";
          default:
              throw new Error("Invalid item name: " + itemName)
      }
  }

  function getRndInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function shuffleArray(array: Array<Item>): void {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
  }

  function getRandomPrice(): string {
      const extra = [".99", ".50", ".20", "", ".42", ".69"];
      let price = 
          "$" + 
          getRndInt(2, 15) +
          extra[getRndInt(0, extra.length - 1)]

      return price
  }

  return (
    <main>
      <div className={styles.shop}>
        <div className={styles.searchFilter}>
          <h3>Sort</h3>
          <select ref={sortSelect} onChange={updateList}>
            <option value="random">Random</option>
            <option value="price-low">Price (Low to High)</option>
            <option value="price-high">Price (High to Low)</option>
          </select>
        </div>
        <hr/>
        <div className={styles.itemList} ref={itemList}>

          <div className={styles.item} ref={itemElement} style={{ visibility: "hidden" }}>
            <Image src="" alt="" ref={imgElement} className={styles.img}/>
            <div className={styles.info}>
              <h3 ref={infoElement}>Name</h3>
              <span className={styles.shoppingCart}>
                  <Image className={styles.imgCart} src="shopping_cart.svg" alt="ShoppingCart" height={30} width={30}/>
              </span>
              <span ref={priceElement} className={styles.price}>Price</span>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
