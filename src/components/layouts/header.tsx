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
import { FirstColor } from "../../constants";

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
        bgColor={FirstColor}
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Link to="/">
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
              <Text
                align={"center"}
                color={"white"}
                fontSize={{ base: "18", md: "25" }}
                pl={{ base: "90px", md: 300, lg: 400, xl: 700 }}
                letterSpacing={4}
                maxW="full"
                mt={0}
              >
                2TheNextStage
              </Text>
            </Heading>
          </Link>
        </Flex>

        <IconButton
          color={"white"}
          aria-label="メニューボタン"
          icon={<HamburgerIcon boxSize={8} />}
          size={"sm"}
          variant="unstyled"
          display={{ base: "colmn", md: "colmn" }}
          _focus={{ _focus: "none" }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="top" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <CloseLink to="/" style={LinkStyle}>
                <Text
                  _focus={{ _focus: "none" }}
                  style={dwTextStyle}
                  _hover={{
                    textDecoration: "none",
                    color: "white",
                    bg: FirstColor,
                  }}
                >
                  Home
                </Text>
              </CloseLink>
              <CloseLink to="/pictures" style={LinkStyle}>
                <Text
                  _focus={{ _focus: "none" }}
                  style={dwTextStyle}
                  _hover={{
                    textDecoration: "none",
                    color: "white",
                    bg: FirstColor,
                  }}
                >
                  Plan
                </Text>
              </CloseLink>
              <CloseLink to="/contact" style={LinkStyle}>
                <Text
                  _focus={{ _focus: "none" }}
                  style={dwTextStyle}
                  _hover={{
                    textDecoration: "none",
                    color: "white",
                    bg: FirstColor,
                  }}
                >
                  Contact
                </Text>
              </CloseLink>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
