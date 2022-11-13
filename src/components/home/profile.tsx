import { Box, Text, Image, Container } from "@chakra-ui/react"
import { rabby, wedding } from "../../constants"

export const Profile = () => {
    return <>
    <Box p={5}>
        <Text fontSize={{base:"25px", md:"45px"}} mb={5} color={"black.Alpha900"} fontFamily={"Sawarabi Mincho"} textAlign={"center"}>PHOTOGRAPHER</Text>
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
        <Text fontSize={{base:"15px", md:"20px"}} color={"black"} fontFamily={"Sawarabi Mincho"} textAlign={"center"}>モラーレスラビー竜希</Text>
    </Box>
    </>
}