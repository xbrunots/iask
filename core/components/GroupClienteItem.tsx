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
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
// import { Container } from './styles';

interface IGroupClienteItem {
  json: object;
  name: string;
  phone: string;
  size: any;
  pic: string;
  click: Function;
}

const GroupClienteItem: React.FC<IGroupClienteItem> = (
  props: IGroupClienteItem
) => {
  function handleClickMenu() {
    props.click(props.json);
  }

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
    <Stat
      onClick={() => handleClickMenu()}
      className={"indicator_clients_chat client_item" + props.phone.toString()}
    >
      <Flex width={"100%"}>
        {props.json["isGroup"] != true ? (
          <Flex
            background={"#ff3d00"}
            height={"40px"}
            width={"40px"}
            borderRadius={"50%"}
            color={"#FFFFFF"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            <FontAwesomeIcon icon={faVolumeUp} />
          </Flex>
        ) : (
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
        )}
        <List className={"client_name"}>
          <Flex>
            {" "}
            {props.name == null || props.name == undefined ? (
              ""
            ) : (
              <StatLabel fontSize={"16px"} marginLeft={3} marginTop={"4px"}>
                {props.name.toString()}
              </StatLabel>
            )}
            {props.size > 0 ? (
              <Flex
                opacity={0.3}
                height={"6px"}
                marginLeft={"8px"}
                marginTop={"15px"}
                background={"#a0aec0"}
                borderRadius={"50%"}
                width={"6px"}
              />
            ) : (
              ""
            )}
            {props.size > 0 ? (
              <StatLabel
                fontSize={"16px"}
                marginLeft={"8px"}
                marginTop={"4px"}
                style={{
                  fontSize: "12px",
                  color: "#929292",
                  marginTop: "9px",
                }}
              >
                {props.size.toString() + " membros"}
              </StatLabel>
            ) : (
              ""
            )}
          </Flex>

          {props.json["isGroup"] != true ? (
            <Tag
              height={"20px"}
              minHeight={"20px"}
              marginX={"10px"}
              fontSize={"12px"}
              color={"#ff3d00"}
              background={"#ece9e9"}
            >
              LISTA DE TRANSMIÇÃO
            </Tag>
          ) : props.phone.toString() == null ||
            props.phone.toString() == undefined ? (
            ""
          ) : (
            <StatHelpText marginBottom={"0px"} marginLeft={"8px"}>
              {props.phone.toString() == null ||
              props.phone.toString() == undefined
                ? ""
                : props.phone
                    .toString()
                    .replace(/(\d{2})(\d{2})(\d{5})(\d{2})/, "+$1 ($2) $3-$4")}
            </StatHelpText>
          )}

          <Flex position={"absolute"} right={0} top={2}></Flex>
        </List>
      </Flex>
    </Stat>
  );
};

export default GroupClienteItem;
