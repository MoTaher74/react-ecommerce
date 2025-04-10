
import { HeaderBasket } from '../../eCommerce';
import { Badge, Container, Nav, Navbar} from 'react-bootstrap';
import styles from './style.module.css';
const {headerContainer,headerLogo} = styles;
const Header1 =()=>{
return (
   <header>
    <div className={headerContainer}>
        {/* Logo */}
        <h1 className={headerLogo}><span>Our</span> <Badge bg='secondary'>Ecom</Badge></h1>


        {/* cart basket */}
        <HeaderBasket/>
    </div>

    <Navbar expand="lg" className="bg-body-tertiary"
    bg='seco' data-bs-theme="info">
    <Container>
    <Navbar.Brand href="#home" className="fw-bold fs-3 text-uppercase">Ecom</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/product">Products</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
        <Nav >
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#register">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

    
   </header>

)
}

export default Header1 ;