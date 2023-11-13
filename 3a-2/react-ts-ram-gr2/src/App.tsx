import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";

export type Character = {
  id: number;
  name: string;
};

function App() {
  const [currentSelectedStatus, setCurrentSelectedStatus] = useState("");
  const [name, setName] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState("");

  const charactersStatusList = ["all", "dead", "unknown", "alive"];

  console.log({ search, name, currentSelectedStatus });

  useEffect(() => {
    console.log("gererhvjker");

    fetch(
      `https://rickandmortyapi.com/api/character?name=${name}&status=${currentSelectedStatus}`
    )
      .then((response) => {
        return response.json();
      })
      .then((response: { results: Character[] }) => {
        setCharacters(response.results);
      });
  }, [currentSelectedStatus, name]);

  return (
    <div>
      <h1>Rick and Morty</h1>
      <label htmlFor="search-input">Szukajka</label>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        id="search-input"
        placeholder="search"
      />
      <button
        onClick={() => {
          setName(search);
        }}
        className=""
      >
        Search
      </button>
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
