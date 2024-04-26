import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/detail/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import CartWidgetContext from "./components/context/CartContext";
import Form from "./components/form/Form";

function App() {
  return (
    <>
      <CartWidgetContext>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/form" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </CartWidgetContext>
    </>
  );
}

export default App;
