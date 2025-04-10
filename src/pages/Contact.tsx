interface IProps{
title:string,
description:string

}

const Contact =({title,description}:IProps)=>{
return (
    <>
    <h1>{title}</h1>
    <p>{description}</p>

    </>

)
}

export default Contact ;