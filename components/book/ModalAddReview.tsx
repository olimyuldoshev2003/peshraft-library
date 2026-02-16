import React, { Dispatch, SetStateAction } from "react";
import {
  GestureResponderEvent,
  Modal,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

const ModalAddReview = ({
  modalAddReview,
  setModalAddReview,
}: {
  modalAddReview: boolean;
  setModalAddReview: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal
      style={styles.modalAddReviewComponent}
      animationType="fade"
      transparent={true}
    >
      <Pressable style={styles.overlayModalAddReview}>
        <Pressable
          style={styles.modalAddReviewMainBlock}
          onPress={(event: GestureResponderEvent) => {
            event.stopPropagation();
          }}
        >
          <View style={styles.headerModalAddReview}></View>
          <View style={styles.sectionModalAddReview}></View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ModalAddReview;

const styles = StyleSheet.create({
  modalAddReviewComponent: {},
  overlayModalAddReview: {},
  modalAddReviewMainBlock: {},
  headerModalAddReview: {},
  sectionModalAddReview: {},
});
