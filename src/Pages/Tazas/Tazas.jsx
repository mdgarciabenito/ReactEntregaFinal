import { Link } from "react-router-dom";
import { items } from "../../Helpers/Items.js";

const Tazas = () => {
    // Filtra los elementos con la categoría "Tazas"
    const tazaItems = items.filter((item) => item.categoría === "Taza");

    return (
        <>
            <div
                style={{
                    textAlign: "center"
                }}
            >
                <h2>Tazas</h2>
                <img src="/Images/tazas magicas.png" alt="tazas"
                    height={200}
                    width={200}
                />
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
                        <Link to={`/Categorias/${item.id}`}>{item.title}</Link>
                    </div>
                );
            })}
        </>
    );
};

export default Tazas