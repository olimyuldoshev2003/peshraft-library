import { AuthProvider } from "@/context/AuthContext";
import StackNavigator from "@/navigators/stacks/StackNavigator";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";

const App = () => {
  return (
    <NavigationIndependentTree>
      <AuthProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </AuthProvider>
    </NavigationIndependentTree>
  );
};

export default App;

const styles = StyleSheet.create({});
