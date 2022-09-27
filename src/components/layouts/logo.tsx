import { Image } from "@chakra-ui/react";
import { logo } from "../../constants";

export const Logo = () => {
  return (
    <>
      <Image w={50} h={50} src={logo} alt="logo" />
    </>
  );
};
