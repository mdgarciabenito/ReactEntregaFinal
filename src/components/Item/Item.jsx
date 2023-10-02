import React from 'react'
import { useParams } from 'react-router-dom'
import { getItemById } from '../../Helpers/Items'

const Item = () => {
    const { itemId } = useParams()
    const product = getItemById(itemId)
    return (
        <>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            {/* <img src={product.url} alt={product.title} /> */}
            <div>
                <h2>Item: {product.title}</h2>
            </div>

        </div>
        </>
    )
}

export default Item