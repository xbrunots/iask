// import Head from 'next/head'
import {
  Heading,
  Grid,
  Flex,
  Link,
  Button,
  Image,
  Text,
  List,
  InputGroup,
  InputRightElement,
  Box,
  Stack,
  SimpleGrid,
  Avatar,
  ListItem,
  Divider,
} from "@chakra-ui/core";
import {
  useRouter
} from "next/router";

import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";

import React from "react";
import QRCode from "qrcode.react";
import SideBarPrincipal from "../../../core/components/SideBarPrincipal";
import SideBarPerfil from "../../../core/components/SideBarPerfil";
import ClientesContainer from "../../../core/components/ClientesContainer";

import ReactDOM from "react-dom";
import $ from "jquery";
import {
  faAt,
  faBox,
  faCommentDollar,
  faFile,
  faFire,
  faLifeRing,
  faPlus,
  faRobot,
  faSlidersH,
  faThLarge,
  faTimes,
  faTools,
  faUser,
  faUsers,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";

Home.getInitialProps = async (ctx) => {
  // const res = await fetch("../api/start");
  // const json = await res.json();
  return {
    code: "json.code",
  };
};

export default function Home({
  code
}) {
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const [qrcode, setQrcode] = React.useState(null);
  const axios = require("axios").default;

  return ( <
    Flex as = "main"
    height = "100%"
    width = "100%"
    justifyContent = "center"
    alignItems = "center"
    minW = "100%"
    minH = "100%"
    alignContent = "center"
    backgroundColor = {
      "#FFFFFF"
    } >
    <
    List position = {
      "absolute"
    }
    top = {
      0
    }
    padding = {
      8
    }
    left = {
      240
    }
    width = {
      "calc(100% - 240px)"
    }
    height = "100%"
    justifyContent = "top"
    alignItems = "top"
    minW = {
      "calc(100% - 240px)"
    }
    minH = "100%"
    backgroundColor = {
      ""
    } >
    <
    SideBarPerfil / >
    <
    ListItem height = {
      80
    }
    width = {
      "calc(100% - 240px)"
    } >
    <
    ClientesContainer / >
    <
    /ListItem> < /
    List > <
    SideBarPrincipal selectedID = {
      "#btn_menu_clientes"
    }
    /> < /
    Flex >
  );
}