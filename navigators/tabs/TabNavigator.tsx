import Book from "@/screens/application/Books";
import Profile from "@/screens/application/Profile";
import Save from "@/screens/application/Save";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, usePathname } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import StackNavigatorHomePage from "../stacks/StackNavigatorHomePage";
import Books from "@/screens/application/Books";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const navigation = useNavigation();
  const pathName = usePathname();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#7EC7EC",
        tabBarInactiveTintColor: "#939393",
        tabBarIconStyle: {},
        tabBarLabelStyle: {
          fontSize: 18,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={StackNavigatorHomePage}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Octicons name="home" size={size} color={color} />;
          },
          title: "Home",
        }}
      />
      <Tab.Screen
        name="Books"
        component={Books}
        options={{
          title: "Book",
          tabBarIcon: ({ size, color }) => {
            return <Feather name="book-open" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Save"
        component={Save}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Ionicons name="bookmark-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <FontAwesome6 name="user-circle" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
