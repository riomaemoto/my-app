import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
  Icon,
  Link,
  Flex,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";
import { Days, SecondColor } from "../../constants";

type FeatureProps = {
  text: string;
  icon: ReactNode;
  iconBg: string;
  url?: string;
};

type ListHeaderProps = {
  children: ReactNode;
};

const AllDays: FC<{ days: string[] }> = (props) => {
  const { days } = props;
  return (
    <>
      {days.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </>
  );
};

export const TimeList = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((item) => {
        return <li key={item}>(9:00 - 21:00)</li>;
      })}
    </>
  );
};

const Feature: FC<FeatureProps> = ({ text, icon, iconBg, url }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Link target="_blank" href={url} lineHeight={2}>
        <Text fontWeight={600}>{text}</Text>
      </Link>
    </Stack>
  );
};

const ListHeader: FC<ListHeaderProps> = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer: FC = () => {
  return (
    <Box
      bg={"whiteAlpha.100"}
      border=" 2px solid"
      m={2}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"8xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Text ml={{ base: "10px", md: "20px" }}>
              <ListHeader>日時</ListHeader>
              <Box
                style={{
                  marginTop: "12px",
                  display: "flex",
                  lineHeight: "30px",
                }}
              >
                <Text style={{ listStyle: "none", marginRight: "5px" }}>
                  <AllDays days={Days} />
                </Text>
                <Text style={{ listStyle: "none" }}>
                  <TimeList />
                </Text>
              </Box>
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Text
              ml={{ base: "20px", md: "20px" }}
              lineHeight={{ base: "8", md: "40px" }}
            >
              <ListHeader>ご連絡先</ListHeader>
              <Text>電話番号 </Text>
              <Text decoration={"underline"}>0120-117-5963</Text>
              <Text>メールアドレス </Text>
              <Text> rabby@gmail.com</Text>
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Text
              ml={{ base: "10px", md: "20px" }}
              lineHeight={{ base: "8", md: "40px" }}
            >
              <ListHeader>規約</ListHeader>
              <Text cursor={"pointer"}>Cookies Policy</Text>
              <Text cursor={"pointer"}>Privacy Policy</Text>
              <Text cursor={"pointer"}>Terms of Service</Text>
              <Text cursor={"pointer"}>Law Enforcement</Text>
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Text
              ml={{ base: "20px", md: "20px" }}
              lineHeight={{ base: "8", md: "60px" }}
            >
              <ListHeader>SNS</ListHeader>
              <Box cursor={"pointer"} mb={4}>
                <Feature
                  url="https://www.instagram.com/moralesrrphoto/"
                  icon={
                    <Icon
                      as={IoLogoInstagram}
                      color={SecondColor}
                      w={7}
                      h={7}
                    />
                  }
                  iconBg={""}
                  text="@moralesrrphoto"
                />
              </Box>
              <Box cursor={"pointer"} mb={4}>
                <Feature
                  url="https://tiktok.com"
                  icon={
                    <Icon as={IoLogoTiktok} color={SecondColor} w={7} h={7} />
                  }
                  iconBg={""}
                  text={"@b_panther_ryuki"}
                />
              </Box>

              <Box cursor={"pointer"} mb={4}>
                <Feature
                  url="https://www.instagram.com/carmeloanthony/"
                  icon={
                    <Icon
                      as={IoLogoInstagram}
                      color={SecondColor}
                      w={7}
                      h={7}
                    />
                  }
                  iconBg={""}
                  text={"@c_anthony_ryuki"}
                />
              </Box>
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container py={4}>
          <Text>
            <Text align={"center"}>
              © 2022 MoralesrrPhoto. All rights reserved
            </Text>
          </Text>
        </Container>
      </Box>
    </Box>
  );
};
