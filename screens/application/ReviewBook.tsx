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

import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

// @ts-ignore
import Stars from "react-native-stars";

const ReviewBook = () => {
  const filterButtons = [
    { id: 1, title: "All", active: true },
    { id: 2, title: "Interesting", active: false },
    { id: 3, title: "Complain", active: false },
    { id: 4, title: "Feedback", active: false },
  ];

  const [rating, setRating] = useState(0);

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
              <Text style={styles.btnTextOpenModalAddReview}>Add review</Text>
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
          <ScrollView
            contentContainerStyle={styles.filterBtnsBlockScrollView}
            style={styles.filterBtnsBlock}
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
          <View style={styles.reviewsBlock}>
            {/* Review 1 */}
            <View style={styles.reviewBlock}>
              <View style={styles.headerReviewBlock}>
                <View style={styles.userImgFullnameAndRateBlock}>
                  <Image
                    source={require("../../assets/peshraft-library/book/commented-user.jpg")}
                    style={styles.userImg}
                  />
                  <View style={styles.fullnameAndRateBlock}>
                    <Text style={styles.fullname}>John Doe</Text>
                    <Stars
                      default={rating}
                      count={5}
                      disabled={true}
                      starSize={50}
                      fullStar={
                        <Entypo name="star" size={22} color="#FCC400" />
                      }
                      emptyStar={
                        <Entypo
                          name="star-outlined"
                          size={22}
                          color="#FCC400"
                        />
                      }
                      halfStar={
                        <Ionicons name="star-half" size={22} color="#FCC400" />
                      }
                    />
                  </View>
                </View>
                <Entypo name="heart-outlined" size={30} color={"#939393"} />
              </View>
              <View style={styles.sectionReviewBlock}>
                <Text style={styles.review}>
                  The Harry Potter book series delivers a magical blend of
                  adventure, friendship, and self-discovery. Its richly imagined
                  world invites readers to explore themes of courage, loyalty,
                  and the struggle between good and evil. .
                </Text>
              </View>
              <View style={styles.footerReviewBlock}>
                <Text style={styles.sentDate}>1 days ago</Text>
              </View>
            </View>
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
    marginTop: 10,
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

  filterBtnsBlockScrollView: {
    marginTop: 20,
    gap: 10,
  },
  filterBtnsBlock: {},
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

  reviewsBlock: {
    padding: 10,
  },

  // Styles with the same properties
  reviewBlock: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 21,
  },
  headerReviewBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userImgFullnameAndRateBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImg: {},
  fullnameAndRateBlock: {},
  fullname: {
    fontSize: 18,
    fontWeight: "500",
  },
  rate: {},
  sectionReviewBlock: {
    marginTop: 10,
  },
  review: {
    color: "#4D506C",
    fontSize: 14,
    fontWeight: "500",
  },
  footerReviewBlock: {
    marginTop: 10,
  },
  sentDate: {
    color: "#C2C2C2",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
  },
});
