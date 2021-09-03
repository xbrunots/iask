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
  faHashtag,
  faBirthdayCake,
  faCalendarCheck,
  faSkull,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
// import { Container } from './styles';
import TimelineItem from "./TimelineItem";

const TimelineContainer: React.FC = () => {
  return (
    <List>
      <ListItem>
        <Text fontWeight={"bold"} margin={4}>
          Timeline
          <FontAwesomeIcon
            style={{
              fontSize: 16,
              color: "#c5c4c4",
              marginLeft: "8px",
            }}
            icon={faHashtag}
          />
        </Text>
      </ListItem>
      <ListItem
        height={"200px"}
        maxHeight={"200px"}
        minHeight={"200px"}
        maxH={"200px"}
      >
        <StatGroup>
          <TimelineItem
            title={"Aniversário"}
            icon={faBirthdayCake}
            subtitle={"12 clientes fazem aniversário hoje"}
          />
        </StatGroup>
        <StatGroup>
          <TimelineItem
            title={"Feedback dos 7 dias"}
            icon={faCalendarCheck}
            subtitle={"17 clientes compraram produtos a 7 dias"}
          />
        </StatGroup>
        <StatGroup>
          <TimelineItem
            title={"Reclamações abertas"}
            icon={faSkull}
            subtitle={"3 clientes possuem reclamações abertas"}
          />
        </StatGroup>
        <StatGroup>
          <TimelineItem
            title={"Alerta de recorrências"}
            icon={faUserShield}
            subtitle={
              "59 clientes não compram nenhum produto a mais de 45 dias"
            }
          />
        </StatGroup>
      </ListItem>
    </List>
  );
};

export default TimelineContainer;
