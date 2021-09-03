import React from "react";
import { CircularProgress } from "@chakra-ui/core";

interface ILoading {
  show: boolean;
}

const Loading: React.FC<ILoading> = (props: ILoading) => {
  return (
    <CircularProgress
      zIndex={999999999999}
      display={props.show == true ? "block" : "none"}
      style={{
        position: "absolute",
        right: "27%",
        width: "35px",
      }}
      value={80}
      isIndeterminate
      color="#000000"
    />
  );
};

export default Loading;
