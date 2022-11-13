import { Box, Image} from "@chakra-ui/react";
import { kiss, rabby, hedo, beachHug } from "../../constants";

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
          src={kiss}
          alt="rabby"
          objectFit={"cover"}
        />
        <Image
          mx={{base:"auto", md: 10 }}
          w={{base:200, md:250}}
          h={{base:200, md:250}}
          borderRadius={"50%"}
          mb={"60px"}
          src={beachHug}
          alt="rabby"
          objectFit={"cover"}
        />
      </Box>
    </>
  );
};
