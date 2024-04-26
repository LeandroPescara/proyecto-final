import React, { useState, useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loading from "../loading/Loading";

const ItemListContainer = () => {
  const { categoria } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "products");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setProducts(docs);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filtradoProductos = products.filter(
    (producto) => producto.categoria == categoria
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main">
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {categoria ? (
              <ItemList productos={filtradoProductos} />
            ) : (
              <ItemList productos={products} />
            )}
          </Grid>
        </main>
      )}
    </>
  );
};

export default ItemListContainer;
