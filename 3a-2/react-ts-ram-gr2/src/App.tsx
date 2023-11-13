import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";

export type Character = {
  id: number;
  name: string;
};

function App() {
  const [currentSelectedStatus, setCurrentSelectedStatus] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);

  const charactersStatusList = ["all", "dead", "unknown", "alive"];

  console.log({ currentSelectedStatusOnFnBody: currentSelectedStatus });

  useEffect(() => {
    console.log("gererhvjker");

    fetch(
      "https://rickandmortyapi.com/api/character?status=" +
        currentSelectedStatus
    )
      .then((response) => {
        return response.json();
      })
      .then((response: { results: Character[] }) => {
        setCharacters(response.results);
      });
  }, [currentSelectedStatus]);

  return (
    <div>
      <h1>Rick and Morty</h1>
      <label htmlFor="search-input">Szukajka</label>
      <input id="search-input" placeholder="search" />
      <button className="">Search</button>
      <video></video>
      <select
        onChange={(e) => {
          setCurrentSelectedStatus(e.target.value);
        }}
      >
        {charactersStatusList.map((status) => (
          <option key={status} value={status === "all" ? "" : status}>
            {status}
          </option>
        ))}
      </select>
      <br />
      <CharacterList list={characters} />
      Aktualny status: {currentSelectedStatus}
    </div>
  );
}

export default App;
