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
import ClienteItem from "./ClienteItem";
import setup from "../../config/setup.json";
import SideBarClientes from "./SideBarClientes";
import AddCliente from "./AddCliente";


interface IClientesContainer {
  close: Function;
  data: object; 
}
const ClientesContainer: React.FC<IClientesContainer> = (props: IClientesContainer) => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [clients, setClients] = useState(props.data);
  const [query, setQuery] = useState("");
  const [addCliente, setAddCliente] = useState(null);

  const handleChange = (event) => setQuery(event.target.value);

  function safeString(str) {
    return str == null || str == undefined ? "" : str;
  }

  return (
    <List>
      <Flex
        padding={"2px"}
        marginTop={"32px"}
        marginBottom={"16px"}
        borderRadius={"30px"}
        boxShadow={"0 0 2px #0000005e"}
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

      <ListItem
        position={"fixed"}
        width={"calc(100% - 400px)"}
        left={"270px"}
        backgroundColor={"#FFFFFF"}
        top={"0px"}
        zIndex={88888}
      >
        <Text
          fontWeight={"400"}
          fontSize={"24px"}
          margin={"8px"}
          marginLeft={"10px"}
        >
          Clientes
        </Text>

        <Button
          className={"button_no_fill"}
          position={"fixed"}
          right={"124px"}
          backgroundColor={"#FFFFFF"}
          color={"#000000"}
          top={"8px"}
          fontWeight={"bolder"}
          onClick={() => setAddCliente(true)}
          fontSize={"14px"}
        >
          <i style={{ marginRight: "4px" }} className="fas fa-plus"></i>
          NOVO CLIENTE
        </Button>
      </ListItem>
      <List width={"100%"} paddingBottom={"40px"}>
        {clients.filter(
          (clienteItemRow) =>
            safeString(clienteItemRow.name).toLowerCase().includes(query) ||
            safeString(clienteItemRow.phone.toString()).includes(query)
        )
          .map((clientItem) => (
            <ClienteItem
              json={clientItem}
              name={clientItem.name}
              pic={clientItem.picture}
              phone={clientItem.phone.toString()}
              click={(json) => setSelectedClient(json)}
            />
          ))}

        {/*clients.map((clientItem, index) => (
        <ClienteItem name={clientItem.name} phone={clientItem.id.user} />
      ))*/}
        {selectedClient != null ? <SideBarClientes
          json={selectedClient}
          onClose={() => setSelectedClient(null)}
          pic={
            "https://cdn.12min.com/books/books_background/68_steve_jobs.site_thumb.jpg"
          }
        /> : null}
      </List>

      {addCliente == true ? (
        <AddCliente close={() => {
          setAddCliente(null)
          props.close();
        }}
           />
      ) : null}
    </List>
  );
};

export default ClientesContainer;
