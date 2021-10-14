import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
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
import RegistroAtendimento from "./RegistroAtendimento";

interface ISidebarClientes {
  pic: string;
  json: object;
  onClose: Function;
}

const SideBarClientes: React.FC<ISidebarClientes> = (
  prop: ISidebarClientes
) => {
  const [atendimento, setAtendimento] = useState(null);
  const [message, setMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    console.log(prop.json);
  });

  return prop.json == undefined || prop.json == null ? (
    <Text display={"none"} />
  ) : (
    <Stack>
      {" "}
      <List className={"sidebar_clientes"} cursor={"pointer"}>
        <ListItem>
          <Flex
            onClick={() => prop.onClose()}
            className={" button_close"}
            padding={"16px"}
          >
            <i className="fas fa-chevron-down"></i>
          </Flex>
        </ListItem>
        <ListItem>
          <List>
            <ListItem width={"100%"} zIndex={1}>
              <Flex className={"clientes_detalhes_flex"} zIndex={1}>
                <Avatar
                  height={"80px"}
                  name={prop.json["name"]}
                  width={"80px"}
                ></Avatar>

                <List height={"100px"}>
                  <ListItem>
                    <Text
                      fontSize={"40px"}
                      marginLeft={"16px"}
                      fontWeight={"100"}
                    >
                      {prop.json["name"] == null ||
                        prop.json["name"] == undefined ||
                        prop.json["name"] == "null" ||
                        prop.json["name"] == "undefined"
                        ? "Desconhecido"
                        : prop.json["name"]}
                    </Text>
                  </ListItem>
                  <ListItem marginTop={"-4px"}>
                    <Text
                      fontSize={"20px"}
                      color={"#a5a5a5"}
                      marginLeft={"12px"}
                      fontWeight={"400"}
                    >
                      {prop.json["phone"] == null ||
                        prop.json["phone"] == undefined ||
                        prop.json["phone"] == "null" ||
                        prop.json["phone"] == "undefined"
                        ? ""
                        : prop.json["phone"]
                          .toString()
                          .replace(
                            /(\d{2})(\d{2})(\d{5})(\d{2})/,
                            "+$1 ($2) $3-$4"
                          )}
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
              <TagsCliente />

              <Flex className={"footer_buttons_detalhes_cliente"}>
                <Link
                  href={
                    "https://api.whatsapp.com/send?phone=" + prop.json["phone"]
                  }
                >
                  <a target="_blank">
                    <Button
                      className={"borderless"}
                      height={"60px"}
                      marginRight={"8px"}
                      borderRadius={30}
                      backgroundColor={"#FFFFFF"}
                      color={"#000000"}
                      borderStyle={"solid"}
                      borderWidth={"3px"}
                      _hover={{
                        backgroundColor: "#000000c7",
                      }}
                      _active={{
                        backgroundColor: "#000000",
                        boxShadow: "0 0 10px black !important",
                      }}
                      zIndex={99999999999}
                    >
                      <i
                        style={{ fontSize: "24px" }}
                        className="fab fa-whatsapp"
                      ></i>
                      <Text marginLeft={"8px"}>Enviar Mensagem </Text>
                    </Button>
                  </a>
                </Link>

                <Button
                  position={"absolute"}
                  right={"10px"}
                  top={"10px"}
                  height={"60px"}
                  marginRight={"8px"}
                  borderRadius={30}
                  backgroundColor={"#000000"}
                  onClick={() => setAtendimento(true)}
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
                  <FontAwesomeIcon icon={faCartPlus} size="1x" />
                  <Text marginLeft={"8px"}>Registrar Atendimento </Text>
                </Button>

                <Button
                  className={"borderless"}
                  height={"60px"}
                  marginRight={"8px"}
                  borderRadius={30}
                  backgroundColor={"#FFFFFF"}
                  color={"#000000"}
                  borderColor={"#000000 !important"}
                  borderStyle={"solid"}
                  borderWidth={"3px"}
                  _hover={{
                    backgroundColor: "#000000c7",
                  }}
                  _active={{
                    backgroundColor: "#000000",
                    boxShadow: "0 0 10px black !important",
                  }}
                  zIndex={99999999999}
                >
                  <FontAwesomeIcon icon={faPlus} size="1x" />
                  <Text marginLeft={"8px"}>Adicionar Características </Text>
                </Button>
              </Flex>
              <Flex
                style={{
                  height: "1px",
                  width: "100%",
                  background: "#e8e8e8",
                }}
              />
              <List
                className={"cliente_caracteristica_list"}
                margin={"24px"}
                marginTop={"16px"}
              >
                <ClienteCaracteristicasItem
                  keyName={"CPF:"}
                  value={"320.221.221-23"}
                />
                <ClienteCaracteristicasItem
                  keyName={"Idade:"}
                  value={"34 anos"}
                />
                <ClienteCaracteristicasItem
                  keyName={"Estado Civil:"}
                  value={"Casada"}
                />
                <ClienteCaracteristicasItem
                  keyName={"Sexo:"}
                  value={"Feminino"}
                />
                <ClienteCaracteristicasItem
                  keyName={"Filhos:"}
                  value={"3 (Jair, Romeu e Jobson)"}
                />
                <ClienteCaracteristicasItem
                  keyName={"Cônjuge:"}
                  value={"Bruno Brito"}
                />
                <ClienteCaracteristicasItem
                  keyName={"Esporte:"}
                  value={"Musculação"}
                />
                <ClienteCaracteristicasItem
                  keyName={"Animais:"}
                  value={"2 Cachorros (Theo e Zion)"}
                />
              </List>

              <Flex
                padding={"40px"}
                position={"absolute"}
                top={"-40px"}
                right={"-20px"}
                paddingBottom={"0px"}
                paddingTop={"16px"}
              >
                <i
                  className="fas fa-trophy"
                  style={{
                    color: "#ff8f00",
                    marginRight: "8px",
                    fontSize: "16px",
                    marginTop: "4px",
                  }}
                ></i>
                <Text color={"#495057"} fontSize={"16px"}>
                  Cliente <b>OURO</b>
                </Text>
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
      </List>
      {atendimento == true ? (
        <RegistroAtendimento
          startStep={2}
          cliente={prop.json}
          close={() => setAtendimento(false)}
        />
      ) : (
        <Text />
      )}
    </Stack>
  );
};

export default SideBarClientes;
