import Book from "@/screens/application/Book";
import Home from "@/screens/application/Home";
import Notifications from "@/screens/application/Notifications";
import ReceivedBook from "@/screens/application/ReceivedBook";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";

const StackNavigatorHomePage = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          animation: "ios_from_right",
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: true,
          animation: "ios_from_right",
        }}
      />
      <Stack.Screen
        name="Book"
        component={Book}
        options={{
          animation: "ios_from_right",
        }}
      />
      <Stack.Screen
        name="ReceivedBook"
        component={ReceivedBook}
        options={{
          animation: "ios_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorHomePage;

const styles = StyleSheet.create({});
