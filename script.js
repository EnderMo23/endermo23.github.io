function loadItems() {
    const item = document.getElementById("item");
    const amount = 9
    for (let i = 0; i < amount; i++) {
        let clone = item.cloneNode(true);
        const infoElement = clone.querySelector(".info h3");
        const priceElement = clone.querySelector(".price");
        infoElement.textContent = getRandomName();
        priceElement.textContent = getRandomPrice();

        document.getElementById("itemList").appendChild(clone);
    };

    for (let i; i < amount; i++) {

    }
}

function getRandomName() {
    const prefixes = ["Special", "Delicious"]
    const name = ["Chug Jug", "Chug Splash", "Slap Splash", "Chilli Chug Jug", "Flowberry", "Flowberry Fizz"]
    const extra = ["Pro Max", "Mini", "XXL", "v2", "v3", "IShowDick", "Pro", "i7", "Q3"]
    const flavours = ["Banana", "Strawberry", "Blueberry", "Vanilla", "Chocolate", "Raspberry"]
    
    let finalName = ""
    if (getRndInt(0, 1) == 1) { finalName += prefixes[getRndInt(0, prefixes.length - 1)] + " " }
    finalName += name[getRndInt(0, name.length - 1)] + " "
    finalName += extra[getRndInt(0, extra.length - 1)] + " "
    if (getRndInt(0, 1) == 1) { finalName += flavours[getRndInt(0, flavours.length - 1)] + " Flavour" }
        
    return finalName
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