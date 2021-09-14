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

interface IAlertError {
  show: boolean;
  message: string;
  color: string;
  onClose: Function;
}

const AlertError: React.FC<IAlertError> = (props: IAlertError) => {
  return props.show != true ? (
    <Flex />
  ) : (
    <Flex
      cursor={"pointer"}
      right={"10px"}
      bottom={"10px"}
      position={"absolute"}
      zIndex={99999999999}
      background={"#000000"}
      borderRadius={"8px"}
      justifyContent="center"
      alignItems="center"
      paddingLeft={"20px"}
      paddingRight={"4px"}
      alignContent="center"
      onClick={() => props.onClose()}
    >
      <Text padding={"14px"} color={props.color}>
        {props.message}
      </Text>
      <Button
        color={"#ffffff47"}
        className={"button_ok"}
        background={"#000000"}
      >
        {" "}
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </Flex>
  );
};

export default AlertError;
