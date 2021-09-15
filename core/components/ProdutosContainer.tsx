import React, { useEffect, useState } from "react";
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
  InputLeftElement,
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
  faSearch,
  faBox,
  faBoxes,
} from "@fortawesome/free-solid-svg-icons";
// import { Container } from './styles';
import CampanhaCard from "./CampanhaCard";
import ProdutosItem from "./ProdutosItem";
import setup from "../../config/setup.json";
import SideBarGrupo from "./SideBarGrupo";

interface IProdutosContainer {
  isContainer: boolean;
  clickItem: Function;
}

const ProdutosContainer: React.FC<IProdutosContainer> = (
  props: IProdutosContainer
) => {
  const [openGrupo, setOpenGrupo] = useState(null);
  const [query, setQuery] = useState("");
  const [grupo, setGrupo] = useState([]);
  const handleChange = (event) => setQuery(event.target.value);
  const [addProducts, setAddProducts] = useState(null);

  const getClients = async () => {
    const res = await fetch("/api/products");
    const json = await res.json();
    console.log(json);
    setGrupo(json);
  };

  useEffect(() => {
    getClients();
  }, []);

  function safeString(str) {
    return str == null || str == undefined ? "" : str;
  }

  return (
    <List>
      <Flex
        padding={"2px"}
        marginBottom={"16px"}
        borderRadius={"30px"}
        boxShadow={"0 0 2px #0000005e"}
        style={{ backgroundColor: "#ececec" }}
      >
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            marginTop: "14px",
            marginLeft: "15px",
            fontSize: "14px",
            color: "#8a8a8a",
          }}
        />
        <Input
          onChange={handleChange}
          backgroundColor={"#ececec00"}
          className={"search_input"}
          placeholder="digite para filtrar..."
        />
      </Flex>
      {props.isContainer == true ? null : (
        <ListItem
          position={"fixed"}
          width={"calc(100% - 400px)"}
          left={"270px"}
          backgroundColor={"#FFFFFF"}
          top={"0px"}
          zIndex={88888}
        >
          <Text
            fontWeight={"400"}
            fontSize={"24px"}
            margin={"8px"}
            marginLeft={"10px"}
          >
            Produtos
          </Text>

          <Button
            className={"button_no_fill"}
            position={"fixed"}
            right={"124px"}
            backgroundColor={"#FFFFFF"}
            color={"#000000"}
            top={"8px"}
            fontWeight={"bolder"}
            onClick={() => setAddProducts(true)}
            fontSize={"14px"}
          >
            <i style={{ marginRight: "4px" }} className="fas fa-plus"></i>
            NOVO PRODUTO
          </Button>
        </ListItem>
      )}{" "}
      <Grid
        padding={"16px"}
        marginTop={"24px"}
        className={
          props.isContainer
            ? "custom_grid_product_popup"
            : "custom_grid_product"
        }
      >
        {grupo
          .filter(
            (p) =>
              safeString(p.title).includes(query) ||
              safeString(p.description).includes(query)
          )
          .map((clientItem) => (
            <ProdutosItem
              json={clientItem}
              name={clientItem.title}
              pic={clientItem.picture}
              description={clientItem.description}
              click={(json) => props.clickItem(json)}
            />
          ))}
      </Grid>
      {/*clients.map((clientItem, index) => (
        <GroupClienteItem name={clientItem.name} phone={clientItem.id.user} />
      ))*/}
      <SideBarGrupo
        json={openGrupo}
        onClose={() => setOpenGrupo(null)}
        pic={
          "https://cdn.12min.com/books/books_background/68_steve_jobs.site_thumb.jpg"
        }
      />
    </List>
  );
};

export default ProdutosContainer;
