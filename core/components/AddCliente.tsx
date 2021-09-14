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
import { add } from "./../../pages/api/clients/controller/clients_controller";
import AlertError from "./AlertError";
import axios from "axios";

interface IAddCliente {
  close: Function;
}
const AddCliente: React.FC<IAddCliente> = (props: IAddCliente) => {
  function onClose() {
    props.close();
  }
  const [loading, setLoading] = useState(false);

  const [confirmed, setConfirmed] = useState(false);

  const [alertColor, setAlertColor] = useState("#FFFFFF");

  const [clients, setClients] = useState([]);

  const [name, setName] = useState("");
  const onChangeName = (event) => setName(event.target.value);

  const [sex, setSex] = useState("F");
  const onChangeSex = (event) => setName(event.target.value);

  const [alert, setAlert] = useState(null);

  const [phone, setPhone] = useState(null);
  const onChangePhone = (event) => setPhone(event.target.value);

  const [birth, setBirth] = useState(null);
  const onChangeBirth = (event) => setBirth(event.target.value);

  const onSave = async () => {
    setAlertColor("#FFFFFF");
    if (confirmed) {
      setConfirmed(null);
      setName("");
      setBirth("");
      setPhone("");
    } else {
      var body = {
        name: name,
        phone: phone,
        birthday: birth,
      };

      setLoading(true);

      var errCol = [];

      if (
        name == null ||
        name == "null" ||
        name == undefined ||
        name.length < 1
      ) {
        errCol.push("NOME");
      }
      if (sex == null || sex == "null" || sex == undefined || sex.length < 1) {
        errCol.push("SEXO");
      }
      if (
        phone == null ||
        phone == "null" ||
        phone == undefined ||
        phone.length < 1
      ) {
        errCol.push("CELULAR");
      }
      if (
        birth == null ||
        birth == "null" ||
        birth == undefined ||
        birth.length < 1
      ) {
        errCol.push("ANIVERSÁRIO");
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
        var response = await axios.post("/api/clients/add", body);

        if (response.data != null && response.data.length > 0) {
          setConfirmed(true);
          setAlert(
            "🎊🎉 Parabens! " +
              name +
              " cadastrado com sucesso (id: " +
              response.data[0].id +
              ")"
          );
        } else {
          setAlertColor("#ff0000");
          setAlert(response.data.details);
        }
        setLoading(false);
      }
    }
  };

  const getClients = async () => {
    console.log("/api/profile");
    const res = await fetch("/api/profile");
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
              <i className="fas fa-chevron-down"></i>
            </Flex>
            <Text margin={"8px"} style={{ fontSize: "20px" }}>
              Cadastro de Cliente
            </Text>
          </Flex>
        </ListItem>
        <List>
          <ListItem>
            <Flex
              margin={"24px"}
              marginTop={"24px"}
              borderRadius={"8px"}
              boxShadow={"0 0 2px #0000005e"}
              padding={"2px"}
              style={{ backgroundColor: "#ececec" }}
            >
              <Text className={"input_caption_cadastro"}>Nome:</Text>
              <Input
                isDisabled={confirmed}
                paddingLeft={"8px"}
                onChange={onChangeName}
                value={name}
                backgroundColor={"#ececec00"}
                className={"search_input"}
                placeholder="Nome completo"
              />
            </Flex>
          </ListItem>
          <ListItem>
            {" "}
            <Flex
              margin={"24px"}
              marginTop={"24px"}
              borderRadius={"8px"}
              boxShadow={"0 0 2px #0000005e"}
              padding={"8px"}
              style={{ backgroundColor: "#ececec" }}
            >
              <Text className={"input_caption_cadastro"}>Sexo:</Text>
              <Flex className={"option_container"}>
                <Button
                  isDisabled={confirmed}
                  onClick={() => setSex("F")}
                  className={
                    "option_button option_button_fem" +
                    (sex == "F" ? " option_button_selected" : "")
                  }
                >
                  Feminino
                </Button>
                <Button
                  isDisabled={confirmed}
                  onClick={() => setSex("M")}
                  className={
                    "option_button option_button_masc" +
                    (sex == "M" ? " option_button_selected" : "")
                  }
                >
                  Masculino
                </Button>
              </Flex>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex
              margin={"24px"}
              marginTop={"24px"}
              borderRadius={"8px"}
              boxShadow={"0 0 2px #0000005e"}
              padding={"2px"}
              style={{ backgroundColor: "#ececec" }}
            >
              <Text className={"input_caption_cadastro"}>Celular:</Text>
              <Input
                isDisabled={confirmed}
                type={"number"}
                value={phone}
                paddingLeft={"8px"}
                onChange={onChangePhone}
                backgroundColor={"#ececec00"}
                className={"search_input"}
                placeholder="DDD + número"
              />
            </Flex>
          </ListItem>
          <ListItem>
            <Flex
              margin={"24px"}
              marginTop={"24px"}
              borderRadius={"8px"}
              boxShadow={"0 0 2px #0000005e"}
              padding={"2px"}
              style={{ backgroundColor: "#ececec" }}
            >
              <Text className={"input_caption_cadastro"}>Aniversário:</Text>
              <Input
                value={birth}
                isDisabled={confirmed}
                type={"date"}
                paddingLeft={"8px"}
                onChange={onChangeBirth}
                backgroundColor={"#ececec00"}
                className={"search_input"}
                placeholder="DDD + número"
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
                CANCELAR{" "}
              </Button>
              <Button
                isDisabled={loading}
                className={"button_ok"}
                onClick={onSave}
                background={confirmed ? "#08630c" : "#000000"}
                color={"#FFFFFF"}
                minWidth={"120px"}
              >
                {confirmed ? "CADASTRAR OUTRO" : "OK"}
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

export default AddCliente;
