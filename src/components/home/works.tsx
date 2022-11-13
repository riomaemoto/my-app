import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { rabby, wedding, yuki } from "../../constants";

export const Works = () => {
  return (
    <>
    <Text textAlign={"center"} fontSize={"50px"} fontFamily={"Sawarabi Mincho"} mb={10}>Works</Text>
    <Box w={"100%"} mx={"auto"}>
      <Flex flexWrap={"wrap"} px={{base:0, md:"10%"}} m={"auto"} mb={20}>
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:150,md:270}} objectFit={"cover"} src={rabby} alt="rabby" />
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:150,md:270}} objectFit={"cover"} src={wedding} alt="rabby" />
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:150,md:270}} objectFit={"cover"} src={yuki} alt="rabby" />
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:150,md:270}} objectFit={"cover"} src={rabby} alt="rabby" />
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:150,md:270}} objectFit={"cover"} src={wedding} alt="rabby" />
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:150,md:270}} objectFit={"cover"} src={yuki} alt="rabby" />
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:150,md:270}} objectFit={"cover"} src={rabby} alt="rabby" />
        
      </Flex>
    </Box>
    </>
  );
};
