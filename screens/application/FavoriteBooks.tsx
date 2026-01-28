import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const FavoriteBooks = () => {
  return (
    <View style={styles.favoriteBooksComponent}>
      <View style={styles.favoriteBooksComponentBlock}>
        <View style={styles.headerFavoriteBooksComponent}>
          <Text style={styles.titleHeaderFavoriteBooksComponent}>
            My favorite books
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.favoriteBooksScrollView}
          style={styles.favoriteBooks}
          showsVerticalScrollIndicator={false}
        >
          {/* Favorite Book 1 */}
          <View style={styles.favoriteBookContainer}>
            <View style={styles.favoriteBookContainerBlock1}>
              <Image
                style={styles.favoriteBookImg}
                source={require("../../assets/peshraft-library/home/tojikon.jpg")}
              />
            </View>
            <View style={styles.favoriteBookContainerBlock2}>
              <View style={styles.nameAuthorOfBookAndHeartIcon}>
                <View style={styles.nameAndAuthorOfBook}>
                  <Text style={styles.nameOfBook}>Tojikon</Text>
                  <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
                </View>
                <FontAwesome
                  name="heart"
                  size={20}
                  color="red"
                  style={styles.heartIcon}
                />
                {/* <FontAwesome
                  name="heart-o"
                  size={20}
                  color="red"
                  style={styles.heartIcon}
                /> */}
              </View>
              <View style={styles.rateOfBookContainer}>
                <View style={styles.rateOfBookBlock}>
                  <Entypo
                    name="star"
                    size={13}
                    color="orange"
                    style={styles.rateStarIcon}
                  />
                  <Text style={styles.rateInNumber}>4.0</Text>
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
                    <Text style={styles.numberOfReaders}>24</Text>
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

          {/* Favorite Book 2 */}
          <View style={styles.favoriteBookContainer}>
            <View style={styles.favoriteBookContainerBlock1}>
              <Image
                style={styles.favoriteBookImg}
                source={require("../../assets/peshraft-library/home/tojikon.jpg")}
              />
            </View>
            <View style={styles.favoriteBookContainerBlock2}>
              <View style={styles.nameAuthorOfBookAndHeartIcon}>
                <View style={styles.nameAndAuthorOfBook}>
                  <Text style={styles.nameOfBook}>Tojikon</Text>
                  <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
                </View>
                <FontAwesome
                  name="heart"
                  size={20}
                  color="red"
                  style={styles.heartIcon}
                />
                {/* <FontAwesome
                  name="heart-o"
                  size={20}
                  color="red"
                  style={styles.heartIcon}
                /> */}
              </View>
              <View style={styles.rateOfBookContainer}>
                <View style={styles.rateOfBookBlock}>
                  <Entypo
                    name="star"
                    size={13}
                    color="orange"
                    style={styles.rateStarIcon}
                  />
                  <Text style={styles.rateInNumber}>4.0</Text>
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
                    <Text style={styles.numberOfReaders}>24</Text>
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
          
          {/* Favorite Book 3 */}
          <View style={styles.favoriteBookContainer}>
            <View style={styles.favoriteBookContainerBlock1}>
              <Image
                style={styles.favoriteBookImg}
                source={require("../../assets/peshraft-library/home/tojikon.jpg")}
              />
            </View>
            <View style={styles.favoriteBookContainerBlock2}>
              <View style={styles.nameAuthorOfBookAndHeartIcon}>
                <View style={styles.nameAndAuthorOfBook}>
                  <Text style={styles.nameOfBook}>Tojikon</Text>
                  <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
                </View>
                <FontAwesome
                  name="heart"
                  size={20}
                  color="red"
                  style={styles.heartIcon}
                />
                {/* <FontAwesome
                  name="heart-o"
                  size={20}
                  color="red"
                  style={styles.heartIcon}
                /> */}
              </View>
              <View style={styles.rateOfBookContainer}>
                <View style={styles.rateOfBookBlock}>
                  <Entypo
                    name="star"
                    size={13}
                    color="orange"
                    style={styles.rateStarIcon}
                  />
                  <Text style={styles.rateInNumber}>4.0</Text>
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
                    <Text style={styles.numberOfReaders}>24</Text>
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

          {/* Favorite Book 4 */}
          <View style={styles.favoriteBookContainer}>
            <View style={styles.favoriteBookContainerBlock1}>
              <Image
                style={styles.favoriteBookImg}
                source={require("../../assets/peshraft-library/home/tojikon.jpg")}
              />
            </View>
            <View style={styles.favoriteBookContainerBlock2}>
              <View style={styles.nameAuthorOfBookAndHeartIcon}>
                <View style={styles.nameAndAuthorOfBook}>
                  <Text style={styles.nameOfBook}>Tojikon</Text>
                  <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
                </View>
                <FontAwesome
                  name="heart"
                  size={20}
                  color="red"
                  style={styles.heartIcon}
                />
                {/* <FontAwesome
                  name="heart-o"
                  size={20}
                  color="red"
                  style={styles.heartIcon}
                /> */}
              </View>
              <View style={styles.rateOfBookContainer}>
                <View style={styles.rateOfBookBlock}>
                  <Entypo
                    name="star"
                    size={13}
                    color="orange"
                    style={styles.rateStarIcon}
                  />
                  <Text style={styles.rateInNumber}>4.0</Text>
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
                    <Text style={styles.numberOfReaders}>24</Text>
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
        </ScrollView>
      </View>
    </View>
  );
};

export default FavoriteBooks;

const styles = StyleSheet.create({
  favoriteBooksComponent: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 30,
  },
  favoriteBooksComponentBlock: {},
  headerFavoriteBooksComponent: {},
  titleHeaderFavoriteBooksComponent: {
    fontSize: 25,
    fontWeight: "500",
  },
  sectionFavoriteBooksComponent: {},
  favoriteBooksScrollView: {
    gap: 22,
    paddingBottom: 50,
  },
  favoriteBooks: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  // Styles with the same names and properties
  ////////////////////////////////////////////
  favoriteBookContainer: {
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
  favoriteBookContainerBlock1: {
    backgroundColor: "#F5EABD",
    padding: 20,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  favoriteBookImg: {
    width: 82,
    height: 118,
    resizeMode: "contain",
  },
  favoriteBookContainerBlock2: {
    padding: 10,
  },
  nameAuthorOfBookAndHeartIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "79%",
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
  rateOfBookContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20,
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
    marginTop: 20,
    width: "79%",
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
  ////////////////////////////////////////////
});
