import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./logo";

type CloseLinkTyp = {
  to: string;
  style: React.CSSProperties;
  children: any;
};

export const Header: FC = (props) => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  const dwTextStyle = {
    padding: "12px",
    width: "100vw",
    fontSize: "20px",
  };
  const LinkStyle = {
    boxShadow: "unset",
  };

  const CloseLink: FC<CloseLinkTyp> = ({ to, style, children }) => (
    <Link to={to} style={style} onClick={onClose}>
      {children}
    </Link>
  );

  return (
    <>
      <Flex
        as="nav"
        bgColor={"none"}
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        position={"fixed"}
        top={0}
        w={"100vw"}
        zIndex={10}
      >
        {/* <Logo /> */}

        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Link to="/">
            <Heading
              display={{ base: "none", md: "block" }}
              as="h1"
              fontSize={"lg"}
            >
              <Text
                align={"center"}
                color={"black"}
                fontSize={{ base: "18", md: "25" }}
                letterSpacing={4}
                maxW="full"
                mt={0}
              ></Text>
            </Heading>
          </Link>
        </Flex>
        {/* <IconButton
          color={"blackAlpha.900"}
          aria-label="メニューボタン"
          icon={<HamburgerIcon boxSize={8} />}
          size={"sm"}
          variant="unstyled"
          display={{ base: "colmn", md: "colmn" }}
          _focus={{ _focus: "none" }}
          onClick={onOpen}
  />*/}
      </Flex>

      <Drawer placement="top" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <CloseLink to="/" style={LinkStyle}>
                <Text
                  align={"center"}
                  _focus={{ _focus: "none" }}
                  style={dwTextStyle}
                  _hover={{
                    textDecoration: "none",
                    color: "white",
                    bg: "black",
                  }}
                >
                  Home
                </Text>
              </CloseLink>
              <CloseLink to="/plan" style={LinkStyle}>
                <Text
                  align={"center"}
                  _focus={{ _focus: "none" }}
                  style={dwTextStyle}
                  _hover={{
                    textDecoration: "none",
                    color: "white",
                    bg: "Black",
                  }}
                >
                  Plan
                </Text>
              </CloseLink>
              <CloseLink to="/pictures" style={LinkStyle}>
                <Text
                  align={"center"}
                  _focus={{ _focus: "none" }}
                  style={dwTextStyle}
                  _hover={{
                    textDecoration: "none",
                    color: "white",
                    bg: "black",
                  }}
                >
                  pictures
                </Text>
              </CloseLink>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
