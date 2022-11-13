import { Box, Image, Text} from "@chakra-ui/react";
import { rabby, wedding, yuki } from "../../constants";

export const Menu = () => {
  return (
    <>
      <Box display={{base:"", md:"flex"}} justifyContent={"center"} flexWrap={"wrap"} py={{ base: 63, md: 63 }}>
        <Image
          mx={{base:"auto", md: 10 }}
          w={{base:200, md:250}}
          h={{base:200, md:250}}
          borderRadius={"50%"}
          mb={"60px"}
          src={rabby}
          alt="rabby"
          objectFit={"cover"}
        />
        <Image
          mx={{base:"auto", md: 10 }}
          w={{base:200, md:250}}
          h={{base:200, md:250}}
          borderRadius={"50%"}
          mb={"60px"}
          src={wedding}
          alt="rabby"
          objectFit={"cover"}
        />
        <Image
          mx={{base:"auto", md: 10 }}
          w={{base:200, md:250}}
          h={{base:200, md:250}}
          borderRadius={"50%"}
          mb={"60px"}
          src={yuki}
          alt="rabby"
          objectFit={"cover"}
        />
      </Box>
    </>
  );
};
