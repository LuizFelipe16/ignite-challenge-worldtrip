import { Flex } from "@chakra-ui/react";
import { TravelItem } from "./TravelItem";

export const Travels = () => {
  return (
    <Flex
      w="100vw"
      h="auto"
      direction={['column', 'row']}
      justify="space-around"
      align="center"
      px="4"
      py="8"
      mt="9"
    >
      <TravelItem label="Curta os espetáculos das cidades a noite." text="vida noturna" icon="cocktail.svg" />
      <TravelItem label="Praias lindas para pegar um bom sol." text="praia" icon="surf.svg" />
      <TravelItem label="Lugares modernizados para você e sua família." text="moderno" icon="building.svg" />
      <TravelItem label="Visite os classícos de cada país." text="clássico" icon="museum.svg" />
      <TravelItem label="Muito mais esperando por você." text="e mais..." icon="earth.svg" />
    </Flex>
  );
}