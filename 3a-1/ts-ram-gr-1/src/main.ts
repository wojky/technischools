import { getData } from "./getData";
import { createSelectFilter } from "./selectFilter";
import "./style.css";

const rootElement: HTMLDivElement = document.querySelector(
  "#app"
) as HTMLDivElement;

const heading = document.createElement("h1");

heading.innerText = "Rick and Morty";

rootElement.append(heading);

const input = createSearchInput();

const button = document.createElement("button");
button.innerText = "Search";
rootElement.append(button);

const selectStatusFilter = createSelectFilter([
  {
    innerText: "All",
    value: "",
  },
  {
    innerText: "Dead",
    value: "dead",
  },
  {
    innerText: "Alive",
    value: "alive",
  },
  {
    innerText: "Unknown",
    value: "unknown",
  },
]);

const selectGenderFilters = createSelectFilter([
  {
    innerText: "All",
    value: "",
  },
  {
    innerText: "Male",
    value: "male",
  },
  {
    innerText: "Female",
    value: "female",
  },
  {
    innerText: "Genderless",
    value: "genderless",
  },
  {
    innerText: "Unknown",
    value: "unknown",
  },
]);

rootElement.append(selectStatusFilter, selectGenderFilters);

const characterListElement = document.createElement("section");
rootElement.append(characterListElement);

button.addEventListener("click", () => {
  console.log("clicked! 🤩", input.value, selectStatusFilter.value);

  getData(`https://rickandmortyapi.com/api/character`, {
    name: input.value,
    status: selectStatusFilter.value,
    gender: selectGenderFilters.value,
  }).then((response: CharacterApiResponse) => {
    renderCharacterList(response.results);
  });
});

type Character = { name: string; id: number };

type CharacterApiResponse = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Character[];
};

getData("https://rickandmortyapi.com/api/character").then(
  (response: CharacterApiResponse) => {
    console.log(response);

    renderCharacterList(response.results);
  }
);

function renderCharacterList(list: Character[]) {
  characterListElement.innerHTML = "";

  for (const character of list) {
    const nameElement = document.createElement("p");

    nameElement.innerText = character.name;

    characterListElement.append(nameElement);
  }
}

function createSearchInput() {
  const input = document.createElement("input");
  rootElement.append(input);

  return input;
}
