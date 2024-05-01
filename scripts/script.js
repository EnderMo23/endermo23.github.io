const sortSelect = document.getElementById("sort-select");
sortSelect.addEventListener("change", updateList);
const itemList = document.getElementById("itemList");
const itemElement = document.getElementById("item");
itemElement.remove();
const items = [];
const names = ["Chug Jug", "Chug Splash", "Slap Splash", "Chilli Chug Splash", "Flowberry", "Flowberry Fizz"];
const amount = 10;


window.onload = function() {
    const preloader = document.querySelector('.preloader');

    generateItems();
    updateList();

    preloader.remove();
}

class Item {
    constructor(info, price, img) {
      this.info = info;
      this.price = price;
      this.img = img;
    }
}

function sortItems() {
    const sortValue = sortSelect.value;
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
        console.log("r");
        shuffleArray(items)
    }
}

function updateList() {
    itemList.innerHTML = "";
    sortItems()
    displayItems();
}

function generateItems() {
    for (let i = 0; i < amount; i++) {
        itemName = names[getRndInt(0, names.length - 1)];
        items.push(new Item(
            getRandomName(itemName),
            getRandomPrice(),
            getImage(itemName)
        ));
    };
}

function displayItems() {
    items.forEach(item => {
        let clone = itemElement.cloneNode(true);
        clone.style.visibility = "visible";

        const infoElement = clone.querySelector(".info h3");
        const priceElement = clone.querySelector(".price");
        const imgElement = clone.querySelector("img");
        infoElement.textContent = item.info;
        priceElement.textContent = item.price;
        imgElement.src = item.img;

        itemList.appendChild(clone);
    })
}

function getRandomName(itemName) {
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

function getImage(itemName) {
    switch (itemName) {
        case "Chug Jug":
            return "/img/products/chug-jug.jpeg";
        case "Chug Splash":
            return "/img/products/chug-splash.jpeg";
        case "Slap Splash":
            return "/img/products/slap-splash.jpeg";
        case "Chilli Chug Splash":
            return "/img/products/chili-chug-splash.jpeg";
        case "Flowberry":
            return "/img/products/flowberry.jpeg";
        case "Flowberry Fizz":
            return "/img/products/flowberry-fizz.jpeg";
        default:
            throw new Error("Invalid item name: " + itemName)
    }
}

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function getRandomPrice() {
    const extra = [".99", ".50", ".20", "", ".42", ".69"];
    let price = 
        "$" + 
        getRndInt(2, 15) +
        extra[getRndInt(0, extra.length - 1)]
    
    return price
}
