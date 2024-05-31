export default class Item {
    info: string;
    price: string;
    img: string;
      
    constructor(info: string, price: string, img: string) {
      this.info = info;
      this.price = price;
      this.img = img;
    };
  };