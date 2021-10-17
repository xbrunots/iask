import React, { useState } from "react";
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
  Input,
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
import ProdutosContainer from "./ProdutosContainer";
// import { Container } from './styles';

interface IRegistroStep2 {
  clickItem: Function;
}

const RegistroStep2: React.FC<IRegistroStep2> = (props: IRegistroStep2) => {
  const [query, setQuery] = useState("");

  const onChangeName = (event) => setQuery(event.target.value);

  return (
    <List>
      <ProdutosContainer
        isContainer={true}
        clickItem={(item) => props.clickItem(item)} data={[]}      />
    </List>
  );
};

export default RegistroStep2;
