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
  faBirthdayCake,
  IconDefinition,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Props } from "react";
// import { Container } from './styles';

interface ITimelineItem {
  title: String;
  subtitle: String;
  icon: IconDefinition;
}

const TimelineItem: React.FC<ITimelineItem> = (props: ITimelineItem) => {
  return (
    <Stat className={"indicator_card_campanha"}>
      <Flex width={"100%"}>
        <Flex
          alignContent={"center"}
          alignItems={"center"}
          justifyItems={"center"}
          justifyContent={"center"}
          height={"32px"}
          width={"32px"}
          position={"absolute"}
          top={"10px"}
          left={"10px"}
          borderRadius={"50%"}
          backgroundColor={"#c5c5c58c"}
        >
          <FontAwesomeIcon
            style={{ fontSize: 18, color: "#797979" }}
            icon={props.icon == null ? faExclamation : props.icon}
          />
        </Flex>
        <StatLabel
          alignContent={"center"}
          alignItems={"center"}
          justifyItems={"center"}
          justifyContent={"center"}
          marginLeft="36px"
        >
          {props.title}
        </StatLabel>
        <Flex
          height={"6px"}
          width={"6px"}
          marginTop={"8px"}
          marginLeft={"8px"}
          alignContent={"center"}
          alignItems={"center"}
          justifyItems={"center"}
          justifyContent={"center"}
          marginRight={"8px"}
          backgroundColor={"#00000024"}
          borderRadius={"50%"}
        />
        <StatLabel
          position={"absolute"}
          right={"20px"}
          marginBottom={"0px"}
          alignContent={"center"}
          alignItems={"center"}
          justifyItems={"center"}
          justifyContent={"center"}
          color={"grey"}
          fontSize={"12px"}
        >
          31/08/2021
        </StatLabel>{" "}
        <StatHelpText
          alignContent={"center"}
          alignItems={"center"}
          justifyItems={"center"}
          justifyContent={"center"}
          marginLeft={0}
          marginBottom={"0px"}
        >
          {props.subtitle}
        </StatHelpText>
        {/*  <Flex position={"absolute"} right={0} top={2}>
          <Tag fontSize={"12px"} marginRight={2}>
            <i
              className="fab fa-whatsapp"
              style={{ marginRight: 4, fontSize: "14px" }}
            ></i>{" "}
            WhatsApp
          </Tag>
          <Tag fontSize={"12px"} marginRight={2}>
            <i
              className="far fa-envelope"
              style={{ marginRight: 4, fontSize: "14px" }}
            ></i>{" "}
            SMS
          </Tag>
  </Flex> */}
      </Flex>
      {/* <StatLabel
        style={{
          fontSize: 12,
          color: "#c5c4c4",
          position: "absolute",
          right: "10px",
          bottom: "10px",
        }}
      >
        Código da campanha: 1882
      </StatLabel> */}

      <Flex width={"100%"}>
        {/*  <StatHelpText marginBottom={"0px"} marginLeft={10}>
          {props.subtitle}
        </StatHelpText>
          <Flex
          height={"6px"}
          width={"6px"}
          marginTop={"8px"}
          marginLeft={"8px"}
          marginRight={"8px"}
          backgroundColor={"#00000024"}
          borderRadius={"50%"}
        />
        <StatHelpText marginLeft={0} marginBottom={"0px"}>
          39 respostas
     </StatHelpText> */}
      </Flex>
    </Stat>
  );
};

export default TimelineItem;
