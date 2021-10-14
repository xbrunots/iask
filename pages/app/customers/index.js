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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import SideBarPrincipal from "../../../core/components/SideBarPrincipal";
import SideBarPerfil from "../../../core/components/SideBarPerfil";
import ClientesContainer from "../../../core/components/ClientesContainer";
import { useEffect, useState } from "react";
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
import { useRouter } from "next/router";

Home.getInitialProps = async (ctx) => {
  return {
    code: "json.code",
  };
};
import api from '../../../core/service/api'

export default function Home() {
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const axios = require("axios").default;
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [clients, setClients] = React.useState(null);

  function getUser() {
    var user = localStorage.getItem('USER');
    return JSON.parse(user);
  }

  const getClients = async () => {
    if (!loading) {
      setLoading(true);
      setError(null);
      try {

        console.log(getUser());
        api.defaults.headers.common = {
          'token': localStorage.getItem('TOKEN')
        };
        const response = await api.get("/api/transform/clients/store_uid='" + getUser()['store'] + "'");

        setClients(response.data);

        setLoading(false);

      } catch (err) {
        setLoading(false);
        console.log(err);
        setError("E-mail ou senha inválidos!");
      }
    }
  };

  useEffect(() => {
    getClients();
  }, []);


  return (
    <Flex
      as="main"
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      minW="100%"
      minH="100%"
      alignContent="center"
      backgroundColor={"#FFFFFF"}
    >
      <List
        position={"absolute"}
        top={0}
        padding={8}
        left={240}
        width={"calc(100% - 240px)"}
        height="100%"
        justifyContent="top"
        alignItems="top"
        minW={"calc(100% - 240px)"}
        minH="100%"
        backgroundColor={""}
      >
        <SideBarPerfil />
        <ListItem height={80} width={"calc(100% - 240px)"}>
          {clients != null ? <ClientesContainer data={clients} /> : null}
        </ListItem>{" "}
      </List>
      <SideBarPrincipal selectedID={"#btn_menu_clientes"} />{" "}
    </Flex>
  );
}
