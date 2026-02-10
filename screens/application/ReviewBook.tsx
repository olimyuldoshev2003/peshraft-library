import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
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

const ReviewBook = () => {
  const filterButtons = [
    { id: 1, title: "All", active: true },
    { id: 2, title: "Interesting", active: false },
    { id: 3, title: "Complain", active: false },
    { id: 4, title: "Feedback", active: false },
  ];

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
                  <Image style={styles.userImg} />
                  <View style={styles.fullnameAndRateBlock}>
                    <Text style={styles.fullname}>John Doe</Text>
                    {/* <Text style={styles.rate}>4.5</Text> */}
                  </View>
                </View>
              </View>
              <View style={styles.sectionReviewBlock}></View>
              <View style={styles.footerReviewBlock}></View>
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

  reviewsBlock: {},

  // Styles with the same properties
  reviewBlock: {},
  headerReviewBlock: {},
  userImgFullnameAndRateBlock: {},
  userImg: {},
  fullnameAndRateBlock: {},
  fullname: {},
  rate: {},
  sectionReviewBlock: {},
  footerReviewBlock: {},
});
