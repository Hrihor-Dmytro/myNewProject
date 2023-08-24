import React from "react";

import { Text, View } from "react-native";

import { LoginScrean } from "./autchScrean/LoginScrean";
import { RegistrationScreen } from "./autchScrean/RegistrationScreen";

// import { PostScrean } from "./homeScrean/createPostsScreen/createPostScrean";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function PostScrean() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Add!</Text>
    </View>
  );
}

export const useRouter = (isAutch) => {
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
    return (
      <Tabs.Navigator
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;

        //     if (route.name === "Profile") {
        //       iconName = focused ? "person-outline" : "add-outline";
        //     } else if (route.name === "Settings") {
        //       iconName = focused ? "person-outline" : "add-outline";
        //     } else if (route.name === "Add") {
        //       iconName = "add-outline";
        //     }
        //     return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        // })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen name="Settings" component={Settings} />
        <Tabs.Screen name="PostScrean" component={PostScrean} />
        <Tabs.Screen name="Profile" component={Profile} />
      </Tabs.Navigator>
    );
  }
};
