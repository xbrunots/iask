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
import api from '../../core/service/api'
import ClienteCaracteristicasButton from "./ClienteCaracteristicasButton";
import AddCaracteristica from "./AddCaracteristica";
import Loading from "./Loading";

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
  const [loading, setLoading] = useState(false);
  const [keys, setKeys] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
   
  const renderKeys = async () => {
    if (!loading) {
      setLoading(true); 
      try {
 
        api.defaults.headers.common = {
          'token': localStorage.getItem('TOKEN')
        };
         

        const response = await api.get("/api/transform/client_keys/client_uid='"  + prop.json.uid + "'");
 
        setKeys(response.data);

        setLoading(false);

      } catch (err) {
        setLoading(false);
        console.log(err); 
      }
    }
  }; 
   
  useEffect(() => {
    renderKeys();
  }, []);


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
            <i className="fas fa-times"></i>
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
                          .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}

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

          {/*        <Button
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
                */}

                <Button
                  className={"borderless"}
                  height={"60px"}
                  marginRight={"8px"}
                  borderRadius={30}
                  backgroundColor={"#FFFFFF"}
                  color={"#000000"}
                  borderColor={"#000000 !important"}
                  borderStyle={"solid"}
                  onClick={()=>setShowAdd(true)}
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
                  keyName={"Aniversário:"}
                  value={prop.json.birthday != null && prop.json.birthday != undefined ? prop.json.birthday.split("-")[2] + "/" + prop.json.birthday.split("-")[1] + "/" + prop.json.birthday.split("-")[0] : ""   }
                /> 
                <ClienteCaracteristicasItem
                  keyName={"Sexo:"}
                  value={prop.json.sex == "F" ? "Feminino" : "Masculino"}
                /> 

          {keys.map((item) => (
            <ClienteCaracteristicasItem
            keyName={item.key+":"}
            value={item.value}
          /> 
          ))}
 
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
          startStep={3}
          cliente={prop.json}
          close={() => setAtendimento(false)}
        />
      ) : (
        <Text />
      )}
        {showAdd == true ? (
        <AddCaracteristica 
          client_uid={prop.json.uid}
          close={() => { 
            setShowAdd(false);
            renderKeys();
          }
          }
            />
      ) : (
        <Text />
      )}
       <Flex
        position={"absolute"}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Loading show={loading == true} />
      </Flex>

    </Stack>
  );
};

export default SideBarClientes;
