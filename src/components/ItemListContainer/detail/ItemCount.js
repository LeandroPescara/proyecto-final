import { useContext, useState } from "react";
import { ButtonGroup, Button } from "@chakra-ui/react";
import { CartWidgetContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const ItemCount = ({ id, nombre, precio }) => {
  const [contador, setContador] = useState(0);

  const handleDecrement = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const handleIncrement = () => {
    setContador(contador + 1);
  };

  const { addItem } = useContext(CartWidgetContext);

  const handleOnAdd = () => {
    if (contador !== 0) {
      const item = {
        id,
        nombre,
        precio,
      };
      addItem(item, contador);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usted selecciono 0 productos!",
      });
    }
  };

  return (
    <>
      <ButtonGroup spacing="2">
        <div className="itemContador">
          <button className="buttonCont" onClick={handleDecrement}>
            {" "}
            -{" "}
          </button>
          <p className="numCont">{contador}</p>
          <button className="buttonCont" onClick={handleIncrement}>
            {" "}
            +{" "}
          </button>
        </div>
        <Button
          variant="solid"
          background=" rgb(117, 83, 40);"
          color="white"
          onClick={handleOnAdd}
        >
          Agregar a carrito
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
