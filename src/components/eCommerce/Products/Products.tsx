import { Button } from "react-bootstrap";
import ProductImage from "../Category/ProductImage";
 
import styles from'./style.module.css';
const {product,productImg} = styles;

const Products =()=>{
return (
<div className={product}>
    <div className={productImg}>
    <ProductImage srcImgs="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg" altImgs="product1"/>
    </div>
    <h2>Title Product</h2>
    <h3>Price : 10 EGP</h3>
    <Button variant="info" style={{color:"white"}}>Add to Cart</Button>
</div>
)
}

export default Products ;