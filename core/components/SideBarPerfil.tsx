import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Avatar, ListItem } from "@chakra-ui/core";

const SideBarPerfil: React.FC = () => {
  return (
    <ListItem
      position={"absolute"}
      right={4}
      top={4}
      cursor={"pointer"}
      zIndex={9}
    >
      <Avatar
        position={"fixed"}
        right={"16px"}
        bg={"#1b2fa0"}
        color={"#FFFFFF"}
        height={8}
        width={8}
        fontSize={16}
        name="Bruno Brito"
      />
    </ListItem>
  );
};

export default SideBarPerfil;
