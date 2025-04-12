import Category from "@components/eCommerce/Category/Category";
import { Col, Container, Row } from "react-bootstrap";
import { useAppDispatch,useAppSelector } from "@store/Hooks";
import { actGetCategories } from "@store/categories/categoriesSlices";
import { useEffect } from "react";


const Home =()=>{
const dispatch = useAppDispatch();
const {records,loading,error} = useAppSelector((state) => state.categoriesSlice);

useEffect(()=>{

    if(!records.length){
        dispatch(actGetCategories());
    }

},[dispatch,records]);

// render the products

const renderCategoriesList = records.map(record=> 
    <Col xs={6} md={3} className="d-flex justify-content-center mt-2 mb-5" key={record.id}>
                <Category {...record} />
    </Col>
)

return (
    <Container>
        <Row>
           {renderCategoriesList}
        </Row>


    </Container>

)
}

export default Home ;