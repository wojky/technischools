import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button } from "react-native";
import { RootStackParamList } from "../App";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Changed!</Text>
      <Button
        title="Go to Another Screen"
        onPress={() => {
          navigation.navigate("Another");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
