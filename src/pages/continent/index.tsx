import { InfoIcon, InfoOutlineIcon, PhoneIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, Heading, HStack, Image, Stack, Text, Tooltip, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../../components/Header";

import styles from './styles.module.scss';

export default function Continent() {
  return (
    <Flex justify="flex-start" align="center" direction="column" mb="8">
      <Head><title>Europa | Wordtrip</title></Head>

      <Header back_page />

      <div className={styles.banner}>
        <Heading
          fontSize={["5xl", "lg"]}
          position="absolute"
          color="gray.50"
          bottom="10"
          left={["18", "9rem"]}
        >
          Europa
        </Heading>
      </div>

      <Stack
        spacing={["12", "2"]}
        w={["90vw", "70vw"]}
        direction={['column', 'row']}
        align="center"
        justify="space-between"
        px="2"
        mt="14"
      >
        <Text
          fontSize="lg"
          color="gray.600"
          w={["100%", "520px"]}
          letterSpacing={1}
          textAlign="justify"
        >
          A Europa é, por convenção um dos seis continentes do muno. Compreendendo
          a península da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória
          dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mMar Negro a sudeste.
        </Text>

        <HStack spacing="12">
          <VStack>
            <Text fontWeight="bold" fontSize={["4xl", "6xl"]} color="yellow.700">50</Text>
            <HStack spacing="2">
              <Text fontWeight="bold" color="gray.600">países</Text>
              <Tooltip label='50 países ótimos para você visitar.' fontSize='md'>
                <InfoOutlineIcon color="gray.600" />
              </Tooltip>
            </HStack>
          </VStack>

          <VStack>
            <Text fontWeight="bold" fontSize={["4xl", "6xl"]} color="yellow.700">60</Text>
            <HStack spacing="2">
              <Text fontWeight="bold" color="gray.600">línguas</Text>
              <Tooltip label='60 línguas que são faladas para você ouvir.' fontSize='md' >
                <InfoOutlineIcon color="gray.600" />
              </Tooltip>
            </HStack>
          </VStack>

          <VStack>
            <Text fontWeight="bold" fontSize={["4xl", "6xl"]} color="yellow.700">27</Text>
            <HStack spacing="2">
              <Text fontWeight="bold" color="gray.600">cidades +100</Text>
              <Tooltip label='Mais de 100 cidades, imagine os lugares incríveis.' fontSize='md' >
                <InfoOutlineIcon color="gray.600" />
              </Tooltip>
            </HStack>
          </VStack>
        </HStack>
      </Stack>

      <Heading
        w={["95vw", "70vw"]}
        mt="12"
        px="4"
        fontWeight="semibold"
        fontSize="3xl"
        color="gray.500"
      >
        Cidades +100
      </Heading>

      <div className={styles.continent_citys}>

        <Box
          bg="#fff"
          borderRadius="5px"
          w={["100%", "14rem"]}
          h="auto"
          borderWidth={1}
          _hover={{
            borderColor: "yellow.700"
          }}
        >
          <Image w="100%" objectFit="cover" src="/citys/londres.svg" />
          <HStack justify="space-between" align="center" px="6" py="8">
            <VStack w="65%" align="flex-start">
              <Text fontSize={["19", "17"]} fontWeight="semibold" color="gray.700">Londres</Text>
              <Text fontSize={["15", "12"]} letterSpacing={1} color="gray.500">Reino Unido</Text>
            </VStack>

            <Avatar src="/ufs/rn.svg" />
          </HStack>
        </Box>

        <Box
          bg="#fff"
          borderRadius="5px"
          w={["100%", "14rem"]}
          h="auto"
          borderWidth={1}
          _hover={{
            borderColor: "yellow.700"
          }}
        >
          <Image w="100%" objectFit="cover" src="/citys/paris.svg" />
          <HStack justify="space-between" align="center" px="6" py="8">
            <VStack w="65%" align="flex-start">
              <Text fontSize={["19", "17"]} fontWeight="semibold" color="gray.700">Paris</Text>
              <Text fontSize={["15", "12"]} letterSpacing={1} color="gray.500">França</Text>
            </VStack>

            <Avatar src="/ufs/fr.svg" />
          </HStack>
        </Box>

        <Box
          bg="#fff"
          borderRadius="5px"
          w={["100%", "14rem"]}
          h="auto"
          borderWidth={1}
          _hover={{
            borderColor: "yellow.700"
          }}
        >
          <Image w="100%" objectFit="cover" src="/citys/roma.svg" />
          <HStack justify="space-between" align="center" px="6" py="8">
            <VStack w="65%" align="flex-start">
              <Text fontSize={["19", "17"]} fontWeight="semibold" color="gray.700">Roma</Text>
              <Text fontSize={["15", "12"]} letterSpacing={1} color="gray.500">Itália</Text>
            </VStack>

            <Avatar src="/ufs/it.svg" />
          </HStack>
        </Box>

        <Box
          bg="#fff"
          borderRadius="5px"
          w={["100%", "14rem"]}
          h="auto"
          borderWidth={1}
          _hover={{
            borderColor: "yellow.700"
          }}
        >
          <Image w="100%" objectFit="cover" src="/citys/roma.svg" />
          <HStack justify="space-between" align="center" px="6" py="8">
            <VStack w="65%" align="flex-start">
              <Text fontSize={["19", "17"]} fontWeight="semibold" color="gray.700">Roma</Text>
              <Text fontSize={["15", "12"]} letterSpacing={1} color="gray.500">Itália</Text>
            </VStack>

            <Avatar src="/ufs/it.svg" />
          </HStack>
        </Box>

        <Box
          bg="#fff"
          borderRadius="5px"
          w={["100%", "14rem"]}
          h="auto"
          borderWidth={1}
          _hover={{
            borderColor: "yellow.700"
          }}
        >
          <Image w="100%" objectFit="cover" src="/citys/praga.svg" />
          <HStack justify="space-between" align="center" px="6" py="8">
            <VStack w="65%" align="flex-start">
              <Text fontSize={["19", "17"]} fontWeight="semibold" color="gray.700">Praga</Text>
              <Text fontSize={["15", "12"]} letterSpacing={1} color="gray.500">República Tcheca</Text>
            </VStack>

            <Avatar src="/ufs/rt.svg" />
          </HStack>
        </Box>

      </div>
    </Flex>
  );
}