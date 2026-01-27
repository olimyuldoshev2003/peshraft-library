import React from "react";
import { StyleSheet } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import Duetime from "./Duetime";
import News from "./News";

const Notifications = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Duetime" component={Duetime} />
          <Tab.Screen name="News" component={News} />
        </Tab.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
