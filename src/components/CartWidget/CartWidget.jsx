import React from 'react';
import carrito from "./carrito.png";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const CartWidget = () => {
  return (
    <>
    
    <Nav.Link as={Link} to="/Cart" >
      <img src={carrito} alt="logocarrito" width={100} />
      </Nav.Link>
    </>
  )
}

export default CartWidget