import React from "react";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/core";
const ButtonMenu: React.FC<ChakraButtonProps> = (props) => {
  return (
    <ChakraButton
      className={"menu_selected"}
      border={null}
      backgroundColor={"#eeeeee"}
      fontWeight={"normal"}
      fontSize={14}
      width={100}
      outline={null}
      _hover={{ fontWeight: "bold" }}
      {...props}
    />
  );
};

export default ButtonMenu;
