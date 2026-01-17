import FontAwesome from "@expo/vector-icons/FontAwesome";
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

const Home = () => (
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
            <Text style={[styles.filterBtnText, styles.filterBtnTextInactive]}>
              Best book
            </Text>
          </Pressable>
          <Pressable style={[styles.filterBtn, styles.filterBtnInactive]}>
            <Text style={[styles.filterBtnText, styles.filterBtnTextInactive]}>
              Classics
            </Text>
          </Pressable>
          <Pressable style={[styles.filterBtn, styles.filterBtnInactive]}>
            <Text style={[styles.filterBtnText, styles.filterBtnTextInactive]}>
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
                  <Text style={styles.receivedBookName}>TOJIKON</Text>
                  <Text style={styles.receivedBookAuthor}>Bobojon Gafurov</Text>
                </View>
                <View style={styles.receivedBookLeftDaysWithRangeAndText}>
                  <View
                    style={[styles.receivedBookLeftDaysWithRangeFullDaysBlock]}
                  >
                    <View
                      style={[
                        styles.receivedBookLeftDaysWithRangeLeftDaysBlock,
                        { width: "60%" },
                      ]}
                    ></View>
                  </View>
                  <Text style={styles.receivedBookLeftDays}>5 days left</Text>
                </View>
                <View style={styles.receivedBookStatus}>
                  <Text style={styles.receivedBookStatusText}>
                    Received rejection
                  </Text>
                </View>
              </View>
            </View>

            {/* Received Book 2 */}
            <View style={styles.receivedBookContainer}>
              <View style={styles.receivedBookContainerBlock1}>
                <Image
                  source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  style={styles.imgReceivedBook}
                />
              </View>
              <View style={styles.receivedBookContainerBlock2}>
                <View style={styles.receivedBookTextBlock}>
                  <Text style={styles.receivedBookName}>TOJIKON</Text>
                  <Text style={styles.receivedBookAuthor}>Bobojon Gafurov</Text>
                </View>
                <View style={styles.receivedBookLeftDaysWithRangeAndText}>
                  <View
                    style={[styles.receivedBookLeftDaysWithRangeFullDaysBlock]}
                  >
                    <View
                      style={[
                        styles.receivedBookLeftDaysWithRangeLeftDaysBlock,
                        { width: "30%" },
                      ]}
                    ></View>
                  </View>
                  <Text style={styles.receivedBookLeftDays}>5 days left</Text>
                </View>
                <View style={styles.receivedBookStatus}>
                  <Text style={styles.receivedBookStatusText}>
                    Received rejection
                  </Text>
                </View>
              </View>
            </View>

            {/* Received Book 3 */}
            <View style={styles.receivedBookContainer}>
              <View style={styles.receivedBookContainerBlock1}>
                <Image
                  source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  style={styles.imgReceivedBook}
                />
              </View>
              <View style={styles.receivedBookContainerBlock2}>
                <View style={styles.receivedBookTextBlock}>
                  <Text style={styles.receivedBookName}>TOJIKON</Text>
                  <Text style={styles.receivedBookAuthor}>Bobojon Gafurov</Text>
                </View>
                <View style={styles.receivedBookLeftDaysWithRangeAndText}>
                  <View
                    style={[styles.receivedBookLeftDaysWithRangeFullDaysBlock]}
                  >
                    <View
                      style={[
                        styles.receivedBookLeftDaysWithRangeLeftDaysBlock,
                        { width: `${50}%` },
                      ]}
                    ></View>
                  </View>
                  <Text style={styles.receivedBookLeftDays}>5 days left</Text>
                </View>
                <View style={styles.receivedBookStatus}>
                  <Text style={styles.receivedBookStatusText}>
                    Received rejection
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.allBooks}>
          <Text style={styles.allBooksTitle}>All books</Text>
          <View style={styles.allBooksBlock}>
            {/* Book number 1 */}
            <View style={styles.bookContainer}>
              <View style={styles.bookContainerBlock1}>
                <FontAwesome
                  name="heart-o"
                  size={23}
                  color="#939393"
                  style={styles.heartIcon}
                />
                <Image
                  source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  style={styles.bookImg}
                />
              </View>
              <View style={styles.bookContainerBlock2}>
                <View style={styles.authorAndNameAndRateOfBook}>
                  <View style={styles.authorAndNameOfBookBlock}></View>
                  <View style={styles.rateOfBookBlock}></View>
                </View>
                <View style={styles.numberOfReadersAndRightIconBlock}>
                  <View style={styles.userIconNumberOfUsersAndTextBlock}></View>
                </View>
              </View>
            </View>

            {/* Book number 2 */}
            {/* Book number 3 */}
            {/* Book number 4 */}
            {/* Book number 5 */}
            {/* Book number 6 */}
            {/* Book number 7 */}
            {/* Book number 8 */}
          </View>
        </View>
      </ScrollView>
    </View>
  </View>
);

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
  receivedBooks: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
  receivedBookTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    marginBottom: 15,
  },
  receivedBooksBlockScrollView: {
    gap: 15,
    paddingRight: 440,
    paddingVertical: 10,
  },
  receivedBooksBlock: {},

  // Received Books (Styles with the same name)
  ////////////////////////////////////////////////
  receivedBookContainer: {
    width: "60%",
    height: 170,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
    flexDirection: "row",
  },
  receivedBookContainerBlock1: {
    width: "40%",
    backgroundColor: "#F5EABD",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  imgReceivedBook: {
    width: "77%",
    height: "77%",
    resizeMode: "contain",
  },
  receivedBookContainerBlock2: {
    padding: 10,
    width: "60%",
  },
  receivedBookTextBlock: {},
  receivedBookName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  receivedBookAuthor: {
    fontSize: 12,
    fontWeight: "400",
    color: "#515151",
  },
  receivedBookLeftDaysWithRangeAndText: {
    marginTop: 15,
  },
  receivedBookLeftDaysWithRangeFullDaysBlock: {
    height: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
  },
  receivedBookLeftDaysWithRangeLeftDaysBlock: {
    height: 10,
    backgroundColor: "#7EC7EC",
    borderRadius: 5,
  },
  receivedBookLeftDays: {
    fontSize: 12,
    fontWeight: "400",
    color: "#515151",
    marginTop: 4,
    textAlign: "right",
  },
  receivedBookStatus: {
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    marginTop: 22,
    borderWidth: 1,
    borderColor: "#404066",
  },
  receivedBookStatusText: {
    fontSize: 14,
    fontWeight: "500",
    color: "##404066",
  },
  ////////////////////////////////////////////////
  allBooks: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  allBooksTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    marginBottom: 15,
  },
  allBooksBlock: {
    height: 400,
    // backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },

  // All Books (Styles with the same name)
  ////////////////////////////////////////////////
  bookContainer: {},
  bookContainerBlock1: {
    backgroundColor: "#F5EABD",
    borderRadius: 4,
    padding: 30,
    position: "relative",
  },
  heartIcon: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  bookImg: {},
  bookContainerBlock2: {},
  authorAndNameAndRateOfBook: {},
  authorAndNameOfBookBlock: {},
  rateOfBookBlock: {},
  numberOfReadersAndRightIconBlock: {},
  userIconNumberOfUsersAndTextBlock: {},
  ////////////////////////////////////////////////
});
