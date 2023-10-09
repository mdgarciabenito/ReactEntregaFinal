import { Link } from 'react-router-dom'
import { items } from "../../Helpers/Items.js"

const Categorias = () => {

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <h2>Categorías</h2>
      </div>
      {
        items.map((item) => {
          return (
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <Link to={`/Categorias/${item.id}`}>{item.title}</Link>
            </div>
          )
        })
      }
    </>

  )
}

export default Categorias