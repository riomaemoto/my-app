import { Container, Image, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { plan } from "../../constants";

export const PlanImage = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  useEffect(() => {
    setIsDisplay(true);
  }, []);
  return (
    <Container maxW={"5xl"} py={32} mt={{ base: 15, md: 45 }}>
      <Flex display={isDisplay ? "flex" : "none"}>
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
