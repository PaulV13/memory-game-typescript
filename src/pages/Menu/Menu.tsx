import {
  Box,
  Card,
  Center,
  Container,
  Flex,
  Image,
  Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import premierLeague from '../../assets/premier.png';
import pokemon from '../../assets/pokemon.png';

function Menu() {
  return (
    <Container>
      <Center p={30}>
        <Text fontSize={24} fontWeight="bold">
          Seleccione uno:{' '}
        </Text>
      </Center>
      <Flex mt={5} justifyContent="center">
        <Link to="/futbol">
          <Card
            bg="#9c9ce3"
            w="120px"
            h="120px"
            justifyContent="center"
            alignItems="center"
            m={4}
            p={2}
            boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.5)"
            _hover={{
              bg: '#d0d0e9'
            }}
          >
            <Image src={premierLeague} alt="" />
          </Card>
        </Link>

        <Link to="/pokemons">
          <Card
            bg="#9c9ce3"
            w="120px"
            h="120px"
            justifyContent="center"
            alignItems="center"
            m={4}
            p={2}
            boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.5)"
            _hover={{
              bg: '#d0d0e9'
            }}
          >
            <Image src={pokemon} alt="" />
          </Card>
        </Link>
      </Flex>
    </Container>
  );
}

export default Menu;
