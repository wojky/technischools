import { getData } from "./getData";
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

// add status filter (select)
const selectStatusElement = document.createElement("select");

["all", "dead", "unknown", "alive"].forEach((status) => {
  const option = document.createElement("option");

  option.innerText = status;
  option.value = status === "all" ? "" : status;

  selectStatusElement.append(option);
});
rootElement.append(selectStatusElement);

selectStatusElement.addEventListener("change", () => {
  console.log("😁");

  console.log(selectStatusElement.value);

  getData("https://rickandmortyapi.com/api/character", {
    status: selectStatusElement.value,
  }).then((response: CharacterApiResponse) => {
    // wyswielitc postaci wyfiltrowane
    characterListElement.innerHTML = "";

    addCharactersToContainer(response.results);
  });
});

// display character list container
const characterListElement = document.createElement("section");
rootElement.append(characterListElement);

searchButtonElement.addEventListener("click", () => {
  // wyciagnij wartosc inputa
  const characterName = inputElement.value;

  getData("https://rickandmortyapi.com/api/character", {
    name: characterName,
  }).then((response: CharacterApiResponse) => {
    // wyswielitc postaci wyfiltrowane
    characterListElement.innerHTML = "";

    addCharactersToContainer(response.results);
  });
});

// display list
getData("https://rickandmortyapi.com/api/character").then(
  (response: CharacterApiResponse) => {
    addCharactersToContainer(response.results);
  }
);

function addCharactersToContainer(characters: Character[]) {
  for (const character of characters) {
    const characterNameElement = document.createElement("p");
    console.log(characterNameElement);

    characterNameElement.innerText = character.name;

    characterListElement.append(characterNameElement);
  }
}
