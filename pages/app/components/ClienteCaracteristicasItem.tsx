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

interface IClienteCaracteristicasItem {
  value: string;
  keyName: string;
}

const ClienteCaracteristicasItem: React.FC<IClienteCaracteristicasItem> = (
  props: IClienteCaracteristicasItem
) => {
  return (
    <ListItem marginTop={"8px"}>
      <Flex>
        <Text
          fontSize={"18px"}
          color={"#495057"}
          marginLeft={"16px"}
          fontWeight={"100"}
          width={"30%"}
        >
          {props.keyName}
        </Text>
        <Text
          width={"50%"}
          textAlign={"start"}
          fontSize={"18px"}
          fontWeight={"400"}
          color={"#495057"}
          marginLeft={"16px"}
        >
          {props.value}
        </Text>
      </Flex>
    </ListItem>
  );
};

export default ClienteCaracteristicasItem;
