import { ReactNode } from "react";
import { Flex, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons';
import Link from "next/link";

interface HeaderProps {
  back_page?: ReactNode;
}

export const Header = ({ back_page = false }: HeaderProps) => {
  return (
    <Flex
      bg="#fff"
      w="100vw"
      h="5rem"
      p="8"
      justify="center"
      align="center"
      position="relative"
    >
      {!!back_page && (
        <Link href="/" passHref>
          <ChevronLeftIcon
            w={7}
            h={7}
            color="gray.600"
            position="absolute"
            left="9rem"
            top="6"
            cursor="pointer"
            transition="ease-in-out"
            _hover={{
              color: 'yellow.700',
            }}
          />
        </Link>
      )}
      <Image
        objectFit='cover'
        src='/Logo.svg'
        alt='Logo'
      />
    </Flex>
  );
}