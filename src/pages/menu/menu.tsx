import { Box, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { beachHug, hedo, kiss } from "../../constants";

const ZImage = styled(Image)`
  &:hover {
    transform: scale(1.2) rotate(15deg);
    transition: 1.2s all;
    opacity: 100%;
  }
`;

const FloatText = styled(Text)`
  position: absolute;
  display: none;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  @media (max-width: 767px) {
    top: 50%;
  }
`;

const ImageBox = styled(Box)`
  &:hover {
    p {
      display: block;
      font-size: 35px;
      color: white;
      font-weight: 700;
    }
  }
`;

export const Menu = () => {
  return (
    <>
      <Box
        display={{ base: "", md: "flex" }}
        justifyContent={"center"}
        flexWrap={"wrap"}
        py={{ base: 63, md: 63 }}
      >
        <ImageBox position={"relative"}>
          <ZImage
            mx={{ base: "auto", md: 10 }}
            w={{ base: 200, md: 250 }}
            h={{ base: 200, md: 250 }}
            borderRadius={"50%"}
            mb={"60px"}
            src={hedo}
            alt="rabby"
            objectFit={"cover"}
            opacity={"80%"}
          />
          <FloatText>Works</FloatText>
        </ImageBox>
        <ImageBox position={"relative"}>
          <ZImage
            mx={{ base: "auto", md: 10 }}
            w={{ base: 200, md: 250 }}
            h={{ base: 200, md: 250 }}
            borderRadius={"50%"}
            mb={"60px"}
            src={kiss}
            alt="rabby"
            objectFit={"cover"}
            opacity={"80%"}
          />
          <FloatText>Works</FloatText>
        </ImageBox>
        <ImageBox position={"relative"}>
          <ZImage
            mx={{ base: "auto", md: 10 }}
            w={{ base: 200, md: 250 }}
            h={{ base: 200, md: 250 }}
            borderRadius={"50%"}
            mb={"60px"}
            src={beachHug}
            alt="rabby"
            objectFit={"cover"}
            opacity={"80%"}
          />
          <FloatText>Works</FloatText>
        </ImageBox>
      </Box>
    </>
  );
};
