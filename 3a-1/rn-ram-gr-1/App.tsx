import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/HomeScreen";
import { CharactersScreen } from "./src/CharactersScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type RootStackParamsList = {
  Home: undefined;
  Characters: {
    secret: string;
  };
};

const Stack = createBottomTabNavigator<RootStackParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Characters"
          component={CharactersScreen}
          initialParams={{ secret: "xDDD" }}
        />
        {/* <Stack.Screen name="Episodes" component={CharactersScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
