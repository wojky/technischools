type CharacterListItemProps = { key: number; name: string };

export function CharacterListItem({ name }: CharacterListItemProps) {
  return (
    <li>
      <button>{name}</button>
    </li>
  );
}
