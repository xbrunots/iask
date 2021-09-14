import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Avatar,
  AvatarBadge,
  List,
  ListItem,
  Tag,
  Flex,
  Text,
  Grid,
  CloseButton,
  Button,
  Stack,
  Input,
  CircularProgress,
} from "@chakra-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBolt,
  faCartPlus,
  faChair,
  faChevronDown,
  faChevronLeft,
  faHeart,
  faLaugh,
  faPen,
  faPenAlt,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import setup from "../../config/setup.json";
import Loading from "./Loading";
import ClientesContainer from "./ClientesContainer";
import ClienteItem from "./ClienteItem";
interface IRegistroAtendimento {
  close: Function;
}
const RegistroAtendimento: React.FC<IRegistroAtendimento> = (
  props: IRegistroAtendimento
) => {
  function onClose() {
    props.close();
  }
  const [loading, setLoading] = useState(false);

  const [clients, setClients] = useState([]);
  const [query, setQuery] = useState("");
  const handleChange = (event) => setQuery(event.target.value);
  const getClients = async () => {
    console.log(setup.API_HOST + "/api/profile");
    const res = await fetch(setup.API_HOST + "/api/profile");
    const json = await res.json();
    console.log(json);
    setClients(json);
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <Stack
      minW={"100%"}
      height="100%"
      backgroundColor={"#000000d1"}
      left={0}
      top={0}
      position={"fixed"}
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      zIndex={99999999999999}
      style={{ overflow: "hidden" }}
    >
      <Flex
        position={"absolute"}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Loading show={loading == true} />
      </Flex>

      <List
        overflow={"overlay"}
        background={"#FFFFFF"}
        width={"50%"}
        minHeight={"80%"}
        maxHeight={"80%"}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        borderRadius={"10px"}
        paddingTop={"50px"}
      >
        <ListItem>
          <Flex
            position={"absolute"}
            background={"#FFFFFF"}
            width={"50%"}
            top={"10%"}
            minHeight={"60px"}
            maxHeight={"60px"}
            justifyContent="start"
            alignItems="start"
            alignContent="start"
            zIndex={9999999999}
            borderTopLeftRadius={"10px"}
            borderTopRightRadius={"10px"}
          >
            <Flex
              background={"#FFFFFF"}
              width={"32px"}
              height={"32px"}
              justifyContent="center"
              alignItems="center"
              borderRadius={"50%"}
              alignContent="center"
              onClick={() => onClose()}
              cursor={"pointer"}
              padding={"24px"}
            >
              <i className="fas fa-chevron-down"></i>
            </Flex>
            <Text margin={"8px"} style={{ fontSize: "20px" }}>
              Selecione o cliente (1/3)
            </Text>
            <Flex
              position={"absolute"}
              top={"8px"}
              right={"24px"}
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
                placeholder="digite para filtrar..."
              />
            </Flex>
          </Flex>
        </ListItem>
        {loading != true ? (
          clients
            .filter(
              (clienteItemRow) =>
                safeString(clienteItemRow.name).includes(query) ||
                safeString(clienteItemRow.phone.toString()).includes(query)
            )
            .map((clientItem) => (
              <ClienteItem
                json={clientItem}
                name={clientItem.name}
                pic={clientItem.picture}
                phone={clientItem.phone.toString()}
                click={(json) => alert(json)}
              />
            ))
        ) : (
          <Text />
        )}
      </List>
    </Stack>
  );

  function safeString(str) {
    return str == null || str == undefined ? "" : str;
  }
};

export default RegistroAtendimento;
