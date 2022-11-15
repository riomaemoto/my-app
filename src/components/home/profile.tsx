import { Box, Text, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { forest, rabby } from "../../constants";

export const Profile = () => {
  const Ebox = styled(Box)`
    &:hover {
      transform: scale(1.1);
      transition: 4s all;
      opacity: 100%;
      position: relative;
      z-index: 5;
      background-size: 95%;
    }
  `;
  const Etext = styled(Text)`
    &:hover {
      transform: scale(1.2);
      transition: 1.2s all;
      opacity: 100%;
      position: relative;
      z-index: 5;
    }
  `;
  const Eimage = styled(Image)`
    &:hover {
      transform: scale(1.2);
      transition: 1.2s all;
      opacity: 100%;
      position: relative;
      z-index: 5;
      border-radius: 0.5%;
      width: 70%;
      height: 50%;
    }
    @media (min-width: 680px) {
      margin-inline: auto;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      margin-bottom: 25px;
      object-fit: cover;
    }
  `;

  return (
    <>
      <Text
        fontSize={"40px"}
        mb={10}
        color={"black"}
        fontFamily={"Sawarabi Mincho"}
        textAlign={"center"}
      >
        「 PROFILE 」
      </Text>
      <Ebox p={20} bgImage={forest} mb={10}>
        <Etext
          fontSize={{ base: "25px", md: "45px" }}
          mb={5}
          color={"white"}
          fontFamily={"Sawarabi Mincho"}
          textAlign={"center"}
        >
          PHOTOGRAPHER
        </Etext>
        <Eimage
          mx={"auto"}
          w={{ base: 150, md: 250 }}
          h={{ base: 150, md: 250 }}
          borderRadius={"50%"}
          mb={"25px"}
          src={rabby}
          alt="rabby"
          objectFit={"cover"}
        />
        <Text
          fontSize={{ base: "15px", md: "20px" }}
          color={"white"}
          fontWeight={900}
          fontFamily={"Sawarabi Mincho"}
          textAlign={"center"}
        >
          モラーレスラビー竜希
        </Text>
      </Ebox>
    </>
  );
};
