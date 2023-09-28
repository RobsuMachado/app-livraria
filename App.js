import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import login from "./screen/login";
import createUser from "./screen/createUser";
import feedBooks from "./screen/feedBook";
import detailBook from "./screen/detailBook";

const stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <stack.Navigator>

      <stack.Screen
      name="login"
      component={login}
      options={{title:"SING IN   |   SING UP"}}
      />

      </stack.Navigator>
    </NavigationContainer>
  )
};