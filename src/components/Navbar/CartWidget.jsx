import imgCarrito from "../../assets/carrito.png";
import { CartWidgetContext } from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartWidgetContext);

  return (
    <>
      <div className="cart">
        <p className="cantCart">{totalQuantity}</p>
        <img className="imgCarrito" src={imgCarrito} alt="" />
      </div>
    </>
  );
};

export default CartWidget;
