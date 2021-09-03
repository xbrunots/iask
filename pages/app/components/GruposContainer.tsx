import React, { useEffect, useState } from "react";
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
  InputLeftElement,
  Input,
} from "@chakra-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QRCode from "qrcode.react";
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
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
// import { Container } from './styles';
import CampanhaCard from "./CampanhaCard";
import GroupClienteItem from "./GroupClienteItem";
import setup from "../../../config/setup.json";
import SideBarGrupo from "./SideBarGrupo";

const GruposContainer: React.FC = () => {
  const [openGrupo, setOpenGrupo] = useState(null);
  const [query, setQuery] = useState("");
  const [grupo, setGrupo] = useState([]);
  const handleChange = (event) => setQuery(event.target.value);

  const getClients = async () => {
    console.log(setup.API_HOST + "/profile");
    //const res = await fetch(setup.API_HOST + "/api/profile");
    const res = await fetch(setup.API_HOST + "/api/groups");
    const json = await res.json();
    console.log(json.fullResponse);
    setGrupo(json.fullResponse);
  };

  useEffect(() => {
    getClients();
  }, []);

  function safeString(str) {
    return str == null || str == undefined ? "" : str;
  }

  return (
    <List width={"100%"} paddingBottom={"40px"} paddingTop={"100px"}>
      <ListItem
        position={"fixed"}
        width={"calc(100% - 400px)"}
        left={"270px"}
        backgroundColor={"#FFFFFF"}
        top={"0px"}
        zIndex={-1}
      >
        <Text fontWeight={"bold"} margin={4} marginLeft={0}>
          Grupos
          <FontAwesomeIcon
            style={{
              fontSize: 16,
              color: "#c5c4c4",
              marginLeft: "8px",
            }}
            icon={faUsers}
          />
        </Text>

        <Button
          position={"fixed"}
          right={"124px"}
          backgroundColor={"#FFFFFF"}
          color={"#3f51b5"}
          top={"12px"}
          fontSize={"14px"}
        >
          <i style={{ margin: "4px" }} className="fab fa-whatsapp"></i>Atualizar
          contatos com o WhatsApp
        </Button>
        <Flex
          borderRadius={"30px"}
          boxShadow={"0 0 2px #0000005e"}
          padding={"2px"}
          style={{ backgroundColor: "#ececec" }}
        >
          <FontAwesomeIcon
            icon={faSearch}
            style={{
              marginTop: "14px",
              marginLeft: "15px",
              fontSize: "14px",
              color: "#8a8a8a",
            }}
          />
          <Input
            onChange={handleChange}
            backgroundColor={"#ececec00"}
            className={"search_input"}
            placeholder="digite para buscar cliente..."
          />
        </Flex>
      </ListItem>
      {grupo
        .filter(
          (GroupClienteItemRow) =>
            safeString(GroupClienteItemRow["contact"].name).includes(query) ||
            safeString(GroupClienteItemRow["contact"].id.user).includes(query)
        )
        .map((clientItem) => (
          <GroupClienteItem
            size={
              clientItem["groupMetadata"] == null ||
              clientItem["groupMetadata"] == undefined ||
              clientItem["groupMetadata"]["participants"] == null ||
              clientItem["groupMetadata"]["participants"] == undefined
                ? 0
                : clientItem["groupMetadata"]["participants"].length
            }
            json={clientItem}
            name={clientItem["contact"].name}
            pic={clientItem["contact"].profilePicThumbObj.eurl}
            phone={clientItem["contact"].id.user}
            click={(json) => setOpenGrupo(json)}
          />
        ))}

      {/*clients.map((clientItem, index) => (
        <GroupClienteItem name={clientItem.name} phone={clientItem.id.user} />
      ))*/}
      <SideBarGrupo
        json={openGrupo}
        onClose={() => setOpenGrupo(null)}
        pic={
          "https://cdn.12min.com/books/books_background/68_steve_jobs.site_thumb.jpg"
        }
      />
    </List>
  );
};

export default GruposContainer;
