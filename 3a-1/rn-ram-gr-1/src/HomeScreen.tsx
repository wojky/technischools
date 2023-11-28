import { StyleSheet, View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../App";
import { styles } from "./styles/screen-common";

type HomeScreenProps = NativeStackScreenProps<RootStackParamsList, "Home">;

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Rick and Morty wiki!!</Text>

      <Button
        title="Go to characters"
        onPress={() => {
          navigation.navigate("Characters", {
            secret: "Psst",
          });
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
