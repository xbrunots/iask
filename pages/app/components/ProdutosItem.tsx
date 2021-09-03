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
      className={"indicator_clients_chat "}
    >
      <Flex width={"100%"}>
        <Image
          marginTop={"8px"}
          color={"#FFFFFF"}
          src={props.pic}
          height={"180px"}
          width={"200px"}
          fontSize={14}
          textShadow={"0px 0px 2px #00000075"}
        />
        <List className={"client_name"}>
          <StatLabel fontSize={"16px"} marginLeft={3} marginTop={"4px"}>
            {props.name.toString()}
          </StatLabel>
          <StatHelpText marginBottom={"0px"} marginLeft={"8px"}>
            {props.description.toString()}
          </StatHelpText>

          <Flex position={"absolute"} right={0} top={2}></Flex>
        </List>
      </Flex>
    </Stat>
  );
};

export default ClienteItem;
