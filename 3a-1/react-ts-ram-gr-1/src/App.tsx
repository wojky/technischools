import "./App.css";
import React, { useEffect, useState } from "react";
import { CharacterListItem } from "./CharacterListItem";
import { SearchBox } from "./SearchBox";

// function Blanfwe(props: { onCostam: (id: number) => void }) {
//   return (
//     <button
//       onClick={() => {
//         props.onCostam(213);
//       }}
//     ></button>
//   );
// }

// function Rodzic() {
//   return (
//     <Blanfwe
//       onCostam={(dane: number) => {
//         console.log(dane);
//       }}
//     />
//   );
// }

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
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getData("https://rickandmortyapi.com/api/character", {
      name: searchTerm,
      status,
    }).then((res: CharacterApiResponse) => {
      setCharacters(res.results);
    });
  }, [status, searchTerm]);

  console.log(searchTerm);

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

  return (
    <main>
      <h1 className="">Rick and Morty</h1>
      {/* <label htmlFor=""></label> */}
      <SearchBox
        handleClick={(value) => {
          setSearchTerm(value);
        }}
      />
      <select
        onChange={(event) => {
          setStatus(event.target.value);
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
