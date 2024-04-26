import React from "react";
import ItemCount from "./ItemCount";
import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Divider,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const ItemDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "Chocolates", `${id}`);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setProduct(docs);
      } else {
        console.log("Producto no encontrado");
      }
    });
  }, [id]);
  return (
    <>
      <div key={product.id}>
        <Card width="500px">
          <CardBody>
            <Image
              className="img"
              src={product.imagen}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.nombre}</Heading>
              <Text>{product.descripcion}</Text>
              <Text color="white" fontSize="2xl">
                ${product.precio}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ItemCount
              id={id}
              nombre={product.nombre}
              precio={product.precio}
            ></ItemCount>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default React.memo(ItemDetail);
