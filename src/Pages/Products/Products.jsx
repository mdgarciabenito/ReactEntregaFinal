//import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
//import { useItems } from '../../Hooks/useItems'
import { items } from '../../Helpers/Items' 

const Products = () => {
  
    //const items = useItems()
    //console.log(items)
  
  return (
    //listado de productos
    <>
    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
      <h2>Products</h2>
    </div>
    {
      items.map((item) => {
        return (
          <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <Link to={`/products/${item.id}`}>{item.producto}</Link>
          </div>
        )
      })
    }
    </>

  )
}

export default Products