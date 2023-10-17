import "./style.css";

const rootElement: HTMLDivElement = document.querySelector(
  "#app"
) as HTMLDivElement;

const heading = document.createElement("h1");

heading.innerText = "Rick and Morty";

rootElement.append(heading);

const input = document.createElement("input");
rootElement.append(input);

const button = document.createElement("button");
button.innerText = "Search";
rootElement.append(button);

const characterListElement = document.createElement("section");
rootElement.append(characterListElement);

button.addEventListener("click", () => {
  console.log("clicked! 🤩", input.value);

  fetch(`https://rickandmortyapi.com/api/character/?name=${input.value}`)
    .then((res) => res.json())
    .then((response: CharacterApiResponse) => {
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

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => {
    return res.json();
  })
  .then((response: CharacterApiResponse) => {
    console.log(response);

    renderCharacterList(response.results);
  });

function renderCharacterList(list: Character[]) {
  characterListElement.innerHTML = "";

  for (const character of list) {
    const nameElement = document.createElement("p");

    nameElement.innerText = character.name;

    characterListElement.append(nameElement);
  }
}

function getData() {}
