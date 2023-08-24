import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

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
function Add() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Add!</Text>
    </View>
  );
}

const Tabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Profile") {
            iconName = "add-outline";
          }
          if (route.name === "Settings") {
            iconName = "add-outline";
          }
          if (route.name === "Add") {
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
<ion-icon name="alert-circle-outline"></ion-icon>;
<ion-icon name="person-outline"></ion-icon>;
<ion-icon name="grid-outline"></ion-icon>;
