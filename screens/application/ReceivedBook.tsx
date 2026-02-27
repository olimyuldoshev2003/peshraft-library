import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ReceivedBook = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.receivedBookComponent}>
      <View style={styles.receivedBookComponentBlock}>
        <View style={styles.headerReceivedBookComponent}>
          <MaterialCommunityIcons
            name="arrow-left-thin-circle-outline"
            size={45}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <ScrollView
          contentContainerStyle={styles.sectionReceivedBookComponentScrollView}
          style={styles.sectionReceivedBookComponent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.greetingsAndNameOfUser}>Hello, Olim</Text>
          <View style={styles.imgOfBookBlock}>
            <Image
              source={require("../../assets/peshraft-library/home/tojikon.jpg")}
              style={styles.imgOfBook}
            />
          </View>
          <View style={styles.blockForText}>
            <Text style={styles.textNumber1}>
              Do you want to return the book?
            </Text>
            <Text style={styles.textNumber2}>
              When you reject a book, do you return it to the library?
            </Text>
          </View>
          <View style={styles.daysLeftAndBtnReturnBlock}>
            <View style={styles.iconAndDaysLeftBlock}>
              <Feather
                name="alert-octagon"
                size={40}
                color="#FF383C"
                style={styles.alertIcon}
              />
              <Text style={styles.daysLeft}>2 days left</Text>
            </View>
            <Pressable style={styles.btnReturnTheBook}>
              <Text style={styles.btnTextReturnTheBook}>Return the book</Text>
            </Pressable>
          </View>
          <View style={styles.otherBooksContainer}>
            <Text style={styles.titleOtherBooks}>You may like this</Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={styles.otherBooksBlockScrollView}
              style={styles.otherBooksBlock}
            >
              {/* Book 1 */}
              <Pressable
                style={styles.otherBookImgAndName}
                onPress={() => {
                  navigation.navigate("Book", { id: 2 });
                }}
              >
                <Image
                  source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  style={styles.otherBookImg}
                />
                <Text style={styles.otherBookName}>Tojikon</Text>
              </Pressable>

              {/* Book 2 */}
              <Pressable
                style={styles.otherBookImgAndName}
                onPress={() => {
                  navigation.navigate("Book", { id: 3 });
                }}
              >
                <Image
                  source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  style={styles.otherBookImg}
                />
                <Text style={styles.otherBookName}>Tojikon</Text>
              </Pressable>

              {/* Book 3 */}
              <Pressable
                style={styles.otherBookImgAndName}
                onPress={() => {
                  navigation.navigate("Book", { id: 4 });
                }}
              >
                <Image
                  source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  style={styles.otherBookImg}
                />
                <Text style={styles.otherBookName}>Tojikon</Text>
              </Pressable>

              {/* Book 4 */}
              <Pressable
                style={styles.otherBookImgAndName}
                onPress={() => {
                  navigation.navigate("Book", { id: 5 });
                }}
              >
                <Image
                  source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  style={styles.otherBookImg}
                />
                <Text style={styles.otherBookName}>Tojikon</Text>
              </Pressable>
              {/* Book 5 */}
              <Pressable
                style={styles.otherBookImgAndName}
                onPress={() => {
                  navigation.navigate("Book", { id: 6 });
                }}
              >
                <Image
                  source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  style={styles.otherBookImg}
                />
                <Text style={styles.otherBookName}>Tojikon</Text>
              </Pressable>
              {/* Book 6 */}
              <Pressable
                style={styles.otherBookImgAndName}
                onPress={() => {
                  navigation.navigate("Book", { id: 7 });
                }}
              >
                <Image
                  source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  style={styles.otherBookImg}
                />
                <Text style={styles.otherBookName}>Tojikon</Text>
              </Pressable>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ReceivedBook;

const styles = StyleSheet.create({
  receivedBookComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  receivedBookComponentBlock: {
    padding: 18,
    paddingTop: 26,
  },
  headerReceivedBookComponent: {},
  sectionReceivedBookComponentScrollView: {
    marginTop: 20,
    gap: 20,
    paddingBottom: 100,
  },
  sectionReceivedBookComponent: {},
  greetingsAndNameOfUser: {
    color: "#636363",
    fontSize: 25,
    fontWeight: "600",
  },
  imgOfBookBlock: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgOfBook: {
    width: 200,
    height: 300,
    transform: [{ rotate: "-10deg" }],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#fff",
  },
  blockForText: {},
  textNumber1: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
  },
  textNumber2: {
    fontSize: 25,
    fontWeight: "400",
    textAlign: "center",
    color: "#939393",
  },
  daysLeftAndBtnReturnBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  iconAndDaysLeftBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  alertIcon: {},
  daysLeft: {
    color: "#FF383C",
    fontSize: 20,
    fontWeight: "400",
  },
  btnReturnTheBook: {
    backgroundColor: "#00A9FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btnTextReturnTheBook: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  otherBooksContainer: {
    marginTop: 10,
  },
  titleOtherBooks: {
    fontSize: 21,
    fontWeight: "500",
  },
  otherBooksBlockScrollView: {
    marginTop: 10,
    flexDirection: "row",
    gap: 10,
  },
  otherBooksBlock: {},

  // Styles with the same propertis and names
  ///////////////////////////////////////////
  otherBookImgAndName: {
    gap: 5,
  },
  otherBookImg: {
    width: 95,
    height: 145,
    borderRadius: 8,
  },
  otherBookName: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  },
  ///////////////////////////////////////////
});
