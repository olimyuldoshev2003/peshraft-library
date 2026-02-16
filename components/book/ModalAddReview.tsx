import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { Dispatch, SetStateAction } from "react";
import {
  GestureResponderEvent,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ModalAddReview = ({
  modalAddReview,
  setModalAddReview,
}: {
  modalAddReview: boolean;
  setModalAddReview: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log(setModalAddReview);

  return (
    <Modal
      visible={modalAddReview}
      style={styles.modalAddReviewComponent}
      animationType="fade"
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
              size={37}
                          color="black"
                          onPress={() => {
                              setModalAddReview(false)
                          }}
            />
            <Text style={styles.titleModalAddReviewComponent}>Add Review</Text>
            <MaterialIcons
              style={styles.deleteIconModalAddReviewComponent}
              name="delete"
              size={37}
              color="red"
            />
          </View>
          <View style={styles.sectionModalAddReview}></View>
          <View style={styles.footerModalAddReview}></View>
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
    padding: 10,
    paddingTop: 20,
  },
  headerModalAddReview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  closeModalAddReviewIcon: {},
  titleModalAddReviewComponent: {
    fontSize: 26,
    fontWeight: "600",
  },
  deleteIconModalAddReviewComponent: {},

  sectionModalAddReview: {},
  footerModalAddReview: {},
});
