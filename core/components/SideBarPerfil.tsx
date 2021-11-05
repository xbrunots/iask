import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Avatar, Flex, ListItem } from "@chakra-ui/core";

const SideBarPerfil: React.FC = () => {
  
  const [open, setOpen] = useState(false);
  const router = useRouter();
  
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
        onClick={()=>setOpen(!open)}
      />
      
      { open ?<Flex className={"sidebar"}>
       <button onClick={() =>{
                 localStorage.removeItem("TOKEN");

                 router.push("../../login")

       }}>
         SAIR
       </button>
      </Flex> : null}
    </ListItem>
  );
};

export default SideBarPerfil;
