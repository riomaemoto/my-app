import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { beachHug, forest, hedo, kiss, rabby, wedding, womanCloseUp, yuki } from "../../constants";

export const Works = () => {
  return (
    <>
    <Text textAlign={"center"} fontSize={"50px"} fontFamily={"Sawarabi Mincho"} mb={20}>「 Works 」</Text>
    <Box w={"100%"} mx={"auto"}>
      <Flex flexWrap={"wrap"} px={{base:0, md:"10%"}} mx={"auto"} mb={10}>
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:160,md:270}} objectFit={"cover"} src={rabby} alt="rabby" />
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:160,md:270}} objectFit={"cover"} src={forest} alt="rabby" />
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:160,md:270}} objectFit={"cover"} src={kiss} alt="rabby" />
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:160,md:270}} objectFit={"cover"} src={womanCloseUp} alt="rabby" />
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:160,md:270}} objectFit={"cover"} src={wedding} alt="rabby" />
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:160,md:270}} objectFit={"cover"} src={yuki} alt="rabby" />
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:160,md:270}} objectFit={"cover"} src={hedo} alt="rabby" />
        <Image border={"1px solid white"} m={0} w={{base:"50%", md:"25%"}} h={{base:160,md:270}} objectFit={"cover"} src={beachHug} alt="rabby" />
      </Flex>
    </Box>
    </>
  );
};
