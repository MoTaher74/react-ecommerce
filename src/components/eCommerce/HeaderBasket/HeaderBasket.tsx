import Logo from "@assets/Svg/cart.svg";
import styles from "./style.module.css";

const {basketContainer,basketQuantity} = styles;
const HeaderBasket =()=>{
return (<div className={basketContainer}>
    <div className={basketQuantity}>0</div>
    <img src={Logo} alt="Basket" />
    
    </div>

)
}

export default HeaderBasket ;