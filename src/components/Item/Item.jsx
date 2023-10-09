import React from 'react'
import { useParams } from 'react-router-dom'
import { getItemById } from '../../Helpers/Items'
import Contador from '../Contador/Contador'

const Item = () => {
    const { itemId } = useParams()
    const numericItemId = parseInt(itemId, 10);
    const product = getItemById(numericItemId)

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                {<img src={product.url} alt={product.title}
                    width={200}
                    height={200}
                />}
                <div>
                    <h2>{product.title} ${product.precio}</h2>
                    <Contador initial={1} onAdd={(quantity) => console.log("Cantidad agregada: ", quantity)} />
                </div>

            </div>
        </>
    )
}

export default Item