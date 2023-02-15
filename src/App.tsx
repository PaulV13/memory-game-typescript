import { Home, Menu } from './pages';
import { Routes, Route } from 'react-router-dom';
import getImagesFutbol from './getImagesFutbol';
import getImagePokemons from './getImagePokemons';

import './App.css';

function App() {
  const CARDS_INITIAL_STATE_FUTBOL = [
    {
      id: '1',
      name: 'Arsenal',
      image: getImagesFutbol.arsenal
    },
    {
      id: '2',
      name: 'Chelsea',
      image: getImagesFutbol.chelsea
    },
    {
      id: '3',
      name: 'Manchester City',
      image: getImagesFutbol.manchesterCity
    },
    {
      id: '4',
      name: 'Manchester United',
      image: getImagesFutbol.manchesterUnited
    },
    {
      id: '5',
      name: 'Liverpool',
      image: getImagesFutbol.liverpool
    },
    {
      id: '6',
      name: 'Newcastle',
      image: getImagesFutbol.newcastle
    },
    {
      id: '7',
      name: 'Tottenham',
      image: getImagesFutbol.tottenham
    },
    {
      id: '8',
      name: 'Everton',
      image: getImagesFutbol.everton
    }
  ]
    .flatMap((card) => [
      card,
      { id: card.id + 1, name: card.name, image: card.image }
    ])
    .sort(() => Math.random() - 0.5);

  const CARDS_INITIAL_STATE_POKEMON = [
    {
      id: '1',
      name: 'Pikachu',
      image: getImagePokemons.pikachu
    },
    {
      id: '2',
      name: 'Charmander',
      image: getImagePokemons.charmander
    },
    {
      id: '3',
      name: 'Rattata',
      image: getImagePokemons.rattata
    },
    {
      id: '4',
      name: 'Bulbasaur',
      image: getImagePokemons.bulbasaur
    },
    {
      id: '5',
      name: 'Weedle',
      image: getImagePokemons.weedle
    },
    {
      id: '6',
      name: 'Squirtle',
      image: getImagePokemons.squirtle
    },
    {
      id: '7',
      name: 'Ekans',
      image: getImagePokemons.ekans
    },
    {
      id: '8',
      name: 'Pigey',
      image: getImagePokemons.pidgey
    }
  ]
    .flatMap((card) => [
      card,
      { id: card.id + 1, name: card.name, image: card.image }
    ])
    .sort(() => Math.random() - 0.5);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route
          path="futbol"
          element={<Home initialCards={CARDS_INITIAL_STATE_FUTBOL} />}
        />
        <Route
          path="pokemons"
          element={<Home initialCards={CARDS_INITIAL_STATE_POKEMON} />}
        />
      </Routes>
    </div>
  );
}

export default App;
