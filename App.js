import React from "react";
import { LoginScrean } from "./screens/loginScreen/LoginScrean";
import RegistrationScreen from "./screens/registrationScreen/RegistrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegistrationScreen">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScrean} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
