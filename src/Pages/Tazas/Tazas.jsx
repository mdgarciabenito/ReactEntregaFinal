import { Link } from "react-router-dom";
import { items } from "../../Helpers/Items.js";

const Tazas = () => {
    // Filtrar los elementos con la categoría "Ropa"
    const tazaItems = items.filter((item) => item.categoría === "Taza");

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <h2>Tazas</h2>
            </div>
            {tazaItems.map((item) => {
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

export default Tazas