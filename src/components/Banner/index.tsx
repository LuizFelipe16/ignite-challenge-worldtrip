import { Flex, Heading, Text, Image, VStack, useBreakpointValue } from "@chakra-ui/react";

import styles from './banner.module.scss';

export const Banner = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <div className={styles.banner}>
      <VStack spacing="4" align="flex-start">
        <Heading color="gray.50">
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Heading>
        <Text color="gray.50">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </VStack>

      {!!isWideVersion && (
        <Image
          mb="-4rem"
          width="20rem"
          objectFit='cover'
          src='/Airplane.svg'
          alt='background'
        />
      )}
    </div>
  );
}