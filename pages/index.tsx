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

import React, { useEffect } from "react";
import Input from "../components/Input";
import ReactDOM from "react-dom";
import $ from "jquery";

export default function Home() {
  const router = useRouter();

  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  const goHostgator =  () => { 
    router.push("http://162.240.21.226/login");
  };

  useEffect(() => {
    window.location.assign('http://162.240.21.226/login')
})

  return (
    <Flex 
      height="100%"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    > 
        <img  style={{top: "45%", left: "50%", position: "fixed", height: "10%"}} src="/images/logo_rocket.png" alt="Rocketseat" />
      
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
        <img  src="/images/logo_evolve.png" width="80" alt="Rocketseat" />
      </Flex>

      </Flex>
  );
}
