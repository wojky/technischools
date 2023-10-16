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

searchButtonElement.addEventListener("click", () => {
  console.log(inputElement.value);
});

// display list
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((response: CharacterApiResponse) => {
    console.log(response);

    for (const character of response.results) {
      const characterNameElement = document.createElement("p");
      console.log(characterNameElement);

      characterNameElement.innerText = character.name;

      rootElement.append(characterNameElement);
    }
  });
