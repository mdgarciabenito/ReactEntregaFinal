import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Title from "./components/Title/Title";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import Ropa from "./Pages/Ropa/Ropa";
import Tazas from "./Pages/Tazas/Tazas";
import Varios from "./Pages/Varios/Varios";
import Cart from "./Pages/Cart/Cart";
import Item from "./components/Item/Item";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <CartProvider value={[]}>
      <BrowserRouter>
        <NavBar />
        <Title />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Ropa" element={<Ropa />} />
          <Route path="/Tazas" element={<Tazas />} />
          <Route path="/Varios" element={<Varios />} />
          <Route path="/ItemListContainer/:itemId" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
