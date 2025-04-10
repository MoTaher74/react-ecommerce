import ProductImage from './ProductImage';
import styles from'./style.module.css';

const {category,categoryImg,categoryTitle} = styles;

const Category =()=>{
return (
<div className={category}>
    <div className={categoryImg}>
    <ProductImage srcImgs="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg"
    altImgs='product1'/>
    </div>
    <h4 className={categoryTitle}>Title 1</h4>
    </div>
)
}

export default Category ;