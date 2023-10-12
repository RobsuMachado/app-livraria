import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import login from "./src/screen/login";
import createUser from "./src/screen/createUser";
import feedBooks from "./src/screen/feedBook";
import detailBook from "./src/screen/detailBook";

const stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <stack.Navigator>

      <stack.Screen
      name="login"
      component={login}
      options={{title:"SING IN"}}
      />

<stack.Screen
      name="createUser"
      component={createUser}
      options={{title:"SIND UP"}}
      />

      </stack.Navigator>
    </NavigationContainer>
  )
};