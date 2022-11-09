const poke = {
  abilities: [ 
    {
      ability: {
        name: "cute-charm",
        url: "https://pokeapi.co/api/v2/ability/56/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "competitive",
        url: "https://pokeapi.co/api/v2/ability/172/",
      },
      is_hidden: false,
      slot: 2,
    },
    {
      ability: {
        name: "frisk",
        url: "https://pokeapi.co/api/v2/ability/119/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  species: {
    name: "wigglytuff",
    url: "https://pokeapi.co/api/v2/pokemon-species/40/",
  },
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/40.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/40.png",
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",
        front_female: null,
      },
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/40.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/40.png",
        front_shiny_female: null,
      },
      "official-artwork": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
      },
    },
  },
};
