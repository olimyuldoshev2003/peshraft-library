import ModalSearch from "@/components/home/ModalSearch";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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
];

const allBooksData = [
  {
    id: 1,
    name: "Tojikon",
    author: "Bobojon Ghafurov",
    rating: "4.0",
    readers: "5",
    image: require("../../assets/peshraft-library/home/tojikon.jpg"),
  },
  {
    id: 2,
    name: "Tojikon",
    author: "Bobojon Ghafurov",
    rating: "4.0",
    readers: "5",
    image: require("../../assets/peshraft-library/home/tojikon.jpg"),
  },
  {
    id: 3,
    name: "Tojikon",
    author: "Bobojon Ghafurov",
    rating: "4.0",
    readers: "5",
    image: require("../../assets/peshraft-library/home/tojikon.jpg"),
  },
  {
    id: 4,
    name: "Tojikon",
    author: "Bobojon Ghafurov",
    rating: "4.0",
    readers: "5",
    image: require("../../assets/peshraft-library/home/tojikon.jpg"),
  },
  {
    id: 5,
    name: "Tojikon",
    author: "Bobojon Ghafurov",
    rating: "4.0",
    readers: "5",
    image: require("../../assets/peshraft-library/home/tojikon.jpg"),
  },
  {
    id: 6,
    name: "Tojikon",
    author: "Bobojon Ghafurov",
    rating: "4.0",
    readers: "5",
    image: require("../../assets/peshraft-library/home/tojikon.jpg"),
  },
  {
    id: 7,
    name: "Tojikon",
    author: "Bobojon Ghafurov",
    rating: "4.0",
    readers: "5",
    image: require("../../assets/peshraft-library/home/tojikon.jpg"),
  },
  {
    id: 8,
    name: "Tojikon",
    author: "Bobojon Ghafurov",
    rating: "4.0",
    readers: "5",
    image: require("../../assets/peshraft-library/home/tojikon.jpg"),
  },
];

const filterButtons = [
  { id: 1, title: "All", active: true },
  { id: 2, title: "Best book", active: false },
  { id: 3, title: "Classics", active: false },
  { id: 4, title: "Fantasy", active: false },
];

const Home = () => {
  const navigation: any = useNavigation();

  const [modalSearch, setModalSearch] = useState<boolean>(false);

  // Function to calculate the width percentage (opposite logic)
  const calculateProgressWidth = (daysLeft: number, daysGiven: number) => {
    // Calculate percentage of time REMAINING (not used)
    const remainingPercentage = (daysLeft * 100) / daysGiven;

    // Calculate percentage of time USED (opposite logic)
    const usedPercentage = ((daysGiven - daysLeft) * 100) / daysGiven;

    // Or simpler: show how much time has passed rather than how much is left
    return `${usedPercentage}%`;
  };

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
            <MaterialIcons
              name="notifications-none"
              size={35}
              color="black"
              onPress={() => {
                navigation.navigate("Notifications");
              }}
            />
          </View>
          <View style={styles.headerBlock2}>
            <Pressable
              style={styles.btnOpenModalSearchWithInput}
              onPress={() => {
                setModalSearch(true);
              }}
            >
              <Ionicons
                name="search"
                size={30}
                color="black"
                style={styles.searchIconOpenModal}
              />
              <TextInput
                style={styles.inputOpenModalSearch}
                placeholder="Search"
                editable={false}
                placeholderTextColor={"#939393"}
              />
            </Pressable>
          </View>
          <ScrollView
            contentContainerStyle={styles.headerBlock3ScrollView}
            style={styles.headerBlock3}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {filterButtons.map((filter) => (
              <Pressable
                key={filter.id}
                style={[
                  styles.filterBtn,
                  filter.active
                    ? styles.filterBtnActive
                    : styles.filterBtnInactive,
                ]}
              >
                <Text
                  style={[
                    styles.filterBtnText,
                    filter.active
                      ? styles.filterBtnTextActive
                      : styles.filterBtnTextInactive,
                  ]}
                >
                  {filter.title}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <ScrollView
          contentContainerStyle={styles.sectionHomeComponentScrollView}
          style={styles.sectionHomeComponent}
          showsVerticalScrollIndicator={false}
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
              {receivedBooksData.map((book) => (
                <View key={book.id} style={styles.receivedBookContainer}>
                  <View style={styles.receivedBookContainerBlock1}>
                    <Image source={book.image} style={styles.imgReceivedBook} />
                  </View>
                  <View style={styles.receivedBookContainerBlock2}>
                    <View style={styles.receivedBookTextBlock}>
                      <Text style={styles.receivedBookName}>{book.name}</Text>
                      <Text style={styles.receivedBookAuthor}>
                        {book.author}
                      </Text>
                    </View>
                    <View style={styles.receivedBookLeftDaysWithRangeAndText}>
                      <View
                        style={[
                          styles.receivedBookLeftDaysWithRangeFullDaysBlock,
                        ]}
                      >
                        <View
                          style={[
                            styles.receivedBookLeftDaysWithRangeLeftDaysBlock,
                            {
                              width: `${((book.daysGiven - book.daysLeft) * 100) / book.daysGiven}%`,
                            },
                          ]}
                        ></View>
                      </View>
                      <Text style={styles.receivedBookLeftDays}>
                        {book.daysLeft === 1
                          ? "1 day left"
                          : `${book.daysLeft} days left`}
                      </Text>
                    </View>
                    <View style={styles.receivedBookStatus}>
                      <Text style={styles.receivedBookStatusText}>
                        {book.status}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.allBooks}>
            <Text style={styles.allBooksTitle}>All books</Text>
            <View style={styles.allBooksBlock}>
              {allBooksData.map((book) => (
                <View key={book.id} style={styles.bookContainer}>
                  <View style={styles.bookContainerBlock1}>
                    <FontAwesome
                      name="heart-o"
                      size={20}
                      color="#939393"
                      style={styles.heartIcon}
                    />
                    <Image source={book.image} style={styles.bookImg} />
                  </View>
                  <View style={styles.bookContainerBlock2}>
                    <View style={styles.nameAndAuthorAndRateOfBookBlock}>
                      <View style={styles.nameAndAuthorOfBookBlock}>
                        <Text style={styles.nameOfBook}>{book.name}</Text>
                        <Text style={styles.authorOfBook}>{book.author}</Text>
                      </View>
                      <View style={styles.rateOfBookBlock}>
                        <Entypo
                          name="star"
                          size={13}
                          color="orange"
                          style={styles.rateStarIcon}
                        />
                        <Text style={styles.rateInNumber}>{book.rating}</Text>
                      </View>
                    </View>
                    <View style={styles.numberOfReadersAndForwardIconBlock}>
                      <View style={styles.userIconNumberOfReadersAndTextBlock}>
                        <Feather
                          name="users"
                          size={24}
                          color="#939393"
                          style={styles.userIcon}
                        />
                        <View style={styles.numberAndTextReadersBlock}>
                          <Text style={styles.numberOfReaders}>
                            {book.readers}
                          </Text>
                          <Text style={styles.titleOfReaders}>readers</Text>
                        </View>
                      </View>
                      <View style={styles.forwardIconBlock}>
                        <FontAwesome6
                          name="arrow-right-long"
                          size={13}
                          color="black"
                          style={styles.forwardIcon}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        <ModalSearch
          modalSearch={modalSearch}
          setModalSearch={setModalSearch}
        />
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
    paddingBottom: 5,
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
  },
  btnOpenModalSearchWithInput: {
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
  sectionHomeComponentScrollView: {
    paddingBottom: 230,
  },
  receivedBooks: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
  receivedBookTitle: {
    fontSize: 21,
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
    color: "#404066",
  },
  ////////////////////////////////////////////////
  allBooks: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  allBooksTitle: {
    fontSize: 21,
    fontWeight: "500",
    color: "#000",
    marginBottom: 15,
  },
  allBooksBlock: {
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 35,
  },

  // All Books (Styles with the same name)
  ////////////////////////////////////////////////
  bookContainer: {
    width: "45%",
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
  bookContainerBlock1: {
    backgroundColor: "#F5EABD",
    padding: 30,
    position: "relative",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  heartIcon: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  bookImg: {
    width: 107,
    height: 146,
    resizeMode: "contain",
  },
  bookContainerBlock2: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  nameAndAuthorAndRateOfBookBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameAndAuthorOfBookBlock: {},
  nameOfBook: {
    fontSize: 16,
    fontWeight: "500",
  },
  authorOfBook: {
    fontSize: 12,
    fontWeight: "400",
    color: "#515151",
  },
  rateOfBookBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "#FFF8E0",
    padding: 2,
    borderRadius: 8,
  },
  rateStarIcon: {},
  rateInNumber: {
    fontSize: 10,
    fontWeight: "400",
  },
  numberOfReadersAndForwardIconBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  userIconNumberOfReadersAndTextBlock: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },
  userIcon: {},
  numberAndTextReadersBlock: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },
  numberOfReaders: {
    fontSize: 18,
    fontWeight: "600",
  },
  titleOfReaders: {
    fontSize: 14,
    fontWeight: "600",
  },
  forwardIconBlock: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 6,
  },
  forwardIcon: {},
  ////////////////////////////////////////////////
});
