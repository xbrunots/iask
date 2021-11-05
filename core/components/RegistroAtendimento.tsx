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
  faSave,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import setup from "../../config/setup.json";
import Loading from "./Loading";
import ClientesContainer from "./ClientesContainer";
import ClienteItem from "./ClienteItem";
import RegistroStep2 from "./RegistroStep2";
import RegistroStep3 from "./RegistroStep3";
import api from '../../core/service/api'
import AlertError from "../../core/components/AlertError";
interface IRegistroAtendimento {
  close: Function;
  cliente: object;
  startStep: number;
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
  const [review, setReview] = useState(3);
  const [comments, setComments] = useState(null);

  const [showAlert, setShowAlert] = useState(null);

  const [step, setStep] = useState(
    props.startStep == null || props.startStep == undefined
      ? 1
      : props.startStep
  );
  const [clientInStep2, setClientInStep2] = useState(props.cliente);

  const handleChange = (event) => setQuery(event.target.value);

  function getUser() {
    var user = localStorage.getItem('USER');
    return JSON.parse(user);
  }
  
  const getClients = async () => {
    if (!loading) {
      setLoading(true); 
      try {
 
        api.defaults.headers.common = {
          'token': localStorage.getItem('TOKEN')
        };
        const response = await api.get("/api/transform/clients/store_uid='" + getUser()['store'] + "'");

        setClients(response.data);

        setLoading(false);

      } catch (err) {
        setLoading(false);
        console.log(err); 
      }
    }
  };

  const [currentClient, setCurrentClient] = useState(null);

  function selectClient(json) {
    setCurrentClient(json);
    setStep(3); // setStep(2);
  }

  useEffect(() => {
    getClients();
  }, []);


   async function save(){
    props.close(); 
   console.log(currentClient);
   console.log(review);
   console.log(comments);
 
    if (!loading) {
      setLoading(true); 
      try {
 
        api.defaults.headers.common = {
          'token': localStorage.getItem('TOKEN')
        };
        const response = await api.post("/api/transform/review/store_uid='" + getUser()['store'] + "'", {
          score: review,
          comments: comments,
          client_uid: currentClient.uid,
          user_uid:  getUser()['uid']
        });
 
        setShowAlert("Avaliação salva com sucesso!")

        setLoading(false);

      } catch (err) {
        setLoading(false);
        console.log(err); 
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
      <Flex justifyContent="center" alignItems="center" alignContent="center">
        
      </Flex> <AlertError show={showAlert != null} message={showAlert} color={"#e90000"} onClose={() => setShowAlert(null)} />
    
      <List
        overflow={"overlay"}
        background={"#FFFFFF"}
        width={"50%"}
        minHeight={"60%"}
        maxHeight={"80%"}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        borderRadius={"10px"}
      >
        <ListItem>
          <Flex
            background={"#FFFFFF"}
            width={"100%"}
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
              background={"#0000002e"}
              color={"#ffffffb5"}
              width={"32px"}
              height={"32px"}
              border={"1px solid"}
              justifyContent="center"
              alignItems="center"
              borderRadius={"50%"}
              alignContent="center"
              onClick={() => onClose()}
              cursor={"pointer"}
              position={"fixed"}
              marginLeft={"-60px"}
              padding={"24px"}
            >
              <i className="fas fa-times"></i>
            </Flex>
            <Text margin={"8px"} style={{ fontSize: "20px" }}>
              {step == 1
                ? "Selecione o cliente"
                : step == 2
                ? "Adicione um produto "
                : "Avaliação"}
            </Text>
            {step == 2 ? (
              <Button
                onClick={() => setStep(3)}
                fontWeight={"500"}
                style={{
                  margin: "8px",
                  marginLeft: "54px",
                  color: "#0027ff",
                  cursor: "pointer",
                  right: "15px",
                }}
              >
                {" "}
                PULE ESSA PARTE{" "}
              </Button>
            ) : null}
            {step == 1 ? (
              <Flex
                top={"14px"}
                right={"25%"}
                margin={"8px"}
                marginRight={"24px"}
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
            ) : null}
          </Flex>
        </ListItem>
        {loading != true ? (
          step == 1 ? (
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
                  click={(json) => selectClient(json)}
                />
              ))
          ) : step == 2 ? (
            <RegistroStep2
              clickItem={(item) => {
                setClientInStep2(item);
                setStep(3);
              }}
            />
          ) : step == 3 ? (
            <RegistroStep3 onReview={(v) => setReview(v)} onComments={(v) => setComments(v)} />
          ) : null
        ) : (
          <Flex zIndex={999999999999} position={"fixed"}>
            <Loading show={true} />
          </Flex>
        )}
        <ListItem
          style={{
            color: "#0027ff",
            cursor: "pointer",
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            marginRight: "16px",
          }}
        >
          {step == 3 ? (
            <Button
              onClick={() => props.close()}
              fontWeight={"500"}
              className={"button_cancel"}
              style={{
                width: "140px",
                margin: "5px",
                color: "#858585",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              CANCELAR
            </Button>
          ) : null}
          {step == 3 ? (
            <Button
              onClick={() => save()}
              fontWeight={"500"}
              className={"button_ok"}
              style={{
                width: "140px",
                margin: "5px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "black",
                color: "white",
              }}
            >
              OK
            </Button>
          ) : null}
        </ListItem>
      </List>
      )
    </Stack>
  );

  function safeString(str) {
    return str == null || str == undefined ? "" : str;
  }
};

export default RegistroAtendimento;
