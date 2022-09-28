import {
  Box,
  HStack,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FirstColor } from "../../constants";

type Props = {
  cardTitle: string;
  fee: String;
  checkList: any;
  isShowChip?: boolean;
  isGold?: boolean;
};

const PriceWrapper: FC<{ children: any }> = ({ children }) => {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
};

const TopChip = () => {
  return (
    <Box
      position="absolute"
      top="-16px"
      left="50%"
      sx={{
        transform: "translate(-50%)",
      }}
    >
      <Text
        textTransform="uppercase"
        bg={FirstColor}
        px={3}
        py={1}
        color={useColorModeValue("gray.900", "gray.300")}
        fontSize="sm"
        fontWeight="600"
        rounded="xl"
      >
        オススメ
      </Text>
    </Box>
  );
};

export const PriceCard: FC<Props> = (props) => {
  const { isShowChip, cardTitle, fee, checkList } = props;
  return (
    <PriceWrapper>
      <Box position="relative">
        {isShowChip && <TopChip />}
        <Box py={4} px={12}>
          <Text fontWeight="500" fontSize="2xl">
            {cardTitle}
          </Text>
          <HStack justifyContent="center">
            <Text fontSize="5xl" fontWeight="900">
              {fee}
            </Text>
            <Text fontSize="3xl" color="gray.500">
              円
            </Text>
          </HStack>
        </Box>
        <VStack
          bg={useColorModeValue("gray.50", "gray.700")}
          py={4}
          borderBottomRadius={"xl"}
        >
          <List spacing={3} textAlign="start" px={12}>
            {checkList &&
              checkList.map((item: any) => {
                return (
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={FirstColor} />
                    {item}
                  </ListItem>
                );
              })}
          </List>
        </VStack>
      </Box>
    </PriceWrapper>
  );
};