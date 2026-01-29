import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Book = ({ route }: { route: any }) => {
  //   console.log(route.params.id);

  const navigation: any = useNavigation();

  return (
    <View style={styles.bookComponent}>
      <View style={styles.bookComponentBlock}>
        <View style={styles.headerBookComponent}>
          <ImageBackground
            source={require("../../assets/peshraft-library/book/imgBg.jpg")}
            style={styles.imgBgHeaderBookComponent}
          >
            <Ionicons
              name="arrow-back-circle-outline"
              size={43}
              color="black"
              style={styles.backIcon}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <Pressable style={styles.btnAddToFavorite}>
              <Ionicons
                name="heart-outline"
                size={43}
                color="black"
                style={styles.heartIcon}
              />
            </Pressable>
            <View style={styles.nameAuthorAndImgOfBook}>
              <Text style={styles.nameOfBook}>Tojikon</Text>
              <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
              <View style={styles.imgOfBookBlock}>
                <Image
                  source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  style={styles.imgOfBook}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.sectionBookComponent}>
          <View style={styles.ratingGenreAndPageAmountOfBookContainer}>
            <View style={styles.ratingGenreAndPageAmountOfBookBlock}>
              <View style={styles.rateOfBookBlock}>
                <Entypo
                  name="star"
                  size={21}
                  color="orange"
                  style={styles.rateStarIcon}
                />
                <Text style={styles.rateInNumber}>4.0</Text>
              </View>
              <Text style={styles.genreOfBook}>Fantasy</Text>
              <Text style={styles.pageAmountOfBook}>333 pages</Text>
            </View>
          </View>
        </View>
        <View style={styles.footerBookComponent}>
          <Pressable style={styles.btnOpenModalReceiveBook}>
            <Text style={styles.btnTextOpenModalReceiveBook}>
              Receive a book
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  bookComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bookComponentBlock: {},
  headerBookComponent: {},
  imgBgHeaderBookComponent: {
    width: "100%",
    height: 380,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    position: "absolute",
    top: 30,
    left: 20,
  },
  btnAddToFavorite: {
    position: "absolute",
    top: 30,
    right: 20,
  },
  heartIcon: {},
  nameAuthorAndImgOfBook: {},
  nameOfBook: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  authorOfBook: {
    fontSize: 20,
    fontWeight: "400",
    color: "#515151",
    textAlign: "center",
  },
  imgOfBookBlock: {
    flexDirection: "row",
    justifyContent: "center",
  },
  imgOfBook: {
    width: 127,
    height: 215,
    resizeMode: "contain",
  },
  sectionBookComponent: {},
  ratingGenreAndPageAmountOfBookContainer: {
    flexDirection: "row",
    justifyContent: "center",
    top: -23.9,
  },
  ratingGenreAndPageAmountOfBookBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "80%",
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
    fontSize: 18,
    fontWeight: "600",
  },
  genreOfBook: {
    fontSize: 18,
    fontWeight: "500",
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: "#E2FCFB",
    borderRadius: 10,
  },
  pageAmountOfBook: {
    fontSize: 17,
    fontWeight: "400",
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },
  footerBookComponent: {
    backgroundColor: "#fff",

    paddingVertical: 10,
  },
  btnOpenModalReceiveBook: {
    borderRadius: 12,
    backgroundColor: "#00A9FF",
    paddingVertical: 9,
    width: "90%",
    margin: "auto",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  btnTextOpenModalReceiveBook: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "600",
  },
});
