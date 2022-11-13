import { Flex, Image } from "@chakra-ui/react";
import { rabby } from "../../constants";

export const Works = () => {
  return (
    <>
      <Flex flexWrap={"wrap"}>
        <Image m={0} w={"50%"} h={300} mb={"50px"} src={rabby} alt="rabby" />
        <Image m={0} w={"50%"} h={300} mb={"50px"} src={rabby} alt="rabby" />
        <Image m={0} w={"50%"} h={300} mb={"50px"} src={rabby} alt="rabby" />
        <Image m={0} w={"50%"} h={300} mb={"50px"} src={rabby} alt="rabby" />
      </Flex>
    </>
  );
};
