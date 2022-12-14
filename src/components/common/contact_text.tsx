import { Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgc: string;
  color: string;
};

export const ContactText: FC<Props> = ({ children, bgc, color }) => {
  return (
    <Text
      fontSize={"20px"}
      mt={6}
      mb={"20px"}
      pt={"5px"}
      h={"40px"}
      bgColor={bgc}
      color={color}
      borderRadius={2}
      textAlign={"center"}
      fontFamily={"Sawarabi Mincho"}
    >
      {children}
    </Text>
  );
};
