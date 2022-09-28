import { Box, Stack, Heading, Text, VStack } from "@chakra-ui/react";
import { PriceCard } from "./price_card";
import { firstArr, secondArr, thirdArr } from "../../constants";

export const Plan = () => {
  return (
    <Box py={32}>
      <VStack spacing={2} textAlign="center">
        <Heading fontWeight={"10px"} as="h1" fontSize="4xl">
          撮影プラン
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          お問合せフォーム、又はインスタグラムのダイレクトメッセージからご連絡ください！
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceCard
          cardTitle={"プライベートフォト"}
          fee={"10,000"}
          checkList={firstArr}
        />
        <PriceCard
          cardTitle={"カップルフォト&ファミリー"}
          fee={"20,000"}
          isShowChip={true}
          checkList={secondArr}
          isGold={true}
        />
        <PriceCard
          cardTitle={"ウェディングフォト"}
          fee={"30,000"}
          checkList={thirdArr}
        />
      </Stack>
    </Box>
  );
};
