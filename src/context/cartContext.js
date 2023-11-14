import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const itemInCart = cart.find((cartItem) => cartItem.id === item.id);
        if (itemInCart) {
            itemInCart.quantity += quantity;
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
