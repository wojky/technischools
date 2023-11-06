import { useState } from "react";
import "./App.css";

type Character = {
  id: number;
  name: string;
};

function App() {
  const [currentSelectedStatus, setCurrentSelectedStatus] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);

  const charactersStatusList = ["all", "dead", "unknown", "alive"];

  console.log({ currentSelectedStatusOnFnBody: currentSelectedStatus });
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

          console.log({ currentSelectedStatus });
        }}
      >
        {charactersStatusList.map((status) => (
          <option key={status} value={status === "all" ? "" : status}>
            {status}
          </option>
        ))}
      </select>
      <br />
      Aktualny status: {currentSelectedStatus}
    </div>
  );
}

export default App;
