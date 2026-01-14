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
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
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
        <ScrollView
          contentContainerStyle={styles.sectionHomeComponentScrollView}
          style={styles.sectionHomeComponent}
        >
          <View style={styles.receivedBooks}>
            <Text style={styles.receivedBookTitle}>Received books</Text>
            <ScrollView
              contentContainerStyle={styles.receivedBooksBlockScrollView}
              style={styles.receivedBooksBlock}
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {/* Received Book 1 */}
              <View style={styles.receivedBookContainer}>
                <View style={styles.receivedBookContainerBlock1}>
                  <Image
                    source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                    style={styles.imgReceivedBook}
                  />
                </View>
                <View style={styles.receivedBookContainerBlock2}>
                  <View style={styles.receivedBookTextBlock}>
                    <Text style={styles.receivedBookName}></Text>
                    <Text style={styles.receivedBookAuthor}></Text>
                  </View>
                  
                </View>
              </View>

              {/* Received Book 2 */}
              {/* Received Book 3 */}
            </ScrollView>
          </View>
          <View style={styles.allBooks}>
            <Text style={styles.allBooksTitle}>All books</Text>
            <View style={styles.allBooksBlock}></View>
          </View>
        </ScrollView>
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
  headerBlock3ScrollView: {
    marginTop: 10,
    gap: 10,
  },
  headerBlock3: {},
  filterBtn: {
    paddingVertical: 3,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  filterBtnText: {
    fontSize: 18,
    fontWeight: "400",
  },
  filterBtnActive: {
    backgroundColor: "#7EC7EC",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  filterBtnTextActive: {
    color: "#fff",
  },
  filterBtnInactive: {
    borderWidth: 1,
    borderColor: "#939393",
  },
  filterBtnTextInactive: {
    color: "#939393",
  },
  sectionHomeComponent: {},
  sectionHomeComponentScrollView: {},
  receivedBooks: {},
  receivedBookTitle: {},
  receivedBooksBlockScrollView: {},
  receivedBooksBlock: {},
  receivedBookContainer: {},
  receivedBookContainerBlock1: {},
  imgReceivedBook: {},
  receivedBookContainerBlock2: {},
  receivedBookTextBlock: {},
  receivedBookName:{},
  receivedBookAuthor:{},
  allBooks: {},
  allBooksTitle: {},
  allBooksBlock: {},
});
