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
} from "@fortawesome/free-solid-svg-icons";
import setup from "../../../config/setup.json";
import Loading from "./Loading";
interface IFormMensagem {
  pic: string;
  json: object;
  close: Function;
}
const FormMensagem: React.FC<IFormMensagem> = (props: IFormMensagem) => {
  function onClose() {
    props.close();
  }
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnchange = (event) => setQuery(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      fetch(
        setup.API_HOST +
          "/api/message/" +
          props.json["whatsapp"] +
          "?text=" +
          query
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setLoading(false);
            setQuery("");
          },
          (error) => {
            setLoading(false);
            setQuery("");
          }
        );
    }
  };

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
      <List
        background={"#FFFFFF"}
        width={"50%"}
        minHeight={"80%"}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        borderRadius={"10px"}
      >
        <Flex
          position={"absolute"}
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
          <FontAwesomeIcon icon={faArrowLeft} size={"lg"} color={"#141414"} />
        </Flex>
        <Flex padding={"16px"} paddingBottom={0}>
          <Avatar
            marginLeft={"56px"}
            src={props.json["picture"]}
            height={"60px"}
            width={"60px"}
          ></Avatar>
          <Loading show={loading == true} />
          <List marginLeft={"16px"} zIndex={999999999999}>
            <Text fontSize={"24px"}>
              {props.json["name"] == null ||
              props.json["name"] == undefined ||
              props.json["name"] == "null" ||
              props.json["name"] == "undefined"
                ? "Desconhecido"
                : props.json["name"]}
            </Text>
            <Text marginTop={"-5px"} fontSize={"16px"} color={"#929292"}>
              {props.json["whatsapp"] == null ||
              props.json["whatsapp"] == undefined
                ? "Nenhum numero encontrado"
                : props.json["whatsapp"].replace(
                    /(\d{2})(\d{2})(\d{5})(\d{2})/,
                    "+$1 ($2) $3-$4"
                  )}
            </Text>
          </List>
        </Flex>
        <Flex
          opacity={0.5}
          height={"1px"}
          marginTop={"8px"}
          background={"#a0aec0"}
          width={"100%"}
        />

        <List
          padding={"16px"}
          zIndex={999999999999}
          height={"86%"}
          borderBottomLeftRadius={"10px"}
          borderBottomRightRadius={"10px"}
          background={"url(/images/bg_chat.jpg)"}
          backgroundSize={"contain"}
          className={"chat_form"}
          paddingTop={"16px"}
        >
          <ListItem className="remetente">
            <Flex>
              <Text>Olá, ja conferiu as novidades?</Text>
            </Flex>
          </ListItem>
          <ListItem className="destinatario">
            <Flex>
              <Text>Uhul, me manda aqui!</Text>
            </Flex>
          </ListItem>
        </List>
        <ListItem
          style={{
            position: "absolute",
            bottom: "12%",
            width: "48%",
            left: "26%",
          }}
        >
          <Flex
            className={"input_chat_container"}
            borderRadius={"30px"}
            boxShadow={"0 0 2px #0000005e"}
            padding={"2px"}
            style={{ backgroundColor: "#ececec" }}
          >
            <i
              style={{
                fontSize: "24px",
                margin: "10px",
                marginLeft: "16px",
                color: "#00000059",
              }}
              className="fab fa-whatsapp"
            ></i>
            <Input
              isDisabled={loading}
              value={query}
              onChange={(txt) => handleOnchange(txt)}
              onKeyDown={handleKeyDown}
              backgroundColor={"#ececec00"}
              className={"search_input"}
              placeholder="digite a mensagem e aperte [ENTER] para enviar"
            />
          </Flex>
        </ListItem>
      </List>
    </Stack>
  );
};

export default FormMensagem;
