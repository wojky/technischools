import { Character } from "../App";

function CharacterList(props: { list: Character[] }) {
  return (
    <ol>
      {props.list.map((character) => (
        <li key={character.id}>
          <button>{character.name}</button>
        </li>
      ))}
    </ol>
  );
}

export default CharacterList;
