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
import CampanhaCard from "./CampanhaCard";

const CampanhaContainer: React.FC = () => {
  return (
    <List>
      <ListItem>
        <StatGroup>
          <Stat className={"indicator_card_basic"}>
            <StatLabel>Vendas recuperadas</StatLabel>
            <StatNumber>R$156.670,00</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>
          <Stat className={"indicator_card_basic"}>
            <StatLabel>Atendimentos chatbot</StatLabel>
            <StatNumber>43.994</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              2.05%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </ListItem>
      <ListItem>
        <StatGroup>
          <Stat className={"indicator_card_basic"}>
            <StatLabel>Novos clientes</StatLabel>
            <StatNumber>48</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
          <Stat className={"indicator_card_basic"}>
            <StatLabel>Média atendimento</StatLabel>
            <StatNumber>
              {" "}
              4.2
              <FontAwesomeIcon style={{ fontSize: 16 }} icon={faStar} />
            </StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              1.05%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </ListItem>
      <ListItem>
        <Flex
          marginTop={8}
          marginBottom={8}
          width={"100%"}
          height={0.1}
          backgroundColor={"#00000014"}
        />
      </ListItem>
      <ListItem>
        <Text fontWeight={"bold"} margin={4}>
          Campanhas em andamento
          <FontAwesomeIcon
            style={{
              fontSize: 16,
              color: "#c5c4c4",
              marginLeft: "8px",
            }}
            icon={faMailBulk}
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
          <CampanhaCard />
        </StatGroup>
        <StatGroup>
          <CampanhaCard />
        </StatGroup>
        <StatGroup>
          <CampanhaCard />
        </StatGroup>
        <StatGroup>
          <CampanhaCard />
        </StatGroup>
        <StatGroup>
          <CampanhaCard />
        </StatGroup>
        <StatGroup>
          <CampanhaCard />
        </StatGroup>
        <StatGroup>
          <CampanhaCard />
        </StatGroup>
        <StatGroup>
          <CampanhaCard />
        </StatGroup>
      </ListItem>
    </List>
  );
};

export default CampanhaContainer;
