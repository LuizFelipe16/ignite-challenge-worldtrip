import { Icon } from "@chakra-ui/core";
import { Image, Text, Tooltip, VStack } from "@chakra-ui/react";

interface TravelItemProps {
  icon: string;
  text: string;
  label: string;
}

export const TravelItem = ({ icon, text, label }: TravelItemProps) => {
  return (
    <VStack mb={['8', '1']} spacing="6">
      <Tooltip label={label} fontSize='md'>
        <Image objectFit="cover" src={`/icons/${icon}`} alt={`icon-${text}`} />
      </Tooltip>
      <Text color="gray.600" fontWeight="bold">{text}</Text>
    </VStack>
  );
}