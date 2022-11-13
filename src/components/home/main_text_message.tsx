import { Text, Center, Box } from "@chakra-ui/react";

export const MainTextMessage = () => {
  return (
    <Center>
      <Box my={10} p={8}>
        <Text align={"center"}>
          <strong>その一瞬が「ten carat」の輝き</strong>
        </Text>
        <Box py={5} px={"auto"}>
          <Text>
            何気ない日常の中で、流れていく時間
            <br />
            その一瞬は小さな奇跡の積み
            <br /> 重ねその一瞬を逃さず
            <br />
            一生輝き続けいつまでも心に残り続けるものを求めて
            <br />
            全ての人に「ten carat」の輝きを
          </Text>
        </Box>
      </Box>
    </Center>
  );
};
