import { Link } from "react-router-dom";
import { items } from "../../Helpers/Items.js";

const Tazas = () => {
    const tazaItems = items.filter((item) => item.categoría === "Taza");

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h2>Tazas</h2>
                <img src="/Images/tazas magicas.png" alt="tazas" height={200} width={200} />
            </div>
            {tazaItems.map((item) => (
                <div key={item.id} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <Link to={`/ItemListContainer/${item.id}`}>{item.title}</Link>
                </div>
            ))}
        </>
    );
};

export default Tazas;
