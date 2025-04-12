import Products from "@components/eCommerce/Products/Products";
import { Col, Container, Row } from "react-bootstrap";
import { useAppDispatch,useAppSelector } from "@store/Hooks";
import { actGetProductByCategoryPrefix,productCleanUp } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Product =()=>{
    const params =useParams();
    const dispatch =useAppDispatch();
    const {loading,error,records} = useAppSelector(state=>state.productsSlice)
    useEffect(()=>{
        // let prefix:string;
        // if(params.prefix && typeof params.prefix ==="string" ){
        //     prefix = params.prefix;
        //     dispatch(actGetProductByCategoryPrefix(prefix));
        // }
        dispatch(actGetProductByCategoryPrefix(params.prefix as string));
        return ()=>{
          dispatch(productCleanUp());  
        }
    },[dispatch,params]);

    // render product
    const renderProductsList = records.map((record) => {
        return (
            <Col xs={6} md={3} className="d-flex justify-content-center mt-2 mb-5" key={record.id}>
                <Products {...record} />
            </Col>
        );
    });
return (
<Container>
<Row>
{renderProductsList}
</Row>
</Container>

)
}

export default Product ;