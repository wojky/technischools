import "./App.css";
import React from "react";
import { CharacterListItem } from "./CharacterListItem";

type Character = { name: string; id: number };

function App() {
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

  const characters: Character[] = [
    {
      id: 1,
      name: "Rick",
    },
    {
      id: 2,
      name: "Morty",
    },
  ];

  // return React.createElement("main", null, [
  //   React.createElement("h1", { className: "" }, "Rick and Morty"),
  //   React.createElement("input", null, null),
  //   React.createElement('span',null, null),
  //   React.createElement("button", { onClick: () => {} }, "Search"),
  //   React.createElement(
  //     "section",
  //     null,
  //     React.createElement(
  //       "ol",
  //       null,
  //       characters.map(({ name, id }) => {
  //         return React.createElement(CharacterListItem, { key: id, name });
  //       })
  //     )
  //   ),
  // ]);

  return (
    <main>
      <h1 className="">Rick and Morty</h1>
      {/* <label htmlFor=""></label> */}
      <input placeholder="Search..." />
      <button onClick={() => {}}>Search</button>
      <select>
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
    </main>
  );
}

export default App;
