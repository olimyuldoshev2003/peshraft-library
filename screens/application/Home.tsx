import ModalSearch from "@/components/home/ModalSearch";
import { axiosRequest } from "@/utils/axiosRequest";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

const filterButtons = [
  { id: 1, title: "All", active: true },
  { id: 2, title: "Best book", active: false },
  { id: 3, title: "Classics", active: false },
  { id: 4, title: "Fantasy", active: false },
];

const Home = () => {
  const navigation: any = useNavigation();
  const [modalSearch, setModalSearch] = useState<boolean>(false);

  // Books
  const [books, setBooks] = useState<any>([]);
  const [loadingBooks, setLoadingBooks] = useState<boolean>(false);

  const { t } = useTranslation();

  async function getAllBooks() {
    try {
      setLoadingBooks(true);
      const { data } = await axiosRequest.get(`/books`);
      if (data && data.data) {
        setBooks(data.data);
      } else if (data && Array.isArray(data)) {
        setBooks(data);
      } else {
        setBooks([]);
      }
    } catch (error) {
      // Silently catch error - do nothing, just set empty array
      setBooks([]);
    } finally {
      setLoadingBooks(false);
    }
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  // Mobile Side
  ////////////////////////////////////////////////////////////////
  // Home Page
  ////////////////////////////////////////////////////////////////
  // 1. Received books
  // get()
  // [
  //   {
  //     id: "",
  //     image_url: "",
  //     title: "",
  //     author: ""
  //     borrow_date: "",
  //     due_date: "",
  //   }
  // ]

  // 2. Filters
  // get()
  // [
  //   {
  //     id: "",
  //     filter_name: "",
  //   }
  //   ...
  // ]

  // 3. Books
  // get()
  // [
  //   {
  //     id: "",
  //     image_url: "",
  //     title: "",
  //     author: "",
  //     rating: 4, This is is the average rating of this book, which is calculated by the added ratings of users
  //     readers: 20, This one is the length of users, who received this book (book_id in received_users data)
  //     isFavoriteBook: true, Favorite Book Data
  //   }
  // ]
  ////////////////////////////////////////////////////////////////

  // Notifications Page
  ////////////////////////////////////////////////////////////////
  // Filter by notification type (duetime, news) is so important
  // 1. Notifications (duetime)
  // get()
  // [
  //   {
  //     id: "",
  //     type: "duetime",
  //     date: "",
  //     [
  //       {
  //         notification_image_url: "",
  //         title: "",
  //         description: "",
  //         time: "",
  //       }
  //      ...
  //     ];
  //   }
  //   ...
  // ]

  // 2. Notifications (news)
  // get()
  // [
  //   {
  //     id: "",
  //     type: "news",
  //     date: "",
  //     [
  //       {
  //         notification_image_url: "",
  //         title: "",
  //         description: "",
  //         time: "",
  //       }
  //      ...
  //     ];
  //   }
  //   ...
  // ]
  ////////////////////////////////////////////////////////////////

  // Bookshelf Page
  ////////////////////////////////////////////////////////////////
  // 1. Received books
  // get()
  // [
  //   {
  //     id: "",
  //     image_url: "",
  //     title: "",
  //     author: ""
  //     borrow_date: "",
  //     due_date: "",
  //   }
  //   ...
  // ]
  ////////////////////////////////////////////////////////////////

  // Favorite Books Page
  ////////////////////////////////////////////////////////////////
  // 1. Favorite Books
  // get()
  // [
  //   {
  //     id: "",
  //     image_url: "",
  //     title: "",
  //     author: ""
  //     rating: 4, This is is the average rating of this book, which is calculated by the added ratings of users
  //     readers: 20, This one is the length of users, who received this book (book_id in received_users data),
  //     isFavoriteBook: true, Favorite Book Data
  //   }
  //   ...
  // ]
  ////////////////////////////////////////////////////////////////

  // Profile Page
  ////////////////////////////////////////////////////////////////
  // 1. User Data
  // get()
  // {
  //   id: "",
  //   member_image_url: "",
  //   name: "",
  //   email: ""
  // }
  ////////////////////////////////////////////////////////////////

  // Edit User Page
  ////////////////////////////////////////////////////////////////
  // 1. Edit User
  // put() (edit)
  // {
  //   id: "",
  //   member_image_url: "",
  //   name: "",
  //   date_of_birth: "",
  //   phone: "",
  //   email: "",
  // }
  ////////////////////////////////////////////////////////////////

  // Change Password Page
  ////////////////////////////////////////////////////////////////
  // 1. Change password
  // put() (edit)
  // {
  //   old_password: "",
  //   new_password: "",
  //   confirm_new_password: "",
  // }
  ////////////////////////////////////////////////////////////////

  // Feedback Page
  ////////////////////////////////////////////////////////////////
  // 1. Feedback
  // post()
  // {
  //   id: "",
  //   phone: "",
  //   email: "",
  //   feedback: "",
  // }
  ////////////////////////////////////////////////////////////////

  // Book Page
  ////////////////////////////////////////////////////////////////
  // 1. Book
  // get()
  // {
  //   id: "",
  //   bg_image_url: "",
  //   image_url: "",
  //   title: "",
  //   author: "",
  //   rating: 4, This is is the average rating of this book, which is calculated by the added ratings of users
  //   category: "",
  //   book_page: "",
  //   year: 2005 (type number),
  //   language: "",
  //   available_copies: 3 (type number),
  //   description: ""
  // }

  // 2. Add to favorite book (like icon)
  // put()
  // Adds to favorite books and removes from favorite books (true / false)

  // 3. Receive book
  // post()
  // {
  //   id: "", (id of member, who wants to receive the book)
  //   member_id: "",
  //   member_image_url: "",
  //   receiver_name: "",
  //   phone:"",
  //   email:  ""
  //   request_date: "",
  //   borrow_date: "",
  //   due_date: "",
  //   book_title:"",
  //   author:  ""
  // }

  // 4. Reviews (feedbacks) of book
  // get()
  // [
  //   {
  //     id: "",
  //     book_id: "",
  //     member_image_url: "",
  //     name: "",
  //     rating: 4,
  //     review: "",
  //     review_category: "",
  //     is_review_liked: false,
  //     review_date: "",
  //   }
  //   ...
  // ]

  // 5. Add the review of book
  // post()
  // {
  //   id: "",
  //   book_id: "",
  //   rating: 4,
  //   review: "",
  //   review_category: "",
  //   review_date: "",
  // }
  ////////////////////////////////////////////////////////////////

  // Return Book Page
  ////////////////////////////////////////////////////////////////
  // 1. Return book
  // get() (by receive book id)
  // {
  //   id: "",
  //   image_url: "", (image of book) 
  //   title: "", (name of book) 
  //   author: "", (author of book) 
  //   borrow_date: "",
  //   due_date: "",
  //   phone:"",
  // }

  // post()
  // {
  //   id: "", (id of member, who wants to return the book)
  //   member_image_url: "",
  //   returner_name: "",
  //   phone:"",
  //   email:  ""
  //   borrowed_date: "",
  //   due_date: "",
  //   request_date: "",
  //   book_title:"",
  //   author:  ""
  // } - Goes to return book requests
  ////////////////////////////////////////////////////////////////
  
  // History Page
  ////////////////////////////////////////////////////////////////
  // 1. History of the person, who already returned book
  // get()
  // [
  //   {
  //     id: "",
  //     image_url: "",
  //     title: "",
  //     author: "",
  //     return_date: "", (from the date, when the book was returned)
  //   }
  //   ...
  // ]
  ////////////////////////////////////////////////////////////////
  

  ////////////////////////////////////////////////////////////////

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
              <Text style={styles.nameOfApp}>{t("home.t1")}</Text>
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
                placeholder={t("home.t2")}
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
            <Text style={styles.receivedBookTitle}>{t("home.t3")}</Text>
            <ScrollView
              contentContainerStyle={styles.receivedBooksBlockScrollView}
              style={styles.receivedBooksBlock}
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {receivedBooksData.map((book) => (
                <Pressable
                  key={book.id}
                  style={styles.receivedBookContainer}
                  onPress={() => {
                    navigation.navigate("ReceivedBook");
                  }}
                >
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
                          ? `1 ${t("home.t4")}`
                          : `${book.daysLeft} ${t("home.t5")}`}
                      </Text>
                    </View>
                    <View style={styles.receivedBookStatus}>
                      <Text style={styles.receivedBookStatusText}>
                        {book.status}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>
          <View style={styles.allBooks}>
            <Text style={styles.allBooksTitle}>{t("home.t6")}</Text>
            <View style={styles.allBooksBlock}>
              {loadingBooks === false && books.length === 0 && (
                <Text style={styles.noBooksText}>Books not found</Text>
              )}
              {books.map((book: any) => (
                <Pressable
                  key={book.id}
                  style={styles.bookContainer}
                  onPress={() => {
                    navigation.navigate("Book", { id: book.id });
                  }}
                >
                  <View style={styles.bookContainerBlock1}>
                    <FontAwesome
                      name="heart-o"
                      size={20}
                      color="#939393"
                      style={styles.heartIcon}
                    />
                    <Image
                      source={
                        book.image_url
                          ? { uri: book.image_url }
                          : require("../../assets/peshraft-library/home/tojikon.jpg")
                      }
                      style={styles.bookImg}
                    />
                  </View>
                  <View style={styles.bookContainerBlock2}>
                    <View style={styles.nameAndAuthorAndRateOfBookBlock}>
                      <View style={styles.nameAndAuthorOfBookBlock}>
                        <Text style={styles.nameOfBook}>{book.title}</Text>
                        <Text style={styles.authorOfBook}>{book.author}</Text>
                      </View>
                      <View style={styles.rateOfBookBlock}>
                        <Entypo
                          name="star"
                          size={13}
                          color="orange"
                          style={styles.rateStarIcon}
                        />
                        <Text style={styles.rateInNumber}>
                          {book.rating || "0"}
                        </Text>
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
                            {book.readers || "0"}
                          </Text>
                          <Text style={styles.titleOfReaders}>
                            {t("home.t8")}
                          </Text>
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
                </Pressable>
              ))}
              {loadingBooks && (
                <Text style={styles.loadingText}>Loading books...</Text>
              )}
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

  noBooksText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#515151",
    textAlign: "center",
    marginTop: 20,
  },
  loadingText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#515151",
    textAlign: "center",
    marginTop: 20,
  },
});
