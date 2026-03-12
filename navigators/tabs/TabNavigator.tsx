import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, usePathname } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import StackNavigatorBookshelfPage from "../stacks/StackNavigatorBookshelfPage";
import StackNavigatorFavoritePage from "../stacks/StackNavigatorFavoritePage";
import StackNavigatorHomePage from "../stacks/StackNavigatorHomePage";
import StackNavigatorProfilePage from "../stacks/StackNavigatorProfilePage";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const navigation = useNavigation();
  const pathName = usePathname();

  // Function to get tab bar style based on current route
  const getTabBarStyle = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route);

    // Define which screens should hide the tab bar
    const hideTabBarScreens = [
      "Book",
      "Notifications",
      "ReceivedBook",
      "HistoryBook",
      "EditUser",
      "Feedback",
    ];

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
          title: "Home",
          tabBarStyle: getTabBarStyle(route),
          tabBarIcon: ({ size, color }) => {
            return <Octicons name="home" size={size} color={color} />;
          },
        })}
      />
      <Tab.Screen
        name="BookshelfStack"
        component={StackNavigatorBookshelfPage}
        options={({ route }) => ({
          title: "Book",
          tabBarStyle: getTabBarStyle(route),
          tabBarIcon: ({ size, color }) => {
            return <Feather name="book-open" size={size} color={color} />;
          },
        })}
      />
      <Tab.Screen
        name="FavoriteBooksStack"
        component={StackNavigatorFavoritePage}
        options={({ route }) => ({
          title: "Favorite",
          tabBarStyle: getTabBarStyle(route),
          tabBarIcon: ({ size, color }) => {
            return <Feather name="heart" size={size} color={color} />;
          },
        })}
      />
      <Tab.Screen
        name="ProfileStack"
        component={StackNavigatorProfilePage}
        options={({ route }) => ({
          title: "Profile",
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
