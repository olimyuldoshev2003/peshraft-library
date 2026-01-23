import TabNavigator from "@/navigators/tabs/TabNavigator";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";

const App = () => {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default App;

const styles = StyleSheet.create({});
