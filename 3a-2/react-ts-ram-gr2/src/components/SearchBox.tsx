import { useState } from "react";

function SearchBox(props: { handleClick: (inputValue: string) => void }) {
  const [search, setSearch] = useState("");

  return (
    <>
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
          props.handleClick(search);
        }}
        className=""
      >
        Search
      </button>
    </>
  );
}

export default SearchBox;
