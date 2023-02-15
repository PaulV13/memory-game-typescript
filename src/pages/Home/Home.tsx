import { Card } from '@/components';
import { Container, Flex, Grid, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Toaster, toast } from 'react-hot-toast';

interface CardProps {
  id: string;
  name: string;
  image: string;
}

interface Props {
  initialCards: Array<CardProps>;
}

function Home({ initialCards }: Props) {
  const [cards, setCards] = useState(initialCards);
  const [matches, setMatches] = useState<Array<string>>([]);
  const [selected, setSelected] = useState<CardProps[]>([]);

  const selectedCard = (id: string) => {
    const card = cards.find((card) => card.id === id);
    if (card) {
      if (selected.length < 2) {
        if (!selected.includes(card) && !matches.includes(card.name)) {
          setSelected([...selected, card]);
        }
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (selected.length === 2) {
        if (selected[0].name === selected[1].name) {
          setMatches([...matches, selected[0].name]);
        }
        setSelected([]);
      }
    }, 500);
  }, [selected]);

  useEffect(() => {
    if (matches.length === cards.length / 2) {
      toast.success('You win!!!', {
        duration: 3000,
        position: 'bottom-center',
        style: {
          backgroundColor: '#28a745',
          color: '#fff'
        }
      });
      confetti();
      setTimeout(() => {
        setMatches([]);
        const newCards = [...cards].sort(() => Math.random() - 0.5);
        setCards(newCards);
      }, 4000);
    }
  }, [matches]);

  return (
    <Container h="100vh">
      <Flex
        flexDirection="column"
        width="100%"
        h="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize={30} fontWeight="bold" mb={4}>
          MEMORY GAME
        </Text>

        <Grid templateColumns="repeat(4, 1fr)" gap={2}>
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                card={card}
                onClick={selectedCard}
                matches={matches}
                selected={selected}
                flipped={matches.includes(card.name) || selected.includes(card)}
              />
            );
          })}
        </Grid>
      </Flex>
      <Toaster />
    </Container>
  );
}

export default Home;
