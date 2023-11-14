import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useCart } from "../../context/cartContext";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Itemcount from "../ItemCount/ItemCount";

const Item = () => {
    const { itemId } = useParams();
    const numericItemId = parseInt(itemId, 10);
    const [product, setProduct] = useState(null);
    const { addItem } = useCart();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const itemCollection = collection(db, "Items");
            try {
                const itemSnapshot = await getDocs(itemCollection);
                const items = itemSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                const productData = items.find((item) => item.id === numericItemId);
                setTimeout(() => {
                    setProduct(productData);
                    setIsLoading(false);
                }, 2000);
            } catch (error) {
            }
        };

        fetchData();
    }, [numericItemId]);

    const agregarCarrito = (quantity) => {
        if (quantity > 0) {
            const itemToAdd = {
                id: product.id,
                title: product.Titulo,
                precio: product.Precio,
                cantidad: quantity,
            };
            addItem(itemToAdd, quantity);
            console.log('Producto agregado al carrito:', itemToAdd);
        }
    };

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <img src={product.url} alt={product.Titulo} width={200} height={200} />
                <div>
                    <h2>
                        {product.Titulo} ${product.Precio}
                    </h2>
                    <Itemcount initial={1} stock={10} onAdd={agregarCarrito} />
                </div>
            </div>
        </>
    );
};

export default Item;
