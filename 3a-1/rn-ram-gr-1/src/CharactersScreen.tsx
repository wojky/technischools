import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import { RootStackParamsList } from "../App";
import { styles } from "./styles/screen-common";
import { useEffect, useState } from "react";

type CharactersScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  "Characters"
>;

type Character = {
  id: number;
  name: string;
};

export function CharactersScreen(props: CharactersScreenProps) {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character") // character -> episode
      .then((res) => res.json())
      .then((res: { results: Character[] }) => {
        setCharacters(res.results);
        console.log(res.results.length);
      })
      .catch();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Characters goes here! {props.route.params.secret}</Text>

      {characters.map((character) => (
        <Text key={character.id}>{character.name}</Text>
      ))}

      <Button
        title="Go home"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
    </View>
  );
}
