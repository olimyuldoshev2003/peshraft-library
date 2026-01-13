import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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
          <View style={styles.headerBlock2}>
            <Ionicons
              name="search"
              size={30}
              color="black"
              style={styles.searchIconOpenModal}
            />

            <TextInput
              style={styles.inputOpenModalSearch}
              placeholder="Search Here"
            />
          </View>
          <ScrollView
            contentContainerStyle={styles.headerBlock3ScrollView}
            style={styles.headerBlock3}
            
          >
            <Pressable style={[styles.filterBtn, styles.filterBtnActive]}>
              <Text style={[styles.filterBtnText, styles.filterBtnTextActive]}>
                All
              </Text>
            </Pressable>
            <Pressable style={[styles.filterBtn, styles.filterBtnInactive]}>
              <Text
                style={[styles.filterBtnText, styles.filterBtnTextInactive]}
              >
                Best book
              </Text>
            </Pressable>
            <Pressable style={[styles.filterBtn, styles.filterBtnInactive]}>
              <Text
                style={[styles.filterBtnText, styles.filterBtnTextInactive]}
              >
                Classics
              </Text>
            </Pressable>
            <Pressable style={[styles.filterBtn, styles.filterBtnInactive]}>
              <Text
                style={[styles.filterBtnText, styles.filterBtnTextInactive]}
              >
                Fantasy
              </Text>
            </Pressable>
          </ScrollView>
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
  headerBlock2: {
    marginTop: 10,
    position: "relative",
  },
  searchIconOpenModal: {
    position: "absolute",
    zIndex: 5,
    top: 9.5,
    left: 9.5,
  },
  inputOpenModalSearch: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: "#fff",
    fontSize: 20,
    fontWeight: "600",
    borderRadius: 24,
    paddingLeft: 55,
  },
  headerBlock3ScrollView: {},
  headerBlock3: {
  
  },
  filterBtn: {},
  filterBtnText: {},
  filterBtnActive: {},
  filterBtnTextActive: {},
  filterBtnInactive: {},
  filterBtnTextInactive: {},
  sectionHomeComponent: {},
});
