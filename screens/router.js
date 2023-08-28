import React from "react";

import { LoginScrean } from "./autchScrean/LoginScrean";
import { RegistrationScreen } from "./autchScrean/RegistrationScreen";
import { Home } from "./homeScrean/Home";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const useRouter = (isAutch, onClickLogin) => {
  console.log(onClickLogin);

  if (!isAutch) {
    return (
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
      </Stack.Navigator>
    );
  } else {
    return <Home />;
  }
};
