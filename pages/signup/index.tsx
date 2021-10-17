// import Head from 'next/head'
import {
  Grid,
  Flex,
  Link,
  Button,
  Text,
  InputGroup, Spinner,
  InputRightElement,
} from "@chakra-ui/core";
import { useRouter } from "next/router";

import React from "react";
import Input from "../../components/Input";
import AlertError from "../../core/components/AlertError";
import api from '../../core/service/api'


export default function Home() {
  const router = useRouter();

  const [show, setShow] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const [email, setEmail] = React.useState(null);
  const [nome, setNome] = React.useState(null);

  const [password, setPassword] = React.useState(null);

  const [error, setError] = React.useState(null);

  const handleClick = () => setShow(!show);

  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetNome = (e) => setNome(e.target.value);
  const handleSetPassword = (e) => setPassword(e.target.value);
  const handleSetError = (e) => setError(e);


  const goHome = async (e) => {
    if (!loading) {
      setLoading(true);
      setError(null);

      var request = { email: email, password: password , name: nome, store: email };

      try {

        const response = await api.post("/api/signup", request); 
    
        setLoading(false);

        if(response.data.success == true){ 
          router.push("./login")
        }else{
          
        setLoading(false); 
        setError("E-mail, senha ou nome inválidos!");
        } 

      } catch (err) {
        setLoading(false);
        console.log(err);
        setError("E-mail, senha ou nome inválidos!");
      }
    }
    e.preventDefault();
  };

  return (
    <Grid
      as="main"
      height="100%"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <AlertError show={error != null} message={error} color={"#e90000"} onClose={() => setError(null)} />
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
        placeholder="Nome Completo"
        background="#dcdcdc"
        onChange={(e) => handleSetNome(e)} 
        _placeholder={{
          color: "#737373",
        }}
      />
      <Input
        placeholder="E-mail"
        background="#dcdcdc"
        marginTop={2}
        onChange={(e) => handleSetEmail(e)}
        _placeholder={{
          color: "#737373",
        }}
      />

        <InputGroup>
          <Input
            id="password"
            placeholder="Senha"
            background="#dcdcdc"
            onChange={(e) => handleSetPassword(e)}
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

        

        <Button
          className="buttonLogin"
          backgroundColor={loading ? "#cccccc" : "#000000"}
          color="#FFFFFF"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ boxShadow: "0 0 10px silver" }}
          onClick={(e) => goHome(e)}
        >
          {loading ? <Spinner color="#000000" /> : "CADASTAR"}
        </Button>

        <Text textAlign="center" fontSize="sm" color="#808080" marginTop={6}>
          Já tem uma conta?{" "}
          <Link color="#000000" fontWeight="bold" onClick={() =>  router.push("./login") } _hover={{ opacity: 0.6 }}>
            Entrar
          </Link>
        </Text>
      </Flex>
    </Grid>
  );
}
