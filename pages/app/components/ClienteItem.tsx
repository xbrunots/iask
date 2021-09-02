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
  name: string;
  phone: string;
  pic: string;
}

const ClienteItem: React.FC<IClienteItem> = (props: IClienteItem) => {
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
    <Stat className={"indicator_clients_chat"}>
      <Flex width={"100%"}>
        <Avatar
          marginTop={"8px"}
          color={"#FFFFFF"}
          src={props.pic}
          height={"40px"}
          width={"40px"}
          fontSize={14}
          textShadow={"0px 0px 2px #00000075"}
          name={
            props.name == null || props.name == undefined
              ? ""
              : props.name.toString()
          }
        />
        <List className={"client_name"}>
          {props.name == null || props.name == undefined ? (
            ""
          ) : (
            <StatLabel fontSize={"16px"} marginLeft={3} marginTop={"4px"}>
              {props.name.toString()}
            </StatLabel>
          )}

          {props.phone == null || props.phone == undefined ? (
            ""
          ) : (
            <StatHelpText marginBottom={"0px"} marginLeft={"8px"}>
              {props.phone == null || props.phone == undefined
                ? ""
                : props.phone.replace(
                    /(\d{2})(\d{2})(\d{5})(\d{2})/,
                    "+$1 ($2) $3-$4"
                  )}
            </StatHelpText>
          )}

          <Flex position={"absolute"} right={0} top={2}></Flex>
        </List>
      </Flex>
    </Stat>
  );
};

export default ClienteItem;
