import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import { RootStackParamsList } from "../App";
import { styles } from "./styles/screen-common";

type CharactersScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  "Characters"
>;

export function CharactersScreen(props: CharactersScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Characters goes here! {props.route.params.secret}</Text>

      <Button
        title="Go home"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
    </View>
  );
}
