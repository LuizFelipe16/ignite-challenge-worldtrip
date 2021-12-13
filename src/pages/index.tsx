import { Divider, Flex, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Travels } from "../components/Travels";
import { Carousel } from "../components/Carousel";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex justify="flex-start" align="center" direction="column">
      <Head><title>Home | Wordtrip</title></Head>

      <Header />
      <Banner />

      <Travels />
      <VStack spacing="8">
        <Divider w="8rem" h="3px" bg="gray.700" borderRadius="10" />
        <Text
          color="gray.600"
          textAlign="center"
          fontSize="24"
          fontWeight="normal"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </VStack>

      <Carousel />
    </Flex>
  );
}