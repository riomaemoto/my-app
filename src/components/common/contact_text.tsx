import { Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  children: string;
  bgc: string;
  color: string;
};

export const ContactText: FC<Props> = ({ children, bgc, color }) => {
  return (
    <Text
      fontSize={"20px"}
      mt={6}
      ml={{ base: "-30px", md: "550px" }}
      mb={"20px"}
      pt={"5px"}
      w={220}
      h={"40px"}
      bgColor={bgc}
      color={color}
      display={"inline-block"}
      borderRadius={2}
      align={"center"}
      verticalAlign={"middle"}
    >
      {children}
    </Text>
  );
};
