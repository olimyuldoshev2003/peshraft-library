import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.homeComponent}>
      <View style={styles.homeComponentBlock}>
        <View style={styles.headerHomeComponent}>
          <View style={styles.headerBlock1}>
            <View style={styles.logoAndAppNameBlock}>
              <Image
                source={require("../../assets/peshraft-library/introduction/Logo.png")}
                style={styles.logo}
              />
              <Text style={styles.nameOfApp}>Peshraft Library</Text>
            </View>
            <MaterialIcons name="notifications-none" size={41} color="black" />
          </View>
          <View style={styles.headerBlock2}></View>
          <View style={styles.headerBlock3}></View>
        </View>
        <View style={styles.sectionHomeComponent}></View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  homeComponentBlock: {},
  headerHomeComponent: {
    paddingTop: 45,
    paddingHorizontal: 10,
  },
  sectionHomeComponent: {},
  headerBlock1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoAndAppNameBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  logo: {},
  nameOfApp: {
    color: "#7EC7EC",
    fontSize: 26,
    fontWeight: "400",
  },
  headerBlock2: {},
  headerBlock3: {},
});
