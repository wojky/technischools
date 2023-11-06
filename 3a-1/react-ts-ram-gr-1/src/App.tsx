import "./App.css";
import { CharacterListItem } from "./CharacterListItem";

type Character = { name: string; id: number };

function App() {
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

  return (
    <main>
      <h1>Rick and Morty</h1>

      <input />
      <button onClick={() => {}}>Search</button>

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
