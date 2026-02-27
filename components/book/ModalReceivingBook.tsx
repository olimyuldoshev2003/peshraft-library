import AntDesign from "@expo/vector-icons/AntDesign";
import React, { Dispatch, SetStateAction } from "react";
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
          <ScrollView
            contentContainerStyle={styles.sectionModalReceivingBookScrollView}
            style={styles.sectionModalReceivingBook}
          >
            {/* Full name */}
            <View
              style={[
                styles.labelAndInputFullNameBlock,
                styles.labelAndInputBlock,
              ]}
            >
              <Text style={[styles.label, styles.labelFullName]}>
                Full name
              </Text>
              <TextInput style={[styles.input, styles.inputFullName]} />
            </View>

            {/*Job title  */}
            <View
              style={[
                styles.labelAndInputJobTitleBlock,
                styles.labelAndInputBlock,
              ]}
            >
              <Text style={[styles.label, styles.labelJobTitle]}>
                Job Title
              </Text>
              <TextInput style={[styles.input, styles.inputJobTitle]} />
            </View>

            {/* Book name */}
            <View
              style={[
                styles.labelAndInputBookNameBlock,
                styles.labelAndInputBlock,
              ]}
            >
              <Text style={[styles.label, styles.labelBookName]}>
                Book name
              </Text>
              <TextInput style={[styles.input, styles.inputBookName]} />
            </View>

            {/* Writer */}
            <View
              style={[
                styles.labelAndInputWriterBlock,
                styles.labelAndInputBlock,
              ]}
            >
              <Text style={[styles.label, styles.labelWriter]}>Writer</Text>
              <TextInput style={[styles.input, styles.inputWriter]} />
            </View>

            {/*Data receiving*/}
            <View
              style={[
                styles.labelAndInputDataReceivingBlock,
                styles.labelAndInputBlock,
              ]}
            >
              <Text style={[styles.label, styles.labelDataReceiving]}>
                Data receiving
              </Text>
              <TextInput style={[styles.input, styles.inputDataReceiving]} />
            </View>
            {/*Data returning*/}
            <View
              style={[
                styles.labelAndInputDataReturningBlock,
                styles.labelAndInputBlock,
              ]}
            >
              <Text style={[styles.label, styles.labelDataReturning]}>
                Data returning
              </Text>
              <TextInput style={[styles.input, styles.inputDataReturning]} />
            </View>
          </ScrollView>
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

  sectionModalReceivingBookScrollView: {
    paddingTop: 10,
    paddingHorizontal: 10,
    gap: 15,
  },
  sectionModalReceivingBook: {},

  labelAndInputFullNameBlock: {},
  labelFullName: {},
  inputFullName: {},

  labelAndInputJobTitleBlock: {},
  labelJobTitle: {},
  inputJobTitle: {},

  labelAndInputBookNameBlock: {},
  labelBookName: {},
  inputBookName: {},

  labelAndInputWriterBlock: {},
  labelWriter: {},
  inputWriter: {},

  labelAndInputDataReceivingBlock: {},
  labelDataReceiving: {},
  inputDataReceiving: {},

  labelAndInputDataReturningBlock: {},
  labelDataReturning: {},
  inputDataReturning: {},

  // Styles with the same properties and names
  ///////////////////////////////////////////
  labelAndInputBlock: {},
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 3,
    color: "#646464",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    fontSize: 18,
    paddingVertical: 8,
    paddingBottom: 5,
    height: 35,
    color: "#646464",
  },
  //////////////////////1//1///////////////////
});
