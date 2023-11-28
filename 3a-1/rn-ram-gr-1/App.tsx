import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/HomeScreen";
import { CharactersScreen } from "./src/CharactersScreen";

export type RootStackParamsList = {
  Home: undefined;
  Characters: {
    secret: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Characters" component={CharactersScreen} />
        {/* <Stack.Screen name="Episodes" component={CharactersScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
