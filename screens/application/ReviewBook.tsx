import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ReviewBook = () => {
  return (
    <View style={styles.reviewBookComponent}>
      <View style={styles.reviewBookComponentBlock}>
        <View
          style={
            styles.titleBtnOpenModalAddReviewInpSearchAndFiltersBlockReviewBookComponent
          }
        >
          <View style={styles.titleAndBtnOpenModalAddReview}>
            <Text>Reviews</Text>
            <Pressable>
              <Text></Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewBook;

const styles = StyleSheet.create({
  reviewBookComponent: {},
  reviewBookComponentBlock: {},
  titleBtnOpenModalAddReviewInpSearchAndFiltersBlockReviewBookComponent: {},
  titleAndBtnOpenModalAddReview: {},
});
