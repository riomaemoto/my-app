import { Box, Text, Image} from "@chakra-ui/react"
import { forest, rabby } from "../../constants"

export const Profile = () => {
    return <>
    <Text fontSize={"40px"} mb={10} color={"black"} fontFamily={"Sawarabi Mincho"} textAlign={"center"}>「 PROFILE 」</Text>
    <Box p={20} bgImage={forest} mb={10}>
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