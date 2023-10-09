import { Link } from 'react-router-dom'
import { items } from "../../Helpers/Items.js"

const Products = () => {

  return (
    <>
    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
      <h2>Productos</h2>
    </div>
    {
      items.map((item) => {
        return (
          <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </div>
        )
      })
    }
    </>

  )
}

export default Products