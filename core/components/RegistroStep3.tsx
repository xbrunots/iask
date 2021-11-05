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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Textarea,
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

interface IRegistroStep3 {
  onReview: Function;
  onComments: Function;
}

const RegistroStep3: React.FC<IRegistroStep3> = (props: IRegistroStep3) => {
  const [name, setName] = useState("");
  const onChangeName = (event) => {
    setName(event.target.value);
      props.onComments(event.target.value);
  }
  const [rate, setRate] = useState(3);
  const onChangeRate = (event) => { 
    setRate(event);
    props.onReview(event);
  }
  return (
    <List>
      <ListItem>
        <Text
          paddingLeft={"24px"}
          margin-right={0}
          marginTop={"24px"}
          textTransform={"uppercase"}
          fontWeight={"500"}
        >
          Como foi o atendimento?
        </Text>
        <Text
          paddingLeft={"16px"}
          marginRight={0}
          marginLeft={"16px"}
          marginTop={"8px"}
          fontWeight={"500"}
          opacity={rate == 0 ? 0.2 : 1}
          textTransform={"uppercase"}
          fontSize={"14px"}
          color={
            rate == 1
              ? "#bd3535"
              : rate == 2
              ? "#901212"
              : rate == 3
              ? "#000000"
              : rate == 4
              ? "#2196f3"
              : rate == 5
              ? "#0a670e"
              : "#000000"
          }
          style={{
            paddingTop: "0px",
            paddingBottom: "0px",
          }}
        >
          {rate == 0
            ? "  "
            : rate == 1
            ? "  horrível"
            : rate == 2
            ? "  ruim"
            : rate == 3
            ? "  comum"
            : rate == 4
            ? "  bom"
            : rate == 5
            ? "  ótimo"
            : " "}
          {rate == 0 ? (
            <i
              className="fas fa-star"
              style={{ opacity: 0.2, paddingRight: "16px", paddingLeft: "8px" }}
            ></i>
          ) : rate == 1 ? (
            <i
              className="fas fa-star"
              color={""}
              style={{ paddingRight: "16px", paddingLeft: "8px" }}
            ></i>
          ) : rate == 2 ? (
            <>
              <i
                className="fas fa-star"
                color={""}
                style={{ paddingLeft: "8px" }}
              ></i>
              <i
                className="fas fa-star"
                color={""}
                style={{ paddingRight: "16px" }}
              ></i>
            </>
          ) : rate == 3 ? (
            <>
              <i
                className="fas fa-star"
                color={""}
                style={{ paddingLeft: "8px" }}
              ></i>
              <i className="fas fa-star" color={""}></i>
              <i
                className="fas fa-star"
                color={""}
                style={{ paddingRight: "16px" }}
              ></i>
            </>
          ) : rate == 4 ? (
            <>
              <i
                className="fas fa-star"
                color={""}
                style={{ paddingLeft: "8px" }}
              ></i>
              <i className="fas fa-star" color={""}></i>
              <i className="fas fa-star" color={""}></i>
              <i
                className="fas fa-star"
                color={""}
                style={{ paddingRight: "16px" }}
              ></i>
            </>
          ) : rate == 5 ? (
            <>
              <i
                className="fas fa-star"
                color={""}
                style={{ paddingLeft: "8px" }}
              ></i>
              <i className="fas fa-star" color={""}></i>
              <i className="fas fa-star" color={""}></i>
              <i className="fas fa-star" color={""}></i>
              <i
                className="fas fa-star"
                color={""}
                style={{ paddingRight: "16px" }}
              ></i>
            </>
          ) : null}
        </Text>
        <Flex></Flex>
      </ListItem>
      <ListItem
        padding={"24px"}
        paddingTop={0}
        style={{
          width: "250px",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
      >
        <Slider
          defaultValue={3}
          min={0}
          max={5}
          step={1}
          onChange={onChangeRate}
        >
          <SliderTrack bg="#dcdcdc">
            <Box position="relative" right={10} />
            <SliderFilledTrack
              bg={
                rate == 1
                  ? "#bd3535"
                  : rate == 2
                  ? "#901212"
                  : rate == 3
                  ? "#000000"
                  : rate == 4
                  ? "#2196f3"
                  : rate == 5
                  ? "#0a670e"
                  : "#000000"
              }
            />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </ListItem>
      <ListItem>
        <Flex
          margin={"24px"}
          marginTop={"24px"}
          borderRadius={"8px"}
          boxShadow={"0 0 2px #0000005e"}
          padding={"2px"}
          paddingTop={"24px"}
          style={{ backgroundColor: "#ececec" }}
        >
          <Text className={"textarea_caption_cadastro"}>Comentários:</Text>
          <Textarea
            height={"160px"}
            paddingLeft={"8px"}
            onChange={onChangeName}
            value={name}
            backgroundColor={"#ececec00"}
            className={"search_input"}
            placeholder="Fale sobre o atendimento, cliente ou qualquer outra coisa..."
          />
        </Flex>
      </ListItem>
    </List>
  );
};

export default RegistroStep3;
