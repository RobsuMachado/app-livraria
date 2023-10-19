import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screen/Login";
import CreateUser from "./src/screen/CreateUser";
import FeedBook from "./src/screen/FeedBook";
import FetailBook from "./src/screen/DetailBook";

const stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <stack.Navigator>

        <stack.Screen
          name="Login"
          component={Login}
          options={{ title: "SING IN" }}
        />

        <stack.Screen
          name="CreateUser"
          component={CreateUser}
          options={{ title: "SIND UP" }}
        />

        <stack.Screen
          name="FeedBook"
          component={FeedBook}
          options={{ title: "BOOK LIST" }}
        />

      </stack.Navigator>
    </NavigationContainer>
  )
};