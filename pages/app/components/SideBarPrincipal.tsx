import React, { useEffect } from "react";
import { useRouter } from "next/router";
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
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  ListIcon,
  ListItem,
  Tag,
} from "@chakra-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import $ from "jquery";
import {
  faAt,
  faCommentDollar,
  faFile,
  faFire,
  faLifeRing,
  faPlus,
  faRobot,
  faThLarge,
  faTimes,
  faStar,
  faUser,
  faUsers,
  faUserTag,
  faRocket,
  faUserClock,
  faClock,
  faMailBulk,
  faTools,
  faBox,
  faBirthdayCake,
  IconDefinition,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import RegistroAtendimento from "./RegistroAtendimento";
// import { Container } from './styles';

interface ISideBarPrincipal {
  selectedID: String;
}

const SideBarPrincipal: React.FC<ISideBarPrincipal> = (
  props: ISideBarPrincipal
) => {
  const router = useRouter();

  function handleClickMenu(e: String) {
    console.log(router);
    console.log(location);
    router.push(location.origin + e.toString());
  }

  function applyProps(e) {
    $("button").removeClass("menu_selected");
    $("#" + e).addClass("menu_selected");
  }

  const [atendimento, setAtendimento] = useState(false);

  useEffect(() => {
    applyProps(props.selectedID.replace("#", ""));
  });

  return (
    <Stack
      minW={"240px"}
      height="100%"
      backgroundColor={"#eeeeee"}
      left={0}
      top={0}
      position={"fixed"}
      justifyContent="top"
      alignItems="center"
      alignContent="center"
    >
      <Flex justifyContent="top" alignItems="center" alignContent="center">
        <Image
          margin={10}
          src="/images/logo_rocket.png"
          width={70}
          height={60}
          alt="iask"
        />
      </Flex>
      <Button
        borderRadius={100}
        backgroundColor={"#000000"}
        color={"#FFFFFF"}
        position={"fixed"}
        onClick={(e) => setAtendimento(true)}
        style={{
          fontSize: "16px",
        }}
        _hover={{
          backgroundColor: "#000000c7",
        }}
        _active={{
          backgroundColor: "#000000",
          boxShadow: "0 0 10px black !important",
        }}
        left={"8px"}
        bottom={"20px"}
        zIndex={99999999999}
      >
        <FontAwesomeIcon
          style={{ marginRight: "8px" }}
          icon={faCartPlus}
          size="1x"
        />
        {" Registrar Atendimento "}
      </Button>{" "}
      <Button
        id="btn_menu_dashboard"
        border={null}
        backgroundColor={"#eeeeee"}
        fontWeight={"normal"}
        fontSize={14}
        justifyContent={"flex-start"}
        width={200}
        borderRadius={"50px"}
        outline={null}
        onClick={(e) => handleClickMenu("/app")}
        paddingLeft={4}
        opacity={0.7}
        _hover={{
          fontWeight: "bold",
          opacity: 1.0,
          backgroundColor: "#e4e4e4",
        }}
      >
        <FontAwesomeIcon icon={faThLarge} />
        <Text marginLeft={2}>Dashboard</Text>
      </Button>
      <Button
        border={null}
        id="btn_menu_configurar"
        paddingLeft={4}
        backgroundColor={"#eeeeee"}
        fontWeight={"normal"}
        borderRadius={"50px"}
        justifyContent={"flex-start"}
        fontSize={14}
        alignSelf={"left"}
        onClick={(e) => handleClickMenu("/app/store")}
        width={200}
        outline={null}
        opacity={0.7}
        _hover={{
          fontWeight: "bold",
          opacity: 1.0,
          backgroundColor: "#e4e4e4",
        }}
      >
        <FontAwesomeIcon icon={faTools} />
        <Text marginLeft={2}>Configuração da Loja</Text>
      </Button>
      <Button
        border={null}
        id="btn_menu_clientes"
        paddingLeft={4}
        backgroundColor={"#eeeeee"}
        fontWeight={"normal"}
        borderRadius={"50px"}
        justifyContent={"flex-start"}
        fontSize={14}
        alignSelf={"left"}
        onClick={(e) => handleClickMenu("/app/customers")}
        width={200}
        outline={null}
        opacity={0.7}
        _hover={{
          fontWeight: "bold",
          opacity: 1.0,
          backgroundColor: "#e4e4e4",
        }}
      >
        <FontAwesomeIcon icon={faUser} />
        <Text marginLeft={2}>Clientes</Text>
      </Button>
      <Button
        border={null}
        id="btn_menu_produtos"
        paddingLeft={4}
        backgroundColor={"#eeeeee"}
        fontWeight={"normal"}
        borderRadius={"50px"}
        justifyContent={"flex-start"}
        fontSize={14}
        alignSelf={"left"}
        onClick={(e) => handleClickMenu("/app/products")}
        width={200}
        outline={null}
        opacity={0.7}
        _hover={{
          fontWeight: "bold",
          opacity: 1.0,
          backgroundColor: "#e4e4e4",
        }}
      >
        <FontAwesomeIcon icon={faBox} />
        <Text marginLeft={2}>Produtos</Text>
      </Button>
      <Button
        border={null}
        id="btn_menu_grupos"
        backgroundColor={"#eeeeee"}
        paddingLeft={4}
        fontWeight={"normal"}
        borderRadius={"50px"}
        onClick={(e) => handleClickMenu("/app/groups")}
        fontSize={14}
        width={200}
        outline={null}
        display={"flex"}
        justifyContent={"flex-start"}
        opacity={0.7}
        _hover={{
          fontWeight: "bold",
          opacity: 1.0,
          backgroundColor: "#e4e4e4",
        }}
      >
        <FontAwesomeIcon icon={faUsers} />
        <Text marginLeft={2}>Grupos</Text>
      </Button>
      <Button
        border={null}
        id="btn_menu_bot"
        backgroundColor={"#eeeeee"}
        fontWeight={"normal"}
        fontSize={14}
        paddingLeft={4}
        justifyContent={"flex-start"}
        borderRadius={"50px"}
        onClick={(e) => handleClickMenu("/app/chatbot")}
        width={200}
        outline={null}
        opacity={0.7}
        _hover={{
          fontWeight: "bold",
          opacity: 1.0,
          backgroundColor: "#e4e4e4",
        }}
      >
        <FontAwesomeIcon icon={faRobot} />
        <Text marginLeft={2}>Chatbot</Text>
      </Button>
      <Button
        id="btn_menu_canais"
        border={null}
        backgroundColor={"#eeeeee"}
        paddingLeft={4}
        fontWeight={"normal"}
        borderRadius={"50px"}
        fontSize={14}
        justifyContent={"flex-start"}
        onClick={(e) => handleClickMenu("/app/channels")}
        width={200}
        outline={null}
        opacity={0.7}
        _hover={{
          fontWeight: "bold",
          opacity: 1.0,
          backgroundColor: "#e4e4e4",
        }}
      >
        <FontAwesomeIcon icon={faAt} />
        <Text marginLeft={2}>Canais</Text>
      </Button>
      <Button
        id="btn_menu_campanha"
        border={null}
        backgroundColor={"#eeeeee"}
        paddingLeft={4}
        fontWeight={"normal"}
        borderRadius={"50px"}
        fontSize={14}
        justifyContent={"flex-start"}
        onClick={(e) => handleClickMenu("/app/campaign")}
        width={200}
        outline={null}
        opacity={0.7}
        _hover={{
          fontWeight: "bold",
          opacity: 1.0,
          backgroundColor: "#e4e4e4",
        }}
      >
        <FontAwesomeIcon icon={faCommentDollar} />
        <Text marginLeft={2}>Campanhas</Text>
      </Button>
      <Button
        border={null}
        id="btn_menu_tickets"
        backgroundColor={"#eeeeee"}
        fontWeight={"normal"}
        fontSize={14}
        paddingLeft={4}
        justifyContent={"flex-start"}
        borderRadius={"50px"}
        onClick={(e) => handleClickMenu("/app/tickets")}
        width={200}
        outline={null}
        opacity={0.7}
        _hover={{
          fontWeight: "bold",
          opacity: 1.0,
          backgroundColor: "#e4e4e4",
        }}
      >
        <FontAwesomeIcon icon={faLifeRing} />
        <Text marginLeft={2}>Tickets</Text>
      </Button>
      {atendimento == true ? (
        <RegistroAtendimento close={() => setAtendimento(false)} />
      ) : (
        <Text />
      )}
    </Stack>
  );
};

export default SideBarPrincipal;
