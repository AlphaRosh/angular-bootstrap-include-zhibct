export interface Hero {
  id: number;
  heroname: string;
  realname: string;
  abilities: string;
  League: string;
  Universe: string;
}

export const Heros: Hero[] = [
  {
    id: 1,
    heroname: 'Superman',
    realname: 'Clark Kent',
    abilities: 'Flying, Invinicibility , Laser Eyes',
    League: 'Justice League',
    Universe: 'DC'
  },
  {
    id: 2,
    heroname: 'Batman',
    realname: 'Bruce Wayne',
    abilities: 'Intelligent, Fearless,SuperCool Gadgets',
    League: 'Justice League',
    Universe: 'DC'
  },
  {
    id: 3,
    heroname: 'Wonder Woman',
    realname: 'Princess Diana',
    abilities:
      'Super-strength ,Very high mental and physical abilities,Resistance to fire,Telescopic vision and superhearing',

    League: 'Justice League',
    Universe: 'DC'
  },
  {
    id: 4,
    heroname: 'Flash',
    realname: 'Barry Allen',
    abilities:
      'Ability to run faster than light,  Time-traveling ability, Can move through dimensions by vibrating his molecules',

    League: 'Justice League',
    Universe: 'DC'
  },
  {
    id: 5,
    heroname: 'Green Lantern',
    realname: 'Hal Jordan',
    abilities:
      'Flight , Ability to create and control constructs through his mind',

    League: 'Justice League',
    Universe: 'DC'
  },
  {
    id: 6,
    heroname: 'Aquaman',
    realname: 'Orin / Arthur Curry',
    abilities:
      'Ability to communicate with marine life telepathically,Super-speed,Super-strength',

    League: 'Justice League',
    Universe: 'DC'
  },
  {
    id: 7,
    heroname: 'Captain America',
    realname: 'Steve Rogers',
    abilities:
      'Strength, agility, stamina, healing ability, expert tactician, martial artist, indestructible shield.',

    League: 'Avengers',
    Universe: 'Marvel'
  },
  {
    id: 8,
    heroname: 'Iron Man',
    realname: 'Anthony Edward “Tony” Stark',
    abilities:
      'Genius-level intellect, multiple powered armor suits, ability to fly.',

    League: 'Avengers',
    Universe: 'Marvel'
  },
  {
    id: 9,
    heroname: 'Hulk',
    realname: 'Bruce Banner',
    abilities:
      'Strength, speed, stamina, durability, regeneration, nigh invulnerability, breathing underwater.',

    League: 'Avengers',
    Universe: 'Marvel'
  },
  {
    id: 10,
    heroname: 'God of Thunder',
    realname: 'Thor',
    abilities:
      'Strength, speed, stamina, durability, weather manipulation, flight (via Mjolnir), dense skin and bones with a resistance to injury.',

    League: 'Avengers',
    Universe: 'Marvel'
  }
];
