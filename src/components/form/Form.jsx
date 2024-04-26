import { useState, useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartWidgetContext } from "../context/CartContext";
import Loading from "../loading/Loading";
import FormFinalizado from "./FormFinalizado";
import Swal from "sweetalert2";

const Form = () => {
  const { cart } = useContext(CartWidgetContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [ordenId, setOrdenId] = useState(null);
  const [loading, setLoading] = useState(false);
  const db = getFirestore();

  if (cart.length === 0) {
    return (
      <div className="contenedorNoProducts">
        <h1 className="tituloNoProducts">CUIDADO</h1>
        <h2 className="noProducts">No se encuentra productos en el carrito</h2>
      </div>
    );
  }

  const handreSubmit = (e) => {
    e.preventDefault();
    if (nombre !== "" && email !== "") {
      setLoading(true);
      const order = {
        buyer: { nombre, email },
        items: cart.map(({ id, nombre, precio, quantity }) => ({
          id,
          nombre,
          precio,
          quantity,
        })),
      };
      const ordersCollection = collection(db, "orden");
      addDoc(ordersCollection, order)
        .then(({ id }) => {
          setOrdenId(id);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error al agregar el pedido:", error);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Complete todos los campos!",
      });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : ordenId ? (
        <FormFinalizado nombre={nombre} email={email} ordenId={ordenId} />
      ) : (
        <div className="mainForm">
          <div className="contenedorForm">
            <div className="tituloForm">
              <h1>Formulario</h1>
            </div>
            <form className="form" on onSubmit={handreSubmit}>
              <input
                className="campoForm"
                type="text"
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
              />
              <input
                className="campoForm"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className="enviarForm" type="submit">
                Enviar
              </button>
            </form>
            <div className="idForm">
              <h3>ID de la compra: </h3>
              <p className="id"> {ordenId} </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
