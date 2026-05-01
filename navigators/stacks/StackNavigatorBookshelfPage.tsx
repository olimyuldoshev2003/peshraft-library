import Bookshelf from "@/screens/application/Bookshelf";
import ReceivedBook from "@/screens/application/ReceivedBook";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";

const StackNavigatorBookshelfPage = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Bookshelf"
        component={Bookshelf}
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

export default StackNavigatorBookshelfPage;

const styles = StyleSheet.create({});
