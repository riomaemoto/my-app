import { Box, Image } from "@chakra-ui/react";
import { rabby, wedding, yuki } from "../../constants";

export const Menu = () => {
  return (
    <>
      <Box py={{ base: 63, md: 63 }}>
        <Image
          mx={"auto"}
          w={300}
          h={300}
          borderRadius={"50%"}
          mb={"50px"}
          src={rabby}
          alt="rabby"
        />
        <Image
          mx={"auto"}
          w={300}
          h={300}
          borderRadius={"50%"}
          my={"50px"}
          src={yuki}
          alt="rabby"
        />
        <Image
          mx={"auto"}
          w={300}
          h={300}
          borderRadius={"50%"}
          my={"50px"}
          src={wedding}
          alt="rabby"
        />
      </Box>
    </>
  );
};
