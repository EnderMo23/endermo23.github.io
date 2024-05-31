import Image from "next/image"
import Item from "../Item"

export default function ProductDetails( {params}: {
        params: {itemName: string, itemImg: "string"}
    }
){
    const item: Item = new Item(params.itemName, "", params.itemImg)
    return(
        <>
            <h1>Details about product {item.info}</h1>
            <Image src={item.img} width={300} height={300} alt="Product"></Image>
        </>
    ) 
}