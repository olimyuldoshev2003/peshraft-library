import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const ReviewBook = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.reviewBookComponentScrollView}
      style={styles.reviewBookComponent}
    >
      <View style={styles.reviewBookComponentBlock}>
        <View
          style={
            styles.titleBtnOpenModalAddReviewInpSearchAndFiltersBlockReviewBookComponent
          }
        >
          <View style={styles.titleAndBtnOpenModalAddReview}>
            <Text style={styles.title}>Reviews</Text>
            <Pressable style={styles.btnOpenModalAddReview}>
              <Feather
                name="edit-2"
                size={21}
                color="#2623D0"
                style={styles.btnIconOpenModalAddReview}
              />
              <Text style={styles.btnTextOpenModalAddReview}>Add review </Text>
            </Pressable>
          </View>
          <View style={styles.inpSearchBlock}>
            <Ionicons
              name="search"
              size={30}
              color="black"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.inpSearch}
              placeholder="Search"
              placeholderTextColor={"#939393"}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReviewBook;

const styles = StyleSheet.create({
  reviewBookComponentScrollView: {},
  reviewBookComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  reviewBookComponentBlock: {
    padding: 10,
  },
  titleBtnOpenModalAddReviewInpSearchAndFiltersBlockReviewBookComponent: {},
  titleAndBtnOpenModalAddReview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  title: {
    color: "#292B38",
    fontSize: 18,
    fontWeight: "500",
  },
  btnOpenModalAddReview: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnIconOpenModalAddReview: {},
  btnTextOpenModalAddReview: {
    color: "#2623D0",
    fontSize: 16,
    fontWeight: "500",
  },
  inpSearchBlock: {
    position: "relative",
    marginTop: 10
  },
  searchIcon: {
    position: "absolute",
    zIndex: 5,
    top: 9.5,
    left: 9.5,
  },
  inpSearch: {
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
});
