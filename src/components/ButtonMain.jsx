import React from "react";

import { Button } from "@chakra-ui/react";

const ButtonMain = ({ value }) => {
  return (
    <div>
      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        background="white"
        marginTop="20px"
        borderColor="blue.500"
        type="submit"
        disabled={!value}
      >
        Add
      </Button>
    </div>
  );
};

export default ButtonMain;
