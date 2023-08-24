import React from "react";
import { LoginScrean } from "./screens/loginScreen/LoginScrean";
import { Home } from "./screens/home/Home";
import RegistrationScreen from "./screens/registrationScreen/RegistrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScrean">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScrean}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
