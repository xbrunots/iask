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

interface IClienteCaracteristicasButton {
  
}

const ClienteCaracteristicasButton: React.FC<IClienteCaracteristicasButton> = (
  props: IClienteCaracteristicasButton
) => {
  return (
    <ListItem marginTop={"8px"} className={"add_caracteris"}>
      <Flex>
        
      <i style={{ marginRight: "4px" }} className="fas fa-plus"></i>
        <Text
          className={"add_caracteris_value"}
          width={"80%"}
          textAlign={"start"}
          fontSize={"16px"}
          fontWeight={"400"}
          color={"#495057"}
          marginLeft={"16px"}
        >
         NOVA CARACTERISTICA
        </Text>
      </Flex>
    </ListItem>
  );
};

export default ClienteCaracteristicasButton;
