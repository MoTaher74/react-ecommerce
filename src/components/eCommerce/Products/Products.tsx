import { Button } from "react-bootstrap";
import ProductImage from "../Category/ProductImage";
import styles from'./style.module.css';
const {product,productImg} = styles;
interface IProd{
    id:number;
    title:string;
    img:string;
    price:string
}
const Products =({id,img,price,title}:IProd)=>{
return (
<div className={product} key={id}>
    <div className={productImg}>
    <ProductImage srcImgs={img} altImgs={title}/>
    </div>
    <h2 title={title}>{title}</h2>
    <h3>Price : {price}</h3>
    <Button variant="info" style={{color:"white"}}>Add to Cart</Button>
</div>
)
}

export default Products ;