import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import logo from "./logo.png"
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="mi logo" width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Ropa" >Ropa</Nav.Link>
            <Nav.Link as={Link} to="/Tazas" >Tazas</Nav.Link>
            <Nav.Link as={Link} to="/Varios" >Varios</Nav.Link>
          </Nav>
        </Navbar>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;