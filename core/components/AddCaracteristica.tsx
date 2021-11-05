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
  Select,
  InputGroup,
  InputLeftAddon,
  Switch,
  RadioGroup,
  Radio,
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
  faTimes,
  faUser,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import setup from "../../config/setup.json";
import Loading from "./Loading";
import ClientesContainer from "./ClientesContainer";
import ClienteItem from "./ClienteItem";
import AlertError from "./AlertError";
import axios from "axios";
import api from '../service/api'
import { cpf } from 'cpf-cnpj-validator'; 

interface IAddCaracteristica {
  close: Function;
  client_uid: String;
}
const AddCaracteristica: React.FC<IAddCaracteristica> = (props: IAddCaracteristica) => {
  function onClose() {
    props.close();
  }
  const [loading, setLoading] = useState(false);

  const [confirmed, setConfirmed] = useState(false);

  const [alertColor, setAlertColor] = useState("#FFFFFF");

  const [clients, setClients] = useState([]);

  const [name, setName] = useState("");
  const onChangeName = (event) => setName(event.target.value);

  const [valor, setValor] = useState(null);
  const onChangeValor = (event) => setValor(event.target.value);
  
  const [alert, setAlert] = useState(null);

  const onSave = async () => {
    setAlertColor("#FFFFFF");
    if (confirmed) {
      setConfirmed(null);
      setName(""); 
    } else {
      var body = {
        key: name, 
        value: valor,
        client_uid: props.client_uid
      };

      setLoading(true);

      var errCol = [];

      if (
        name == null ||
        name == "null" ||
        name == undefined ||
        name.length < 1
      ) {
        errCol.push("TIPO");
      } 
 

      if ( 
       valor == null ||
       valor == "null" ||
       valor == undefined ||
       valor.length < 1
      ) {
        errCol.push("VALOR");
      }

      if (errCol.length > 0) {
        var nameError = "";
        errCol.forEach((c) => {
          nameError = nameError + c + ", ";
        });
        nameError = nameError.trim();

        setAlert(
          "Favor preencher todos os campos (" +
          nameError.substring(0, nameError.length - 1) +
          ")"
        );
        setLoading(false);
      } else {

        try {
          api.defaults.headers.common = {
            'token': localStorage.getItem('TOKEN')
          };
          const response = await api.post("/api/transform/client_keys", body);

          console.log(response);
          setLoading(false);

          if (response.status == 200) {
            setConfirmed(true);
            setAlert(
              "🎊🎉 Parabens! " +
              name + " cadastrado com sucesso "
            );
          } else {
            setAlertColor("#ff0000");
            setAlert(response.data.details);
          }
        } catch (e) {
          setLoading(false);
          setAlertColor("#ff0000");
          setAlert("Erro interno, tente novamente mais tarde");
        }
      }
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
      <Flex
        position={"absolute"}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Loading show={loading == true} />
      </Flex>

      <AlertError
        color={alertColor}
        message={alert}
        show={alert != null}
        onClose={async () => {
          setAlert(null);
          if (confirmed) {
            setConfirmed(null);
            props.close();
          }
        }}
      />

      <List
        overflow={"overlay"}
        background={"#FFFFFF"}
        width={"50%"}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        borderRadius={"10px"}
      >
        <ListItem>
          <Flex
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
              <i className="fas fa-times"></i>
            </Flex>
            <Text margin={"8px"} style={{ fontSize: "20px" }}>
              Cadastro de Característica
            </Text>
          </Flex>
        </ListItem>
        <List>
          <ListItem>
            <Flex
              margin={"24px"}
              marginTop={"24px"}
              borderRadius={"8px"} 
              padding={"2px"}
              style={{ backgroundColor: "#ffffff" ,     border: '1px solid #c0c0c066' }}
            >
              <Text className={"input_caption_cadastro"}>Tipo:</Text>
              <Input
                isDisabled={confirmed}
                paddingLeft={"8px"}
                onChange={onChangeName}
                value={name}
                backgroundColor={"#ffffff00"}
                className={"search_input"}
                placeholder="Tipo"
              />
            </Flex>
          </ListItem>
          <ListItem>
            <Flex
              margin={"24px"}
              marginTop={"24px"}
              borderRadius={"8px"} 
              padding={"2px"}
              style={{ backgroundColor: "#ffffff",     border: '1px solid #c0c0c066' }}
            >
              <Text className={"input_caption_cadastro"}>Valor:</Text>
              <Input
                isDisabled={confirmed}
                paddingLeft={"8px"} 
                onChange={onChangeValor}
                value={valor}
                backgroundColor={"#ffffff00"}
                className={"search_input"}
                placeholder="Valor referente ao tipo"
              />
            </Flex>
          </ListItem>
        
          <ListItem>
            <Flex
              margin={"24px"}
              marginTop={"24px"}
              borderRadius={"8px"}
              padding={"2px"}
              style={{
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "end",
                justifyContent: "end",
              }}
            >
              <Button
                onClick={() => props.close()}
                background={"#FFFFFF"}
                color={"#495057"}
                width={"120px"}
                marginRight={"16px"}
              >
                FECHAR{" "}
              </Button>
              <Button
                isDisabled={loading}
                className={"button_ok"}
                onClick={onSave}
                background={confirmed ? "#08630c" : "#000000"}
                color={"#FFFFFF"}
                minWidth={"120px"}
              >
                {confirmed ? "CADASTRAR OUTRA" : "OK"}
              </Button>
            </Flex>
          </ListItem>
        </List>
      </List>
    </Stack>
  );

  function safeString(str) {
    return str == null || str == undefined ? "" : str;
  }
};

export default AddCaracteristica;
