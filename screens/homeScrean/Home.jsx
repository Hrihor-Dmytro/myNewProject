import React from "react";

import { PostScrean } from "./postsScreen/PostScrean.jsx";
import { Profile } from "./profileScreen/Profile";
import { Add } from "./createPostsScreen/createPostScrean";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused ? "person-outline" : "person";
          } else if (route.name === "Settings") {
            iconName = focused ? "apps" : "apps";
          } else if (route.name === "PostScrean") {
            iconName = focused ? "add-outline" : "add";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <Tabs.Screen
        options={{ headerShown: false }}
        name="Settings"
        component={PostScrean}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
        name="PostScrean"
        component={Add}
      />
      <Tabs.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
    </Tabs.Navigator>
  );
};
