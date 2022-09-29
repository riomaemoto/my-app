import { Container, Image, Flex } from "@chakra-ui/react";

import { plan } from "../../constants";

export const SplitWithImage = () => {
  return (
    <Container maxW={"5xl"} py={32} mt={{ base: 15, md: 45 }}>
      <Flex>
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={plan}
          objectFit={"cover"}
        />
      </Flex>
    </Container>
  );
};
