import {Character} from "../App"

function CharacterList(props: { characters: Character[] }) {
    return (
        <ol>
            {props.characters.map((character) => (<li key={character.id}>
                <button>{character.name}</button>
            </li>))}
        </ol>
    );
}

export default CharacterList;