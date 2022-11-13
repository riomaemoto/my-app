import { Box, Text, Image, Container } from "@chakra-ui/react"
import { forest, hedo, rabby, wedding, womanBright } from "../../constants"

export const Profile = () => {
    return <>
    <Box p={5} bgImage={forest}>
        <Text fontSize={{base:"25px", md:"45px"}} mb={5} color={"white"} fontFamily={"Sawarabi Mincho"} textAlign={"center"}>PHOTOGRAPHER</Text>
        <Image
          mx={"auto"}
          w={{base:150, md:250}}
          h={{base:150, md:250}}
          borderRadius={"50%"}
          mb={"20px"}
          src={rabby}
          alt="rabby"
          objectFit={"cover"}
        />
        <Text fontSize={{base:"15px", md:"20px"}} color={"white"} fontWeight={900} fontFamily={"Sawarabi Mincho"} textAlign={"center"}>モラーレスラビー竜希</Text>
    </Box>
    </>
}