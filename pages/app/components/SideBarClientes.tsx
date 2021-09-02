import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  Avatar,
  AvatarBadge,
  List,
  ListItem,
  Tag,
  Flex,
  Text,
  Grid,
} from "@chakra-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronDown,
  faChevronLeft,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Divider from "../../../components/Divider";

interface ISidebarClientes {
  pic: string;
}

const SideBarClientes: React.FC<ISidebarClientes> = (
  prop: ISidebarClientes
) => {
  return (
    <ListItem
      className={"sidebar_clientes"}
      position={"absolute"}
      right={4}
      top={4}
      cursor={"pointer"}
      zIndex={9}
    >
      <Flex padding={"16px"}>
        <FontAwesomeIcon
          style={{ fontSize: 24 }}
          color={"#141414"}
          icon={faChevronDown}
        />
      </Flex>
      <List>
        <ListItem position={"absolute"} width={"100%"} top={"32px"}>
          <Flex className={"clientes_detalhes_flex"}>
            <Avatar height={"90px"} width={"90px"}>
              <AvatarBadge
                position={"absolute"}
                top={"60px"}
                width={4}
                height={4}
                bg="green.500"
              />
            </Avatar>

            <List>
              <ListItem>
                <Text fontSize={"40px"} marginLeft={"16px"} fontWeight={"100"}>
                  Bruno Brito
                </Text>
              </ListItem>
              <ListItem marginTop={"-16px"}>
                <Text
                  fontSize={"24px"}
                  color={"#a5a5a5"}
                  marginLeft={"16px"}
                  fontWeight={"100"}
                >
                  +55 (15) 9999-0099
                </Text>
              </ListItem>
            </List>
          </Flex>
          <Flex
            opacity={0.5}
            height={"1px"}
            marginTop={"24px"}
            background={"#a0aec0"}
            width={"100%"}
          />
          <Grid padding={"16px"} className={"custom_grid"}>
            <Tag
              className={"tag_points"}
              style={{
                marginRight: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fas fa-heart" style={{ marginRight: "8px" }}></i>{" "}
              1238 pontos
            </Tag>
            <Tag
              color={"#a5a5a5"}
              style={{
                marginRight: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fas fa-heart" style={{ marginRight: "8px" }}></i>{" "}
              Cliente há 1 ano
            </Tag>
            <Tag
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
        </ListItem>
      </List>
    </ListItem>
  );
};

export default SideBarClientes;
