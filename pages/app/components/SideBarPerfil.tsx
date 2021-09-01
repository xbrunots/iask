import React, { useEffect } from "react";
import { useRouter } from "next/router";
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
  faTools,
  faBox,
  faBirthdayCake,
  IconDefinition,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Props } from "react";
import { route } from "next/dist/next-server/server/router";
// import { Container } from './styles';

const SideBarPerfil: React.FC = () => {
  const router = useRouter();

  return (
    <ListItem
      position={"absolute"}
      right={4}
      top={4}
      cursor={"pointer"}
      zIndex={9}
    >
      <Avatar
        position={"fixed"}
        right={"16px"}
        bg={"#1b2fa0"}
        color={"#FFFFFF"}
        height={8}
        width={8}
        fontSize={16}
        name="Bruno Brito"
      />
    </ListItem>
  );
};

export default SideBarPerfil;
