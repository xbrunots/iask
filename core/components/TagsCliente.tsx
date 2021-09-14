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

interface ITagsCliente {}

const TagsCliente: React.FC<ITagsCliente> = (props: ITagsCliente) => {
  return (
    <Grid padding={"16px"} marginTop={"24px"} className={"custom_grid"}>
      <Tag
        className={"tag_points danger"}
        style={{
          marginRight: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="fas fa-exclamation" style={{ marginRight: "8px" }}></i>{" "}
        Ticket aberto
      </Tag>
      <Tag
        className={"tag_points success"}
        style={{
          marginRight: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="fas fa-heart" style={{ marginRight: "8px" }}></i> 1238
        pontos
      </Tag>
      <Tag
        className={"tag_points default"}
        color={"#a5a5a5"}
        style={{
          marginRight: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="fas fa-heart" style={{ marginRight: "8px" }}></i> Cliente
        há 1 ano
      </Tag>
      <Tag
        className={"tag_points default"}
        color={"#a5a5a5"}
        style={{
          marginRight: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i
          className="fas fa-copyright"
          style={{
            marginRight: "8px",
          }}
        ></i>{" "}
        Fã de Nike
      </Tag>{" "}
      <Tag
        className={"tag_points default"}
        textAlign={"center"}
        color={"#a5a5a5"}
        style={{
          marginRight: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i
          className="fas fa-birthday-cake"
          style={{
            marginRight: "8px",
          }}
        ></i>{" "}
        Aniversariante
      </Tag>{" "}
      <Tag
        className={"tag_points default"}
        color={"#a5a5a5"}
        style={{
          marginRight: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i
          className="fas fa-cart-plus"
          style={{
            marginRight: "8px",
          }}
        ></i>{" "}
        R$1.350 ao mês
      </Tag>
    </Grid>
  );
};

export default TagsCliente;
