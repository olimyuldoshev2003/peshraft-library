import Feather from "@expo/vector-icons/Feather";
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

const Bookshelf = () => {
  const receivedBooksData = [
    {
      id: 1,
      name: "TOJIKON",
      author: "Bobojon Gafurov",
      leftDaysPercentage: 60,
      status: "Received rejection",
      image: require("../../assets/peshraft-library/home/tojikon.jpg"),
      daysGiven: 14,
      daysLeft: 1,
    },
    {
      id: 2,
      name: "TOJIKON",
      author: "Bobojon Gafurov",
      status: "Received rejection",
      image: require("../../assets/peshraft-library/home/tojikon.jpg"),
      daysGiven: 14,
      daysLeft: 2,
    },
    {
      id: 3,
      name: "TOJIKON",
      author: "Bobojon Gafurov",
      leftDaysPercentage: 50,
      status: "Received rejection",
      image: require("../../assets/peshraft-library/home/tojikon.jpg"),
      daysGiven: 28,
      daysLeft: 28,
    },
    {
      id: 4,
      name: "TOJIKON",
      author: "Bobojon Gafurov",
      leftDaysPercentage: 50,
      status: "Received rejection",
      image: require("../../assets/peshraft-library/home/tojikon.jpg"),
      daysGiven: 28,
      daysLeft: 28,
    },
    {
      id: 5,
      name: "TOJIKON",
      author: "Bobojon Gafurov",
      leftDaysPercentage: 50,
      status: "Received rejection",
      image: require("../../assets/peshraft-library/home/tojikon.jpg"),
      daysGiven: 28,
      daysLeft: 28,
    },
  ];

  return (
    <View style={styles.bookshelfComponent}>
      <View style={styles.bookshelfComponentBlock}>
        <View style={styles.headerBookshelfComponent}>
          <View style={styles.titleAndIconNotifications}>
            <Text style={styles.titleOfComponent}>My Bookshelf</Text>
            <MaterialIcons name="notifications-none" size={35} color="black" />
          </View>
          <View style={styles.searchBlock}>
            <Ionicons
              name="search"
              size={30}
              color="black"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.inputSearch}
              placeholder="Search Here"
              placeholderTextColor={"#939393"}
            />
          </View>
        </View>
        {/* <View style={styles.sectionBookshelfComponent}> */}
          <ScrollView
            contentContainerStyle={styles.bookshelfReceivedBooksScrollView}
            style={styles.bookshelfReceivedBooks}
            showsVerticalScrollIndicator={false}
          >
            {receivedBooksData.map((receivedBook) => {
              return (
                <View
                  style={styles.receivedBookContainer}
                  key={receivedBook.id}
                >
                  <View style={styles.receivedBookContainerBlock1}>
                    <Image
                      style={styles.receivedBookImg}
                      source={receivedBook.image}
                    />
                  </View>
                  <View style={styles.receivedBookContainerBlock2}>
                    <View style={styles.nameAuthorOfBookAndHeartIcon}>
                      <View style={styles.nameAndAuthorOfBook}>
                        <Text style={styles.nameOfBook}>
                          {receivedBook.name}
                        </Text>
                        <Text style={styles.authorOfBook}>
                          {receivedBook.author}
                        </Text>
                      </View>
                      <FontAwesome
                        name="heart-o"
                        size={20}
                        color="#939393"
                        style={styles.heartIcon}
                      />
                    </View>
                    <View style={styles.alertIconAndDaysLeftBlock}>
                      <Feather
                        name="alert-octagon"
                        size={24}
                        color="#FF383C"
                        style={styles.alertIcon}
                      />
                      <Text style={styles.daysLeft}>
                        {receivedBook.daysLeft} days left
                      </Text>
                    </View>
                    <View style={styles.btnReturnBookBlock}>
                      <Pressable style={styles.btnReturnBook}>
                        <Text style={styles.btnTextReturnBook}>
                          Return the book
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        {/* </View> */}
      </View>
    </View>
  );
};

export default Bookshelf;

const styles = StyleSheet.create({
  bookshelfComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bookshelfComponentBlock: {
    padding: 10,
    paddingTop: 25,
  },
  headerBookshelfComponent: {},
  titleAndIconNotifications: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleOfComponent: {
    fontSize: 25,
    fontWeight: "500",
  },
  searchBlock: {
    position: "relative",
    marginTop: 11,
  },
  searchIcon: {
    position: "absolute",
    zIndex: 5,
    top: 9.5,
    left: 9.5,
  },
  inputSearch: {
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
  sectionBookshelfComponent: {},
  bookshelfReceivedBooksScrollView: {
    gap: 22,
    paddingBottom: 120,
  },
  bookshelfReceivedBooks: { 
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  // Styles with the same names and properties
  receivedBookContainer: {
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  receivedBookContainerBlock1: {
    backgroundColor: "#767D7E",
    padding: 20,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  receivedBookImg: {
    width: 82,
    height: 118,
    resizeMode: "contain",
  },
  receivedBookContainerBlock2: {
    padding: 10,
  },
  nameAuthorOfBookAndHeartIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  nameAndAuthorOfBook: {
    justifyContent: "space-between",
  },
  nameOfBook: {
    fontSize: 22,
    fontWeight: "500",
  },
  authorOfBook: {
    color: "#515151",
    fontSize: 16,
    fontWeight: "400",
  },
  heartIcon: {},
  alertIconAndDaysLeftBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  alertIcon: {},
  daysLeft: {
    color: "#FF383C",
    fontSize: 12,
    fontWeight: "600",
  },
  btnReturnBookBlock: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  btnReturnBook: {
    // backgroundColor: "#FF383C",
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#404066",
  },
  btnTextReturnBook: {
    color: "#404066",
    fontSize: 11,
    fontWeight: "500",
  },
});
