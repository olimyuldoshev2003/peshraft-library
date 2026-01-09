import SignIn from "@/screens/auth/SignIn";
import SignUp from "@/screens/auth/SignUp";
import IntroductionAboutBook from "@/screens/introduction/IntroductionAboutBook";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import StackNavigatorIntroduction from "./StackNavigatorIntroduction";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          animation: "ios_from_right",
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          animation: "ios_from_right",
        }}
      />
      <Stack.Screen
        name="Introduction"
        component={StackNavigatorIntroduction}
        options={{
          animation: "ios_from_right",
        }}
      />
      
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
