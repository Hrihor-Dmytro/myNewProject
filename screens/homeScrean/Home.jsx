import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Add } from "./createPostsScreen/createPostScrean";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused ? "person-outline" : "add-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "person-outline" : "add-outline";
          } else if (route.name === "Add") {
            iconName = "add-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Settings" component={Settings} />
      <Tabs.Screen name="Add" component={Add} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};
