document.body.style.background = "#000";

// 1. Create a variable (or a function that returns) an array of ability names.
const abilities = poke.abilities.map((obj) => obj.ability.name);

// 2. Create a variable that target the species name of the pokemon
const pokeName = poke.species.name;

// 3. Create a variable that targets the "official artwork url" of the pokemon. That variable should be called pokePic. 
const pokePic = poke.sprites.other["official-artwork"].front_default;


// Once you have successfully targeted the name and url, uncomment the lines of code below!!

// const imgTag = document.createElement("img");
// imgTag.src = pokePic;
// imgTag.alt = `${pokeName} pic`;
// imgTag.style.height = "255px";

// const nameEl = document.createElement('h2')
// nameEl.innerText = pokeName
// nameEl.className = "poke-name"


// const ul = document.createElement("ul")

// for(let ability of abilities ) {
//   const li = document.createElement("li")
//   li.innerText = ability
//   ul.append(li)
// }

// document.body.append(imgTag, nameEl, ul);
