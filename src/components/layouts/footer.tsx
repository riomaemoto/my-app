import {
  Stack,
  useColorModeValue,
  Icon,
  Link,
  Flex,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";
import { beachHug, hedo, rabby, SecondColor, wedding, womanBright } from "../../constants";

type FeatureProps = {
  icon: ReactNode;
  iconBg: string;
  url?: string;
};

const Feature: FC<FeatureProps> = ({ icon, iconBg, url }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
        cursor={"pointer"}
      >
        {icon}
      </Flex>
      <Link target="_blank" href={url} lineHeight={2}>
      </Link>
    </Stack>
  );
};

export const Footer: FC = () => {
  return (
    <>
    <Flex
      p={5}
      justifyContent={"center"}
      bgColor={"black"}
    >
      <Link href="https://instagram.com">
        <Icon
          cursor={"pointer"}
          as={IoLogoInstagram}
          color={"white"}
          w={50}
          h={50}
        />
      </Link>  
    </Flex>
      </>
  );
};
