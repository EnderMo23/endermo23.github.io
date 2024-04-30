class Item {
    constructor(info, price, img) {
      this.info = info;
      this.price = price;
      this.img = img;
    }
}

function loadItems() {
    const names = ["Chug Jug", "Chug Splash", "Slap Splash", "Chilli Chug Splash", "Flowberry", "Flowberry Fizz"]
    const itemElement = document.getElementById("item");
    const amount = 27
    const items = []

    for (let i = 0; i < amount; i++) {
        itemName = names[getRndInt(0, names.length - 1)]
        items.push(new Item(
            getRandomName(itemName),
            getRandomPrice(),
            getImage(itemName)
        ))

        const item = items[i]
        let clone = itemElement.cloneNode(true);

        const infoElement = clone.querySelector(".info h3");
        const priceElement = clone.querySelector(".price");
        const imgElement = clone.querySelector("img");
        infoElement.textContent = item.info;
        priceElement.textContent = item.price;
        imgElement.src = item.img;

        document.getElementById("itemList").appendChild(clone);
    };
}

function getRandomName(itemName) {
    const prefixes = ["Special", "Delicious"]
    const extras = ["Pro Max", "Mini", "XXL", "v2", "v3", "Pro", "i7", "Q3"]
    const flavours = ["Banana", "Strawberry", "Blueberry", "Vanilla", "Chocolate", "Raspberry"]

    let finalName = ""
    if (getRndInt(0, 1) == 1) { finalName += prefixes[getRndInt(0, prefixes.length - 1)] + " " }
    finalName += itemName + " "
    finalName += extras[getRndInt(0, extras.length - 1)] + " "
    if (getRndInt(0, 1) == 1) { finalName += flavours[getRndInt(0, flavours.length - 1)] + " Flavour" }
        
    return finalName
}

function getImage(itemName) {
    let fileName

    if (itemName == "Chug Jug") {
        fileName = "chug_jug_original";
    };
    if (itemName == "Chug Splash") {
        fileName = "chug_splash";
    }
    if (itemName == "Slap Splash") {
        fileName = "slap_splash";
    }
    if (itemName == "Chilli Chug Splash") {
        fileName = "chili_chug_splash"
    }
    if (itemName == "Flowberry") {
        fileName = "flowberry"
    }
    if (itemName == "Flowberry Fizz") {
        fileName = "flowberry_fizz"
    }

    return "img/products/" + fileName + ".jpeg"
}

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getRandomPrice() {
    const extra = [".99", ".50", ".20", "", ".42", ".69"];
    let price = 
        "$" + 
        getRndInt(2, 15) +
        extra[getRndInt(0, extra.length - 1)]
    
    return price
}
