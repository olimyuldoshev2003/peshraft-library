import Book from "@/screens/application/Book";
import EditUser from "@/screens/application/EditUser";
import Feedback from "@/screens/application/Feedback";
import HistoryBook from "@/screens/application/HistoryBook";
import Profile from "@/screens/application/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";

const StackNavigatorProfilePage = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="HistoryBook" component={HistoryBook} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="EditUser" component={EditUser} />
      <Stack.Screen name="Feedback" component={Feedback} />
    </Stack.Navigator>
  );
};

export default StackNavigatorProfilePage;

const styles = StyleSheet.create({});
