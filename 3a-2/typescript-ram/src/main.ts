import "./style.css";

type Character = {
  id: number;
  name: string;
};

type CharacterApiResponse = {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: null;
  };
  results: Character[];
};

const rootElement = document.querySelector("#app") as HTMLDivElement;

console.log(rootElement);

// display h1
const headingElement = document.createElement("h1");
headingElement.innerText = "Rick and Morty";
rootElement.append(headingElement);

// display search input
const inputElement = document.createElement("input");
const searchButtonElement = document.createElement("button");
searchButtonElement.innerText = "Search";

rootElement.append(inputElement, searchButtonElement);

// display character list container
const characterListElement = document.createElement("section");
rootElement.append(characterListElement);

searchButtonElement.addEventListener("click", () => {
  // wyciagnij wartosc inputa
  const characterName = inputElement.value;

  // przygotowac url wedlug dokumetancje api
  // https://rickandmortyapi.com/api/character/?name=rick

  const url =
    "https://rickandmortyapi.com/api/character/?name=" + characterName;

  // wykonać fetcha
  fetch(url)
    .then((res) => res.json())
    .then((response: CharacterApiResponse) => {
      // wyswielitc postaci wyfiltrowane
      characterListElement.innerHTML = "";

      addCharactersToContainer(response.results);
    });
});

// display list
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((response: CharacterApiResponse) => {
    addCharactersToContainer(response.results);
  });

// funckja ma przyjac dwa arugmenty, url oraz searchParams
// zwrocic promise z resultem
function getData() {}

getData("https://rickandmortyapi.com/api/character", { name: "rick" });
getData("https://rickandmortyapi.com/api/episode", { episode: "S01E01" });

function addCharactersToContainer(characters: Character[]) {
  for (const character of characters) {
    const characterNameElement = document.createElement("p");
    console.log(characterNameElement);

    characterNameElement.innerText = character.name;

    characterListElement.append(characterNameElement);
  }
}
