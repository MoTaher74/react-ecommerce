interface IProps{
    srcImgs:string,
altImgs:string

}

const ProductImage =({srcImgs,altImgs}:IProps)=>{
return (
<img src={srcImgs} alt={altImgs}/>

)
}

export default ProductImage ;