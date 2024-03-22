import { Character } from './char';

export const getCharacters = async (): Promise<Character[]> => [
  {
    name: 'Joffrey',
    house: 'Baratheon',
    age: 18,
    isAlive: true,
    type: 'king',
    message: 'Vais a morir todos',
    yearsReigning: 3,
  },
  {
    name: 'Jaime',
    house: 'Lannister',
    age: 35,
    isAlive: true,
    type: 'fighter',
    message: 'Primero pego y luego pregunto',
    weapon: 'sword',
    skillsRange: 7,
  },
  {
    name: 'Daenerys',
    house: 'Targaryen',
    age: 25,
    isAlive: true,
    type: 'fighter',
    message: 'Primero pego y luego pregunto',
    weapon: 'dragon',
    skillsRange: 10,
  },
  {
    name: 'Tyrion',
    house: 'Lannister',
    age: 30,
    isAlive: true,
    type: 'counselor',
    message: 'No sé por qué, pero creo que voy a morir pronto',
    lord: 'fighter',
  },
  {
    name: 'Bronn',
    house: 'Lannister',
    age: 35,
    isAlive: true,
    type: 'squire',
    message: 'Soy un loser',
    master: 'fighter',
    serverRange: 9,
  },
];
