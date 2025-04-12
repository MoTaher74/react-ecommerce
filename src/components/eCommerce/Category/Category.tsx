import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';
import styles from'./style.module.css';
const {category,categoryImg,categoryTitle} = styles;


interface IProps{
    title:string;
    img:string;
    prefix:string;
}

const Category =({img,prefix,title}:IProps)=>{
return (
<div className={category}>
    <Link to={`/product/${prefix}`}>
    <div className={categoryImg}>
    <ProductImage srcImgs={img}
    altImgs={title}/>
    </div>
    <h4 className={categoryTitle}>{title}</h4>
 
    </Link>
    </div>
)
}

export default Category ;