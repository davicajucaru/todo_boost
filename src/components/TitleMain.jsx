import { Text } from "@chakra-ui/react";
import React from "react";

const TitleMain = ({ text }) => {
  return (
    <div>
      <Text fontSize="5xl">{text}</Text>
    </div>
  );
};

export default TitleMain;
