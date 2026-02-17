import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  GestureResponderEvent,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// @ts-ignore
import Stars from "react-native-stars";

const ModalAddReview = ({
  modalAddReview,
  setModalAddReview,
}: {
  modalAddReview: boolean;
  setModalAddReview: Dispatch<SetStateAction<boolean>>;
}) => {
  const [rating, setRating] = useState(0);

  

  return (
    <Modal
      visible={modalAddReview}
      style={styles.modalAddReviewComponent}
      animationType="slide"
      transparent={true}
    >
      <Pressable
        style={styles.overlayModalAddReview}
        onPress={() => {
          setModalAddReview(false);
        }}
      >
        <Pressable
          style={styles.modalAddReviewMainBlock}
          onPress={(event: GestureResponderEvent) => {
            event.stopPropagation();
          }}
        >
          <View style={styles.headerModalAddReview}>
            <AntDesign
              style={styles.closeModalAddReviewIcon}
              name="close"
              size={30}
              color="black"
              onPress={() => {
                setModalAddReview(false);
              }}
            />
            <Text style={styles.titleModalAddReviewComponent}>Add Review</Text>
            <MaterialIcons
              style={styles.deleteIconModalAddReviewComponent}
              name="delete"
              size={35}
              color="red"
            />
          </View>
          <ScrollView
            contentContainerStyle={styles.sectionModalAddReviewScrollView}
            style={styles.sectionModalAddReview}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.imgNameAndAuthorOfThisBookAndBtnNovelBlock}>
              <Image
                source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                style={styles.imgOfBook}
              />
              <View style={styles.nameAndAuthorOfBookAndBtnNovelBlock}>
                <Text style={styles.nameOfBook}>Tojikon</Text>
                <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
                <Pressable style={styles.btnNovel}>
                  <Text style={styles.btnTextNovel}>Novel</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.ratingAndLabelInpReviewBlock}>
              <View style={styles.ratingBlock}>
                <Text style={styles.ratingTitle}>
                  Your Overoll Rolling Of The Book{" "}
                </Text>
                {/* <Stars
                  default={rating}
                  count={5}
                  disabled={true}
                  starSize={50}
                  fullStar={<Entypo name="star" size={43} color="#FCC400" />}
                  emptyStar={
                    <Entypo name="star-outlined" size={43} color="#FCC400" />
                  }
                  halfStar={
                    <Ionicons name="star-half" size={43} color="#FCC400" />
                  }
                /> */}
                <Stars
                  default={rating}
                  count={5}
                  starSize={50}
                  fullStar={<Entypo name="star" size={43} color="#FCC400" />}
                  emptyStar={<Entypo name="star" size={43} color="#D9D9D9" />}
                  halfStar={
                    <Ionicons name="star-half" size={43} color="#FCC400" />
                  }
                  update={(val: any) => {
                    setRating(val);
                  }}
                />
              </View>
              <View style={styles.labelAndInpReviewBlock}>
                <Text style={styles.labelReview}>Add Detailed Review</Text>
                <TextInput
                  style={styles.inpReview}
                  placeholder="Enter your review"
                  placeholderTextColor={"#CFCFCF"}
                  textAlignVertical="top"
                  numberOfLines={8}
                  multiline
                />
              </View>
            </View>
            <View style={styles.btnSubmitBlock}>
              <Pressable style={styles.btnSubmit}>
                <Text style={styles.btnTextSubmit}>Submit</Text>
              </Pressable>
            </View>
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ModalAddReview;

const styles = StyleSheet.create({
  modalAddReviewComponent: {},
  overlayModalAddReview: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalAddReviewMainBlock: {
    position: "absolute",
    inset: 0,
    backgroundColor: "#fff",
    padding: 15,
    paddingTop: 20,
  },
  headerModalAddReview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },

  closeModalAddReviewIcon: {},
  titleModalAddReviewComponent: {
    fontSize: 26,
    fontWeight: "600",
  },
  deleteIconModalAddReviewComponent: {},

  sectionModalAddReviewScrollView: {
    paddingHorizontal: 6,
    paddingTop: 20,
    paddingBottom: 15,
  },
  sectionModalAddReview: {},
  imgNameAndAuthorOfThisBookAndBtnNovelBlock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  imgOfBook: {
    width: 122,
    height: 210,
    resizeMode: "contain",
  },
  nameAndAuthorOfBookAndBtnNovelBlock: {},
  nameOfBook: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  authorOfBook: {
    color: "#515151",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
  btnNovel: {
    backgroundColor: "#D9D9D9",
    borderRadius: 9,
    paddingVertical: 10,
    marginTop: 10,
  },
  btnTextNovel: {
    textAlign: "center",
    color: "#fff",
    fontSize: 22,
  },
  ratingAndLabelInpReviewBlock: {
    marginTop: 25,
  },
  ratingBlock: {},
  ratingTitle: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "500",
    color: "#939393",
  },
  labelAndInpReviewBlock: {
    marginTop: 25,
  },
  labelReview: {
    color: "#939393",
    fontSize: 22,
    fontWeight: "500",
  },
  inpReview: {
    fontSize: 22,
    fontWeight: "400",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: "#fff",
    marginTop: 10,
    width: "100%",
    height: 230,
    textAlignVertical: "top",
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  btnSubmitBlock: {
    marginTop: 30,
  },
  btnSubmit: {
    backgroundColor: "#00A9FF",
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  btnTextSubmit: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
  },
});
