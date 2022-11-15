import { Box, Flex, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import {
  beachHug,
  forest,
  hedo,
  kiss,
  rabby,
  wedding,
  womanCloseUp,
  yuki,
} from "../../constants";

export const Works = () => {
  const SImage = styled(Image)`
    &:hover {
      transform: scale(1.2);
      transition: 1s all;
      opacity: 100%;
      position: relative;
      z-index: 5;
    }
  `;

  return (
    <>
      <Text
        textAlign={"center"}
        fontSize={"50px"}
        fontFamily={"Sawarabi Mincho"}
        mb={20}
      >
        「 Works 」
      </Text>
      <Box w={"100%"} mx={"auto"}>
        <Flex flexWrap={"wrap"} px={{ base: 0, md: "10%" }} mx={"auto"} mb={10}>
          <Box m={0} w={{ base: "50%", md: "25%" }} h={{ base: 160, md: 270 }}>
            <SImage
              opacity={"90%"}
              border={"1px solid white"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={rabby}
              alt="rabby"
            />
          </Box>
          <Box m={0} w={{ base: "50%", md: "25%" }} h={{ base: 160, md: 270 }}>
            <SImage
              opacity={"90%"}
              border={"1px solid white"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={forest}
              alt="rabby"
            />
          </Box>
          <Box m={0} w={{ base: "50%", md: "25%" }} h={{ base: 160, md: 270 }}>
            <SImage
              opacity={"90%"}
              border={"1px solid white"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={kiss}
              alt="rabby"
            />
          </Box>
          <Box m={0} w={{ base: "50%", md: "25%" }} h={{ base: 160, md: 270 }}>
            <SImage
              opacity={"90%"}
              border={"1px solid white"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={womanCloseUp}
              alt="rabby"
            />
          </Box>
          <Box m={0} w={{ base: "50%", md: "25%" }} h={{ base: 160, md: 270 }}>
            <SImage
              opacity={"90%"}
              border={"1px solid white"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={wedding}
              alt="rabby"
            />
          </Box>
          <Box m={0} w={{ base: "50%", md: "25%" }} h={{ base: 160, md: 270 }}>
            <SImage
              opacity={"90%"}
              border={"1px solid white"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={yuki}
              alt="rabby"
            />
          </Box>
          <Box m={0} w={{ base: "50%", md: "25%" }} h={{ base: 160, md: 270 }}>
            <SImage
              opacity={"90%"}
              border={"1px solid white"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={hedo}
              alt="rabby"
            />
          </Box>
          <Box m={0} w={{ base: "50%", md: "25%" }} h={{ base: 160, md: 270 }}>
            <SImage
              opacity={"90%"}
              border={"1px solid white"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={beachHug}
              alt="rabby"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
