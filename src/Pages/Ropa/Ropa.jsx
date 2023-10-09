import { Link } from "react-router-dom";
import { items } from "../../Helpers/Items.js";

const Ropa = () => {
    // Filtra los elementos con la categoría "Ropa"
    const ropaItems = items.filter((item) => item.categoría === "Ropa");

    return (
        <>
            <div
                style={{
                    textAlign: "center"
                }}
            >
                <h2>Ropa</h2>
                <img src="/Images/remeras.png" alt="remeras"
                    height={200}
                    width={200}
                />
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
                        <Link to={`/Categorias/${item.id}`}>{item.title}</Link>
                    </div>
                );
            })}
        </>
    );
};

export default Ropa;
