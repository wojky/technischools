import "./App.css";
import React, { useState } from "react";
import { CharacterListItem } from "./CharacterListItem";

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

export async function getData(
  url: string,
  searchParams?: Record<string, string>
): Promise<any> {
  const sp = new URLSearchParams(searchParams);
  const url2 = new URL(url);

  url2.search = sp.toString();

  const res = await fetch(url2.href);
  return await res.json();
}

function App() {
  console.log("render App");
  const [status, setStatus] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);

  console.log(status);

  const characterStatusList = [
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
  ];

  // const characters: Character[] = [
  //   {
  //     id: 1,
  //     name: "Rick",
  //   },
  //   {
  //     id: 2,
  //     name: "Morty",
  //   },
  // ];

  let selectedStatus = "";

  return (
    <main>
      <h1 className="">Rick and Morty</h1>
      {/* <label htmlFor=""></label> */}
      <input placeholder="Search..." />
      <button onClick={() => {}}>Search</button>
      <select
        onChange={(event) => {
          setStatus(event.target.value);

          getData("https://rickandmortyapi.com/api/character", {
            status: event.target.value,
          }).then((res: CharacterApiResponse) => {
            setCharacters(res.results);
          });
        }}
      >
        {characterStatusList.map((status) => (
          <option key={status.value} value={status.value}>
            {status.innerText}
          </option>
        ))}
      </select>

      <section>
        <ol>
          {characters.map(({ name, id }) => (
            <CharacterListItem key={id} name={name} />
          ))}
        </ol>
      </section>
      {status}
    </main>
  );
}

export default App;
