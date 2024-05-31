import Image from "next/image"
import Item from "../lib/Item"

export default function ProductDetails( {params}: {
        params: {itemName: string}
    }
){
    const item: Item = new Item(params.itemName, "", "next.svg")
    return(
        <>
            <h1>Details about product {item.info}</h1>
            <Image width={300} height={300} alt="Product" src={item.img} />
        </>
    ) 
}