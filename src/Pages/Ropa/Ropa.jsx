import { Link } from "react-router-dom";
import { items } from "../../Helpers/Items.js";

const Ropa = () => {
    // Filtrar los elementos con la categoría "Ropa"
    const ropaItems = items.filter((item) => item.categoría === "Ropa");

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <h2>Ropa</h2>
            </div>
            {ropaItems.map((item) => {
                return (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <Link to={`/products/${item.id}`}>{item.title}</Link>
                    </div>
                );
            })}
        </>
    );
};

export default Ropa;
