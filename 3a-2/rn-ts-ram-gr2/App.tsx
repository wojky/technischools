import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/HomeScreen";
import { AnotherScreen } from "./src/AnotherScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

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

type ItemType = "armor" | "bow";

type Item = {
  type: ItemType;
};

const items: Item[] = [
  {
    type: "armor",
  },
  {
    type: "bow",
  },
];

function Items() {
  return items.map((item) => (
    <View>
      {item.type === "armor" && <Text>jestem armorem</Text>}
      {item.type === "bow" && <Text>jestem lukiem</Text>}
    </View>
  ));
}

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
