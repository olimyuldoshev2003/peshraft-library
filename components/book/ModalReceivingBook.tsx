import AntDesign from "@expo/vector-icons/AntDesign";
import React, { Dispatch, SetStateAction } from "react";
import {
  GestureResponderEvent,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ModalReceivingBook = ({
  modalReceivingBook,
  setModalReceivingBook,
}: {
  modalReceivingBook: boolean;
  setModalReceivingBook: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal
      visible={modalReceivingBook}
      style={styles.modalReceivingBookComponent}
      animationType="slide"
      transparent={true}
    >
      <Pressable
        style={styles.overlayModalReceivingBook}
        onPress={() => {
          setModalReceivingBook(false);
        }}
      >
        <Pressable
          style={styles.modalReceivingBookMainBlock}
          onPress={(event: GestureResponderEvent) => {
            event.stopPropagation();
          }}
        >
          <View style={styles.headerModalReceivingBook}>
            <View
              style={styles.closeModalIconAndTitleModalReceivingBookComponent}
            >
              <AntDesign
                style={styles.closeModalReceivingBookIcon}
                name="close"
                size={25}
                color="black"
                onPress={() => {
                  setModalReceivingBook(false);
                }}
              />
              <Text style={styles.titleModalReceivingBookComponent}>
                Receive a book
              </Text>
              <View></View>
            </View>
            <View style={styles.imgNameAndAuthorOfThisBookBlock}>
              <Image
                source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                style={styles.imgOfBook}
              />
              <View style={styles.nameAndAuthorOfBookBlock}>
                <Text style={styles.nameOfBook}>Tojikon</Text>
                <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ModalReceivingBook;

const styles = StyleSheet.create({
  modalReceivingBookComponent: {},
  overlayModalReceivingBook: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalReceivingBookMainBlock: {
    position: "absolute",
    inset: 0,
    backgroundColor: "#fff",
  },
  headerModalReceivingBook: {
    backgroundColor: "#DDEEFE",
    paddingVertical: 20,
  },
  closeModalIconAndTitleModalReceivingBookComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  closeModalReceivingBookIcon: {},
  titleModalReceivingBookComponent: {
    fontSize: 23,
    fontWeight: "600",
  },
  imgNameAndAuthorOfThisBookBlock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginTop: 5,
  },
  imgOfBook: {
    width: 112,
    height: 200,
    resizeMode: "contain",
  },
  nameAndAuthorOfBookBlock: {},
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
});
