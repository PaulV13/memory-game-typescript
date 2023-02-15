import { Box, GridItem, Image } from '@chakra-ui/react';
import { useState } from 'react';
import cardBack from '@/assets/back-card.png';

import './Card.css';

interface CardProp {
  id: string;
  name: string;
  image: string;
}

interface Props {
  card: CardProp;
  matches: Array<string>;
  selected: Array<CardProp>;
  onClick: (id: string) => void;
  flipped: boolean;
}

function Card({ card, onClick, matches, selected, flipped }: Props) {
  const selectedCard = () => {
    onClick(card.id);
  };

  return (
    <GridItem width="100px" height="150px" onClick={() => selectedCard()}>
      <Box
        className={`card-container ${flipped ? 'flipped' : ''}`}
        borderRadius={4}
      >
        <Box
          className="front"
          w="100%"
          backgroundColor="gray.100"
          borderRadius={4}
        >
          <Image src={card.image} alt={card.name} width="80%" />
        </Box>
        <Box
          className="back"
          w="100%"
          backgroundColor="gray.100"
          borderRadius={4}
        >
          <Image src={cardBack} alt={card.name} h="100%" />
        </Box>
      </Box>
    </GridItem>
  );
}

export default Card;
