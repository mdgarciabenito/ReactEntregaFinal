import React from 'react';
import { useCart } from '../../context/cartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeItem, clear } = useCart();

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div>
                <p>Producto: {item.title}</p>
                <p>Precio: ${item.precio}</p>
                <p>Cantidad: {item.cantidad}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clear}>Vaciar Carrito</button>
      <Link to="/">
        <button className="Button">
          Seguir Comprando
        </button>
      </Link>
    </div>
  );
}

export default Cart;
