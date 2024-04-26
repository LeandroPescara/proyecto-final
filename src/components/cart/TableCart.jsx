import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
} from "@chakra-ui/react";
import { useContext, React } from "react";
import { CartWidgetContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const TableCart = () => {
  const { cart, clearCart, removeItem, totalQuantity } =
    useContext(CartWidgetContext);

  if (cart.length === 0) {
    return (
      <div className="contenedorNoProducts">
        <h1 className="tituloNoProducts">CUIDADO</h1>
        <h2 className="noProducts">No se encuentra productos en el carrito</h2>
      </div>
    );
  }

  const sumTotal = cart.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  return (
    <div className="mainCartEntero">
      <div className="cartMain">
        <TableContainer width="80%">
          <Table variant="simple">
            <Tr>
              <Th width="20%" borderColor="black">
                Producto
              </Th>
              <Th width="20%" borderColor="black" isNumeric>
                Precio
              </Th>
              <Th width="20%" borderColor="black" isNumeric>
                Cantidad
              </Th>
              <Th width="20%" borderColor="black" isNumeric>
                Total
              </Th>
              <Th width="20%" borderColor="black">
                Eliminar
              </Th>
            </Tr>
          </Table>
        </TableContainer>
        {cart.map((p) => (
          <TableContainer width="80%">
            <Table variant="simple">
              <Thead></Thead>
              <Tbody>
                <Tr key={p.id}>
                  <Td width="20%" borderColor="black">
                    {p.nombre}
                  </Td>
                  <Td width="20%" borderColor="black" isNumeric>
                    ${p.precio}
                  </Td>
                  <Td width="20%" borderColor="black" isNumeric>
                    {p.quantity}
                  </Td>
                  <Td width="20%" borderColor="black" isNumeric>
                    ${p.precio * p.quantity}
                  </Td>
                  <Td width="20%" borderColor="black">
                    <button
                      className="eliminarProducto"
                      onClick={() => removeItem(p.id)}
                    >
                      X
                    </button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        ))}
        <TableContainer width="80%">
          <Table variant="simple">
            <Tr>
              <Th width="20%" borderColor="black"></Th>
              <Th width="20%" borderColor="black" isNumeric></Th>
              <Th
                width="20%"
                borderColor="black"
                fontSize="bold"
                color="black"
                isNumeric
              >
                {totalQuantity}
              </Th>
              <Th
                width="20%"
                borderColor="black"
                fontSize="bold"
                color="black"
                isNumeric
              >
                {sumTotal}
              </Th>
              <Th
                width="20%"
                borderColor="black"
                fontSize="large"
                color="black"
              >
                <button className="eliminarCarrito" onClick={clearCart}>
                  Limpiar carrito
                </button>
              </Th>
            </Tr>
          </Table>
        </TableContainer>
      </div>
      <button className="finalizarCompra">
        <Link to={`/form`}> Finalizar compra </Link>
      </button>
    </div>
  );
};

export default TableCart;
