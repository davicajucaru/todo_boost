import React from "react";
import { Input } from "@chakra-ui/react";

const InputMain = ({ value, setValue }) => {
  return (
    <Input
      style={{ background: "white" }}
      placeholder="Add an activity here"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default InputMain;
