import Profile from "@/screens/application/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, usePathname } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

import Bookshelf from "@/screens/application/Bookshelf";
import FavoriteBooks from "@/screens/application/FavoriteBooks";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import StackNavigatorHomePage from "../stacks/StackNavigatorHomePage";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const navigation = useNavigation();
  const pathName = usePathname();

  // Function to get tab bar style based on current route
  const getTabBarStyle = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route);

    // Define which screens should hide the tab bar
    const hideTabBarScreens = ["Book", "Notifications"];

    // If we're on a screen that should hide tab bar, return none display
    if (routeName && hideTabBarScreens.includes(routeName)) {
      return {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 8,
        display: "none" as const,
      };
    }

    // Default tab bar style
    return {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.6,
      shadowRadius: 4,
      elevation: 8,
      display: "flex" as const,
    };
  };

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
        options={({ route }) => ({
          tabBarStyle: getTabBarStyle(route),
          tabBarIcon: ({ size, color }) => {
            return <Octicons name="home" size={size} color={color} />;
          },
          title: "Home",
        })}
      />
      <Tab.Screen
        name="Bookshelf"
        component={Bookshelf}
        options={({ route }) => ({
          title: "Book",
          tabBarStyle: getTabBarStyle(route),
          tabBarIcon: ({ size, color }) => {
            return <Feather name="book-open" size={size} color={color} />;
          },
        })}
      />
      <Tab.Screen
        name="FavoriteBooks"
        component={FavoriteBooks}
        options={({ route }) => ({
          title: "Favorite",
          tabBarStyle: getTabBarStyle(route),
          tabBarIcon: ({ size, color }) => {
            return <Feather name="heart" size={size} color={color} />;
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({
          tabBarStyle: getTabBarStyle(route),
          tabBarIcon: ({ size, color }) => {
            return (
              <FontAwesome6 name="user-circle" size={size} color={color} />
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
