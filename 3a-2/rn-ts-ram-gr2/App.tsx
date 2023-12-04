import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/HomeScreen";
import { AnotherScreen } from "./src/AnotherScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function createPromise() {
  return Promise.resolve(100);
}

function createPromise2() {
  return Promise.resolve("promise");
}

const x = createPromise();
const y = createPromise2();

type Character = {
  id: number;
  name: string;
  imageUrl: string;
};

type Episode = {
  id: number;
  name: string;
  season: string;
};

const characters: Array<Character> = [];

type ApiResponse<T> = {
  status: number;
  results: T[];
};
// const x = 213

const response = {} as ApiResponse<Character>;

// start here lesson

export type RootStackParamList = {
  Home: undefined;
  Another: undefined;
};

const Stack = createBottomTabNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: "Dom" }}
          component={HomeScreen}
        />
        <Stack.Screen name="Another" component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
