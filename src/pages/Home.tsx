import Category from "@components/eCommerce/Category/Category";
import { Col, Container, Row } from "react-bootstrap";

const Home =()=>{
return (
    <Container>
        <Row>
            <Col xs={6} md={3} className="d-flex justify-content-center mt-2 mb-5">
                <Category/>
            </Col>
            <Col xs={6} md={3} className="d-flex justify-content-center mt-2 mb-5">
                <Category/>
            </Col>
            <Col xs={6} md={3} className="d-flex justify-content-center mt-2 mb-5">
                <Category/>
            </Col>
            <Col xs={6} md={3} className="d-flex justify-content-center mt-2 mb-5">
                <Category/>
            </Col>
            <Col xs={6} md={3} className="d-flex justify-content-center mt-2 mb-5">
                <Category/>
            </Col>
            <Col xs={6} md={3} className="d-flex justify-content-center mt-2 mb-5">
                <Category/>
            </Col>
            <Col xs={6} md={3} className="d-flex justify-content-center mt-2 mb-5">
                <Category/>
            </Col>
            <Col xs={6} md={3} className="d-flex justify-content-center mt-2 mb-5">
                <Category/>
            </Col>
        </Row>


    </Container>

)
}

export default Home ;