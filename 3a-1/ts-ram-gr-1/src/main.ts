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

button.addEventListener("click", () => {
  console.log("clicked! 🤩", input.value);
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
    console.log({ res });
    return res.json();
  })
  .then((response: CharacterApiResponse) => {
    console.log(response);

    for (const character of response.results) {
      const nameElement = document.createElement("p");

      nameElement.innerText = character.name;

      rootElement.append(nameElement);
    }
  });
