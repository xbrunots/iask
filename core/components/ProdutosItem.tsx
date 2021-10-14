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
  description: string;
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
      className={"indicator_product_chat "}
    >
      <Flex width={"100%"}>
        <List className={"product_list_item"}>
          <Image
            className={"product_image"}
            color={"#FFFFFF"}
            src={props.pic}
            fontSize={14}
            textShadow={"0px 0px 2px #00000075"}
          />
          <Flex className={"parent_prod_tag"}>
            {JSON.parse(props.json["tags"])
              .filter((p) => p != null && p != undefined)
              .map((item) => (
                <Text className={"prod_tag"}>
                  {" "}
                  {safeString(item).toUpperCase()}
                </Text>
              ))}
          </Flex>
          <Text className={"product_price"}>
            {props.json["price"].toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}{" "}
          </Text>
          <StatLabel
            className={"product_title"}
            fontSize={"16px"}
            marginLeft={3}
            marginTop={"4px"}
          >
            {props.name.toString()}
          </StatLabel>
          <StatHelpText
            className={"product_desc"}
            marginBottom={"0px"}
            marginLeft={"8px"}
          >
            {props.description.toString()}
          </StatHelpText>

          <Flex position={"absolute"} right={0} top={2}></Flex>
        </List>
      </Flex>
    </Stat>
  );

  function safeString(str) {
    return str == null || str == undefined ? "" : str;
  }
};

export default ClienteItem;
