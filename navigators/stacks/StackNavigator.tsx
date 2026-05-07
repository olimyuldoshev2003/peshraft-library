import { useAuth } from "@/context/AuthContext";
import SignIn from "@/screens/auth/SignIn";
import SignUp from "@/screens/auth/SignUp";
import { getIsSignedUpUser } from "@/utils/token";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import TabNavigator from "../tabs/TabNavigator";
import StackNavigatorIntroduction from "./StackNavigatorIntroduction";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { token, loading } = useAuth();

  const [isUserSignedUp, setIsUserSignedUp] = useState<boolean | null>(null);

  // 🔥 Reload when token changes
  useEffect(() => {
    const loadStatus = async () => {
      const result = await getIsSignedUpUser();
      setIsUserSignedUp(result);
    };

    if (token) {
      loadStatus();
    } else {
      setIsUserSignedUp(null);
    }
  }, [token]);

  // 🔄 Global loading
  if (loading || (token && isUserSignedUp === null)) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00A9FF" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!token ? (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ animation: "ios_from_right" }}
          />

          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ animation: "ios_from_right" }}
          />
        </>
      ) : isUserSignedUp ? (
        <Stack.Screen
          name="Introduction"
          component={StackNavigatorIntroduction}
          options={{ animation: "ios_from_right" }}
        />
      ) : (
        <Stack.Screen
          name="Application"
          component={TabNavigator}
          options={{ animation: "ios_from_right" }}
        />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
