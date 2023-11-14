import { useState } from "react";

type SearchBoxProps = {
  handleClick: (value: string) => void;
};

export function SearchBox(props: SearchBoxProps) {
  const [nameInput, setNameInput] = useState("");

  return (
    <>
      <input
        onChange={(e) => {
          setNameInput(e.target.value);
        }}
        placeholder="Search..."
      />
      <button
        onClick={() => {
          props.handleClick(nameInput);
        }}
      >
        Search
      </button>
    </>
  );
}
