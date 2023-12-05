import { useLoaderData } from "react-router-dom";

export function CharacterDetails() {
  const d = useLoaderData();

  console.log({ d });

  return (
    <>
      Name:
      <img src="" />
    </>
  );
}
