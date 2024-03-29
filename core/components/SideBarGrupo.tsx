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
} from "@chakra-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBolt,
  faCartPlus,
  faChevronDown,
  faChevronLeft,
  faHeart,
  faPen,
  faPenAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Divider from "../../components/Divider";
import ClienteCaracteristicasItem from "./ClienteCaracteristicasItem";
import TagsCliente from "./TagsCliente";
import FormMensagem from "./FormMensagem";
import GroupClienteItem from "./GroupClienteItem";

interface ISideBarGrupo {
  pic: string;
  json: object;
  onClose: Function;
}

const SideBarGrupo: React.FC<ISideBarGrupo> = (prop: ISideBarGrupo) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    console.log(prop.json);
  });

  return prop.json == undefined || prop.json == null ? (
    <Text display={"none"} />
  ) : (
    <ListItem
      className={"sidebar_clientes"}
      position={"absolute"}
      right={4}
      top={4}
      cursor={"pointer"}
    >
      <Flex
        onClick={() => prop.onClose()}
        className={"close_client_detail"}
        padding={"16px"}
      >
        <CloseButton size="lg" />
      </Flex>
      <List>
        <ListItem position={"absolute"} width={"100%"} top={"32px"} zIndex={1}>
          <Flex className={"clientes_detalhes_flex"} zIndex={1}>
            <Avatar
              src={
                prop.json["contact"]["profilePicThumbObj"] == null
                  ? null
                  : prop.json["contact"]["profilePicThumbObj"]["eurl"]
              }
              height={"160px"}
              width={"160px"}
            ></Avatar>

            <List>
              <ListItem>
                <Text fontSize={"40px"} marginLeft={"16px"} fontWeight={"100"}>
                  {prop.json["name"] == null || prop.json["name"] == undefined
                    ? prop.json["id"] == null
                      ? ""
                      : prop.json["id"]["user"]
                    : prop.json["name"]}
                </Text>
              </ListItem>
              <ListItem marginTop={"-4px"}>
                <Text
                  fontSize={"20px"}
                  color={"#a5a5a5"}
                  marginLeft={"12px"}
                  fontWeight={"100"}
                >
                  {prop.json["id"] == null || prop.json["id"] == undefined
                    ? ""
                    : prop.json["id"]["user"] == null ||
                      prop.json["id"]["user"] == undefined
                    ? ""
                    : prop.json["id"]["user"]                  .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}

                </Text>
              </ListItem>

              <Button
                className={"button_edit_perfil"}
                marginRight={"8px"}
                borderRadius={"50%"}
                width={"32px"}
                height={"32px"}
                minWidth={"32px"}
                backgroundColor={"#000000"}
                color={"#FFFFFF"}
                _hover={{
                  backgroundColor: "#000000c7",
                }}
                _active={{
                  backgroundColor: "#000000",
                  boxShadow: "0 0 10px black !important",
                }}
                zIndex={99999999999}
              >
                <FontAwesomeIcon icon={faPen} size="sm" />
              </Button>
            </List>
          </Flex>

          <Flex
            opacity={0.5}
            height={"1px"}
            marginTop={"24px"}
            background={"#a0aec0"}
            width={"100%"}
          />
          <List
            className={"cliente_caracteristica_list"}
            margin={"24px"}
            marginTop={"16px"}
          >
            <GroupClienteItem
              size={
                prop.json["groupMetadata"] == null ||
                prop.json["groupMetadata"] == undefined ||
                prop.json["groupMetadata"]["participants"] == null ||
                prop.json["groupMetadata"]["participants"] == undefined
                  ? 0
                  : prop.json["groupMetadata"]["participants"].length
              }
              click={(e) => console.log(e)}
              json={prop.json}
              name={
                prop.json["name"] == null || prop.json["name"] == undefined
                  ? prop.json["id"] == null
                    ? ""
                    : prop.json["id"]["user"]
                  : prop.json["name"]
              }
              phone={""}
              pic={
                prop.json["contact"]["profilePicThumbObj"] == null
                  ? null
                  : prop.json["contact"]["profilePicThumbObj"]["eurl"]
              }
            />
          </List>

          <Flex
            opacity={0.5}
            height={"1px"}
            marginTop={"-8px"}
            background={"#a0aec0"}
            width={"100%"}
          />

          <Flex className={"footer_buttons_detalhes_cliente"}>
            <Button
              className={"borderless"}
              height={"60px"}
              marginRight={"8px"}
              borderRadius={30}
              backgroundColor={"#FFFFFF"}
              color={"#000000"}
              borderStyle={"solid"}
              borderWidth={"3px"}
              onClick={() => setMessage(prop.json)}
              _hover={{
                backgroundColor: "#000000c7",
              }}
              _active={{
                backgroundColor: "#000000",
                boxShadow: "0 0 10px black !important",
              }}
              zIndex={99999999999}
            >
              <i style={{ fontSize: "24px" }} className="fab fa-whatsapp"></i>
              <Text marginLeft={"8px"}>Enviar Mensagem </Text>
            </Button>
          </Flex>

          {message == null ? (
            <Text display={"none"} />
          ) : (
            <FormMensagem
              pic={prop.pic}
              json={prop.json}
              close={() => setMessage(null)}
            />
          )}
        </ListItem>
      </List>
    </ListItem>
  );
};

export default SideBarGrupo;
