import React from "react";
import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Divider,
  Text,
  Heading,
  Button,
  Image,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ p }) => {
  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image
            className="img"
            src={p.imagen}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{p.nombre}</Heading>
            <Text className="precio" color="white" fontSize="2xl">
              ${p.precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              background=" rgb(117, 83, 40);"
              color="white"
              width="80%"
              fontSize="large"
            >
              <Link to={`/item/${p.id}`}> Detalle </Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
