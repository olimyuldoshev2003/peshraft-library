import { Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
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

const HistoryBook = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.historyBookComponent}>
      <View style={styles.historyBookComponentBlock}>
        <View style={styles.headerHistoryBookComponent}>
          <MaterialCommunityIcons
            name="arrow-left-thin-circle-outline"
            size={45}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.titleHistoryBookComponent}>History book</Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.sectionHistoryBookComponentScrollView}
          style={styles.sectionHistoryBookComponent}
          showsVerticalScrollIndicator={false}
        >
          {/* History Book 24.03.2025 */}
          <View style={styles.historyBookContainer}>
            <Text style={styles.historyBookUploadedDay}>24.03.2025</Text>
            <View style={styles.historyBookOfThisDay}>
              {/* Book 1 in history book */}
              <Pressable
                onPress={() => {
                  navigation.navigate("Book");
                }}
                style={styles.historyBookMainBlock}
              >
                <View style={styles.historyBookContainerBlock1}>
                  <Image
                    style={styles.historyBookImg}
                    source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  />
                </View>
                <View style={styles.historyBookContainerBlock2}>
                  <View style={styles.nameAuthorOfBookAndHeartIcon}>
                    <View style={styles.nameAndAuthorOfBook}>
                      <Text style={styles.nameOfBook}>Tojikon</Text>
                      <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
                    </View>
                    {/* <FontAwesome
                      name="heart"
                      size={20}
                      color="red"
                      style={styles.heartIcon}
                    /> */}
                  </View>
                  <View style={styles.rateOfBookContainer}>
                    <View style={styles.rateOfBookBlock}>
                      <Entypo
                        name="star"
                        size={13}
                        color="orange"
                        style={styles.rateStarIcon}
                      />
                      <Text style={styles.rateInNumber}>4.0</Text>
                    </View>
                  </View>
                  <View style={styles.numberOfReadersAndForwardIconBlock}>
                    <View style={styles.userIconNumberOfReadersAndTextBlock}>
                      <Feather
                        name="users"
                        size={24}
                        color="#939393"
                        style={styles.userIcon}
                      />
                      <View style={styles.numberAndTextReadersBlock}>
                        <Text style={styles.numberOfReaders}>24</Text>
                        <Text style={styles.titleOfReaders}>readers</Text>
                      </View>
                    </View>
                    {/* <View style={styles.forwardIconBlock}>
                      <FontAwesome6
                        name="arrow-right-long"
                        size={13}
                        color="black"
                        style={styles.forwardIcon}
                      />
                    </View> */}
                  </View>
                </View>
              </Pressable>

              {/* Book 2 in history book */}
              <Pressable
                onPress={() => {
                  navigation.navigate("Book");
                }}
                style={styles.historyBookMainBlock}
              >
                <View style={styles.historyBookContainerBlock1}>
                  <Image
                    style={styles.historyBookImg}
                    source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  />
                </View>
                <View style={styles.historyBookContainerBlock2}>
                  <View style={styles.nameAuthorOfBookAndHeartIcon}>
                    <View style={styles.nameAndAuthorOfBook}>
                      <Text style={styles.nameOfBook}>Tojikon</Text>
                      <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
                    </View>
                    {/* <FontAwesome
                      name="heart"
                      size={20}
                      color="red"
                      style={styles.heartIcon}
                    /> */}
                  </View>
                  <View style={styles.rateOfBookContainer}>
                    <View style={styles.rateOfBookBlock}>
                      <Entypo
                        name="star"
                        size={13}
                        color="orange"
                        style={styles.rateStarIcon}
                      />
                      <Text style={styles.rateInNumber}>4.0</Text>
                    </View>
                  </View>
                  <View style={styles.numberOfReadersAndForwardIconBlock}>
                    <View style={styles.userIconNumberOfReadersAndTextBlock}>
                      <Feather
                        name="users"
                        size={24}
                        color="#939393"
                        style={styles.userIcon}
                      />
                      <View style={styles.numberAndTextReadersBlock}>
                        <Text style={styles.numberOfReaders}>24</Text>
                        <Text style={styles.titleOfReaders}>readers</Text>
                      </View>
                    </View>
                    {/* <View style={styles.forwardIconBlock}>
                      <FontAwesome6
                        name="arrow-right-long"
                        size={13}
                        color="black"
                        style={styles.forwardIcon}
                      />
                    </View> */}
                  </View>
                </View>
              </Pressable>
              {/* Book 2 in history book */}
              <Pressable
                onPress={() => {
                  navigation.navigate("Book");
                }}
                style={styles.historyBookMainBlock}
              >
                <View style={styles.historyBookContainerBlock1}>
                  <Image
                    style={styles.historyBookImg}
                    source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  />
                </View>
                <View style={styles.historyBookContainerBlock2}>
                  <View style={styles.nameAuthorOfBookAndHeartIcon}>
                    <View style={styles.nameAndAuthorOfBook}>
                      <Text style={styles.nameOfBook}>Tojikon</Text>
                      <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
                    </View>
                    {/* <FontAwesome
                      name="heart"
                      size={20}
                      color="red"
                      style={styles.heartIcon}
                    /> */}
                  </View>
                  <View style={styles.rateOfBookContainer}>
                    <View style={styles.rateOfBookBlock}>
                      <Entypo
                        name="star"
                        size={13}
                        color="orange"
                        style={styles.rateStarIcon}
                      />
                      <Text style={styles.rateInNumber}>4.0</Text>
                    </View>
                  </View>
                  <View style={styles.numberOfReadersAndForwardIconBlock}>
                    <View style={styles.userIconNumberOfReadersAndTextBlock}>
                      <Feather
                        name="users"
                        size={24}
                        color="#939393"
                        style={styles.userIcon}
                      />
                      <View style={styles.numberAndTextReadersBlock}>
                        <Text style={styles.numberOfReaders}>24</Text>
                        <Text style={styles.titleOfReaders}>readers</Text>
                      </View>
                    </View>
                    {/* <View style={styles.forwardIconBlock}>
                      <FontAwesome6
                        name="arrow-right-long"
                        size={13}
                        color="black"
                        style={styles.forwardIcon}
                      />
                    </View> */}
                  </View>
                </View>
              </Pressable>
              {/* Book 2 in history book */}
              <Pressable
                onPress={() => {
                  navigation.navigate("Book");
                }}
                style={styles.historyBookMainBlock}
              >
                <View style={styles.historyBookContainerBlock1}>
                  <Image
                    style={styles.historyBookImg}
                    source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  />
                </View>
                <View style={styles.historyBookContainerBlock2}>
                  <View style={styles.nameAuthorOfBookAndHeartIcon}>
                    <View style={styles.nameAndAuthorOfBook}>
                      <Text style={styles.nameOfBook}>Tojikon</Text>
                      <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
                    </View>
                    {/* <FontAwesome
                      name="heart"
                      size={20}
                      color="red"
                      style={styles.heartIcon}
                    /> */}
                  </View>
                  <View style={styles.rateOfBookContainer}>
                    <View style={styles.rateOfBookBlock}>
                      <Entypo
                        name="star"
                        size={13}
                        color="orange"
                        style={styles.rateStarIcon}
                      />
                      <Text style={styles.rateInNumber}>4.0</Text>
                    </View>
                  </View>
                  <View style={styles.numberOfReadersAndForwardIconBlock}>
                    <View style={styles.userIconNumberOfReadersAndTextBlock}>
                      <Feather
                        name="users"
                        size={24}
                        color="#939393"
                        style={styles.userIcon}
                      />
                      <View style={styles.numberAndTextReadersBlock}>
                        <Text style={styles.numberOfReaders}>24</Text>
                        <Text style={styles.titleOfReaders}>readers</Text>
                      </View>
                    </View>
                    {/* <View style={styles.forwardIconBlock}>
                      <FontAwesome6
                        name="arrow-right-long"
                        size={13}
                        color="black"
                        style={styles.forwardIcon}
                      />
                    </View> */}
                  </View>
                </View>
              </Pressable>
              {/* Book 2 in history book */}
              <Pressable
                onPress={() => {
                  navigation.navigate("Book");
                }}
                style={styles.historyBookMainBlock}
              >
                <View style={styles.historyBookContainerBlock1}>
                  <Image
                    style={styles.historyBookImg}
                    source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  />
                </View>
                <View style={styles.historyBookContainerBlock2}>
                  <View style={styles.nameAuthorOfBookAndHeartIcon}>
                    <View style={styles.nameAndAuthorOfBook}>
                      <Text style={styles.nameOfBook}>Tojikon</Text>
                      <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
                    </View>
                    {/* <FontAwesome
                      name="heart"
                      size={20}
                      color="red"
                      style={styles.heartIcon}
                    /> */}
                  </View>
                  <View style={styles.rateOfBookContainer}>
                    <View style={styles.rateOfBookBlock}>
                      <Entypo
                        name="star"
                        size={13}
                        color="orange"
                        style={styles.rateStarIcon}
                      />
                      <Text style={styles.rateInNumber}>4.0</Text>
                    </View>
                  </View>
                  <View style={styles.numberOfReadersAndForwardIconBlock}>
                    <View style={styles.userIconNumberOfReadersAndTextBlock}>
                      <Feather
                        name="users"
                        size={24}
                        color="#939393"
                        style={styles.userIcon}
                      />
                      <View style={styles.numberAndTextReadersBlock}>
                        <Text style={styles.numberOfReaders}>24</Text>
                        <Text style={styles.titleOfReaders}>readers</Text>
                      </View>
                    </View>
                    {/* <View style={styles.forwardIconBlock}>
                      <FontAwesome6
                        name="arrow-right-long"
                        size={13}
                        color="black"
                        style={styles.forwardIcon}
                      />
                    </View> */}
                  </View>
                </View>
              </Pressable>
              {/* Book 2 in history book */}
              <Pressable
                onPress={() => {
                  navigation.navigate("Book");
                }}
                style={styles.historyBookMainBlock}
              >
                <View style={styles.historyBookContainerBlock1}>
                  <Image
                    style={styles.historyBookImg}
                    source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  />
                </View>
                <View style={styles.historyBookContainerBlock2}>
                  <View style={styles.nameAuthorOfBookAndHeartIcon}>
                    <View style={styles.nameAndAuthorOfBook}>
                      <Text style={styles.nameOfBook}>Tojikon</Text>
                      <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
                    </View>
                    {/* <FontAwesome
                      name="heart"
                      size={20}
                      color="red"
                      style={styles.heartIcon}
                    /> */}
                  </View>
                  <View style={styles.rateOfBookContainer}>
                    <View style={styles.rateOfBookBlock}>
                      <Entypo
                        name="star"
                        size={13}
                        color="orange"
                        style={styles.rateStarIcon}
                      />
                      <Text style={styles.rateInNumber}>4.0</Text>
                    </View>
                  </View>
                  <View style={styles.numberOfReadersAndForwardIconBlock}>
                    <View style={styles.userIconNumberOfReadersAndTextBlock}>
                      <Feather
                        name="users"
                        size={24}
                        color="#939393"
                        style={styles.userIcon}
                      />
                      <View style={styles.numberAndTextReadersBlock}>
                        <Text style={styles.numberOfReaders}>24</Text>
                        <Text style={styles.titleOfReaders}>readers</Text>
                      </View>
                    </View>
                    {/* <View style={styles.forwardIconBlock}>
                      <FontAwesome6
                        name="arrow-right-long"
                        size={13}
                        color="black"
                        style={styles.forwardIcon}
                      />
                    </View> */}
                  </View>
                </View>
              </Pressable>
              {/* Book 2 in history book */}
              <Pressable
                onPress={() => {
                  navigation.navigate("Book");
                }}
                style={styles.historyBookMainBlock}
              >
                <View style={styles.historyBookContainerBlock1}>
                  <Image
                    style={styles.historyBookImg}
                    source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                  />
                </View>
                <View style={styles.historyBookContainerBlock2}>
                  <View style={styles.nameAuthorOfBookAndHeartIcon}>
                    <View style={styles.nameAndAuthorOfBook}>
                      <Text style={styles.nameOfBook}>Tojikon</Text>
                      <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
                    </View>
                    {/* <FontAwesome
                      name="heart"
                      size={20}
                      color="red"
                      style={styles.heartIcon}
                    /> */}
                  </View>
                  <View style={styles.rateOfBookContainer}>
                    <View style={styles.rateOfBookBlock}>
                      <Entypo
                        name="star"
                        size={13}
                        color="orange"
                        style={styles.rateStarIcon}
                      />
                      <Text style={styles.rateInNumber}>4.0</Text>
                    </View>
                  </View>
                  <View style={styles.numberOfReadersAndForwardIconBlock}>
                    <View style={styles.userIconNumberOfReadersAndTextBlock}>
                      <Feather
                        name="users"
                        size={24}
                        color="#939393"
                        style={styles.userIcon}
                      />
                      <View style={styles.numberAndTextReadersBlock}>
                        <Text style={styles.numberOfReaders}>24</Text>
                        <Text style={styles.titleOfReaders}>readers</Text>
                      </View>
                    </View>
                    {/* <View style={styles.forwardIconBlock}>
                      <FontAwesome6
                        name="arrow-right-long"
                        size={13}
                        color="black"
                        style={styles.forwardIcon}
                      />
                    </View> */}
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HistoryBook;

const styles = StyleSheet.create({
  historyBookComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  historyBookComponentBlock: {
    padding: 10,
    paddingTop: 30,
  },
  headerHistoryBookComponent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 81,
  },
  titleHistoryBookComponent: {
    fontSize: 23,
    fontWeight: "400",
  },
  sectionHistoryBookComponentScrollView: {
    gap: 22,
    paddingBottom: 105,
  },
  sectionHistoryBookComponent: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  historyBookContainer: {},
  historyBookUploadedDay: {
    color: "#4D4D4D",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  historyBookOfThisDay: {
    marginTop: 10,
    gap: 20,
  },

  // Styles with the same names and properties
  ////////////////////////////////////////////
  historyBookMainBlock: {
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  historyBookContainerBlock1: {
    backgroundColor: "#F5EABD",
    padding: 20,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  historyBookImg: {
    width: 82,
    height: 118,
    resizeMode: "contain",
  },
  historyBookContainerBlock2: {
    padding: 10,
  },
  nameAuthorOfBookAndHeartIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  nameAndAuthorOfBook: {
    justifyContent: "space-between",
  },
  nameOfBook: {
    fontSize: 22,
    fontWeight: "500",
  },
  authorOfBook: {
    color: "#515151",
    fontSize: 16,
    fontWeight: "400",
  },
  heartIcon: {},
  rateOfBookContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  rateOfBookBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "#FFF8E0",
    padding: 2,
    borderRadius: 8,
  },
  rateStarIcon: {},
  rateInNumber: {
    fontSize: 10,
    fontWeight: "400",
  },

  numberOfReadersAndForwardIconBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "79%",
  },
  userIconNumberOfReadersAndTextBlock: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },
  userIcon: {},
  numberAndTextReadersBlock: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },
  numberOfReaders: {
    fontSize: 18,
    fontWeight: "600",
  },
  titleOfReaders: {
    fontSize: 14,
    fontWeight: "600",
  },
  forwardIconBlock: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 6,
  },
  forwardIcon: {},
  ////////////////////////////////////////////
});
