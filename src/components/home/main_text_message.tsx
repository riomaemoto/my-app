import { Text, Center, Box } from "@chakra-ui/react";

export const MainTextMessage = () => {
  return (
    <Center>
      <Box mt={10} p={8}>
        <Text
          fontFamily={"Sawarabi Mincho"}
          align={"center"}
          fontSize={{ base: "30px", md: "45px" }}
        >
          その一瞬が「ten carat」の輝き
        </Text>
        <Box py={5} px={"auto"}>
          <Text
            fontFamily={"Sawarabi Mincho"}
            align={"center"}
            fontSize={{ base: "auto", md: "20px" }}
          >
            何気ない日常の中で、流れていく時間
            <br />
            <br />
            その一瞬は小さな奇跡の積み
            <br />
            <br />
            重ねその一瞬を逃さず
            <br />
            <br />
            一生輝き続けいつまでも心に残り続けるものを求めて
            <br />
            <br />
            全ての人に「ten carat」の輝きを
          </Text>
        </Box>
      </Box>
    </Center>
  );
};
