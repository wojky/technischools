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

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((response: CharacterApiResponse) => {
    console.log(response);

    const characterNameElement = document.createElement("p");

    console.log(characterNameElement);

    characterNameElement.innerText = response.results[0].name;

    document.body.append(characterNameElement);
  });
