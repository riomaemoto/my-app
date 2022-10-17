import { Box, Stack, Heading, Text, VStack } from "@chakra-ui/react";
import { PriceCard } from "./price_card";
import { firstArr, secondArr, thirdArr } from "../../constants";

export const Plan = () => {
  return (
    <Box py={{ base: 73, md: 33 }}>
      <VStack spacing={2} textAlign="center">
        <Heading fontWeight={"10px"} as="h1" fontSize="4xl">
          撮影プラン一覧
        </Heading>
        <Text textAlign={"center"} fontSize="lg" color={"gray.500"} p={"2% 4%"}>
          お問合せフォーム、又はインスタグラムの <br />
          ダイレクトメッセージからお気軽にご連絡ください！
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={6}
        p={10}
        flexWrap={"wrap"}
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
