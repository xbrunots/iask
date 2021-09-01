// import Head from 'next/head'
import {
  Heading,
  Grid,
  Flex,
  Link,
  Button,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/core";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import QRCode from "qrcode.react";
import Divider from "../../components/Divider";
import Input from "../../components/Input";
import ReactDOM from "react-dom";
import $ from "jquery";

Home.getInitialProps = async (ctx) => {
  const res = await fetch("../api/start");
  const json = await res.json();
  return {
    code: json.code,
  };
};

export default function Home({ code }) {
  const router = useRouter();

  const [show, setShow] = React.useState(false);

  const [qrcode, setQrcode] = React.useState(null);

  const handleClick = () => setShow(!show);

  const axios = require("axios").default;

  const goHome = (e) => {
    e.preventDefault();
    router.push("./app");
  };

  const getQRCode = async () => {};

  return (
    <Grid
      as="main"
      height="100%"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Flex
        gridArea="form"
        height="500"
        width="300"
        position="absolute"
        left="30%"
        top="20%"
        backgroundColor="#eeeeee"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        {code ? <QRCode size={290} value={code} /> : <p>Carregando QRCode</p>}{" "}
        <Button
          className="buttonLogin"
          backgroundColor="#000000"
          color="#FFFFFF"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{
            boxShadow: "0 0 10px black",
          }}
          onClick={() => getQRCode()}
        >
          ENTRAR{" "}
        </Button>{" "}
      </Flex>{" "}
    </Grid>
  );
}
