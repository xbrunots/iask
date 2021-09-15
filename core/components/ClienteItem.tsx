import React from "react";
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
} from "@fortawesome/free-solid-svg-icons";
// import { Container } from './styles';

interface IClienteItem {
  json: object;
  name: string;
  phone: string;
  pic: string;
  click: Function;
}

const ClienteItem: React.FC<IClienteItem> = (props: IClienteItem) => {
  function handleClickMenu() {
    props.click(props.json);
  }

  function getRandomColor() {
    if (props.pic != null && props.pic != undefined) {
      return null;
    } else {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }

  return (
    <Stat
      onClick={() => handleClickMenu()}
      className={" parent_client_item" + props.phone.toString()}
    >
      <Flex
        width={"100%"}
        className={
          "indicator_clients_chat client_item" + props.phone.toString()
        }
      >
        <Avatar
          marginTop={"8px"}
          src={props.json["picture"]}
          height={"40px"}
          width={"40px"}
          fontSize={14}
          name={
            props.name == null ||
            props.name == undefined ||
            props.name == "null" ||
            props.name == "undefined"
              ? ""
              : props.name.toString()
          }
        />
        <List className={"client_name"}>
          {props.name == null ||
          props.name == undefined ||
          props.name == "null" ||
          props.name == "undefined" ? (
            ""
          ) : (
            <StatLabel fontSize={"16px"} marginLeft={3} marginTop={"4px"}>
              {props.name.toString()}
            </StatLabel>
          )}

          {props.json["isGroup"] == true ? (
            <Tag>Lista de transmição</Tag>
          ) : (
            <Text />
          )}

          {props.phone.toString() == null ||
          props.phone.toString() == undefined ? (
            ""
          ) : (
            <StatHelpText marginBottom={"0px"} marginLeft={"8px"}>
              {props.phone.toString() == null ||
              props.phone.toString() == undefined
                ? ""
                : props.phone
                    .toString()
                    .replace(/(\d{2})(\d{2})(\d{5})(\d{2})/, "+$1 ($2) $3-$4")}
            </StatHelpText>
          )}

          <Flex position={"absolute"} right={0} top={2}></Flex>
        </List>
      </Flex>
    </Stat>
  );
};

export default ClienteItem;
