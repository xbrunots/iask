// import Head from 'next/head'
import {
  Heading,
  Grid,
  Flex,
  Link,
  Button,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/core";
import { useRouter } from "next/router";

import React from "react";
import Input from "../components/Input";
import ReactDOM from "react-dom";
import $ from "jquery";

export default function Home() {
  const router = useRouter();

  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  const goHome = (e) => {
    e.preventDefault();
    router.push("./app");
  };

  return (
    <Grid
      as="main"
      height="100%"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Grid position={"absolute"} top={"16px"} marginLeft={16} width={200}>
        <img src="/images/logo_rocket.png" width="80" alt="Rocketseat" />
      </Grid>
      <Flex
        position={"absolute"}
        bottom={1}
        right={4}
        marginTop={16}
        marginLeft={16}
      >
        <Text marginRight={1} marginTop={1} fontSize={12} color={"#9e9e9e"}>
          Desenvolvido por{" "}
        </Text>
        <img src="/images/logo_evolve.png" width="80" alt="Rocketseat" />
      </Flex>

      <Flex
        gridArea="form"
        height="500"
        width="40%"
        position="absolute"
        left="30%"
        top="20%"
        backgroundColor="#eeeeee"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Input
          placeholder="E-mail"
          background="#dcdcdc"
          _placeholder={{
            color: "#737373",
          }}
        />

        <InputGroup>
          <Input
            id="password"
            placeholder="Senha"
            background="#dcdcdc"
            marginTop={2}
            type={show ? "text" : "password"}
            _placeholder={{
              color: "#737373",
            }}
          />
          <InputRightElement marginTop={3} marginRight={0} width="16">
            <Button
              h="1.75rem"
              size="sm"
              fontSize={16}
              background={"#00000000"}
              fontWeight={"normal"}
              color={"#000000"}
              onClick={handleClick}
            >
              {show ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="#000000"
          fontWeight="bold"
          _hover={{ opacity: 0.6 }}
        >
          Esqueci minha senha
        </Link>

        <Button
          className="buttonLogin"
          backgroundColor="#000000"
          color="#FFFFFF"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ boxShadow: "0 0 10px black" }}
          onClick={(e) => goHome(e)}
        >
          ENTRAR
        </Button>

        <Text textAlign="center" fontSize="sm" color="#808080" marginTop={6}>
          Não tem uma conta?{" "}
          <Link color="#000000" fontWeight="bold" _hover={{ opacity: 0.6 }}>
            Registre-se
          </Link>
        </Text>
      </Flex>
    </Grid>
  );
}
