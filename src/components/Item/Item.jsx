import React from 'react'
import { useParams } from 'react-router-dom'
import { getItemById } from '../../Helpers/Items'

const Item = () => {
    const { itemId } = useParams()
    const numericItemId = parseInt(itemId, 10);
    const product = getItemById(numericItemId)

    return (
        <>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            {/* <img src={product.url} alt={product.title} /> */}
            <div>
                <h2>{product.title} ${product.precio}</h2>
            </div>

        </div>
        </>
    )
}

export default Item