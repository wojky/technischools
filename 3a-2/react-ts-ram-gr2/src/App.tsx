import {useEffect, useState} from "react";
import "./App.css";
import CharacterList from "./components/CharacterList.tsx";

type Character = {
    id: number; name: string;
};

function App() {
    const [currentSelectedStatus, setCurrentSelectedStatus] = useState("");
    const [characters, setCharacters] = useState<Character[]>([]);

    const charactersStatusList = ["all", "dead", "unknown", "alive"];

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character?status=" + currentSelectedStatus)
            .then((response) => {
                return response.json()
            })
            .then((response: { results: Character[] }) => {
                setCharacters(response.results);
            })
    }, [currentSelectedStatus]);
    // console.log({currentSelectedStatusOnFnBody: currentSelectedStatus});
    return (<div>
        <h1>Rick and Morty</h1>
        <label htmlFor="search-input">Szukajka</label>
        <input id="search-input" placeholder="search"/>
        <button className="">Search</button>
        <video></video>
        <select
            onChange={(e) => {
                setCurrentSelectedStatus(e.target.value);
            }}>
            {charactersStatusList.map((status) => (
                <option key={status} value={status === "all" ? "" : status}>{status}</option>))}
        </select>
        <br/>
        <p>Aktualny status: {currentSelectedStatus}</p>
        <CharacterList characters={characters}/>

    </div>);
}

export default App;
