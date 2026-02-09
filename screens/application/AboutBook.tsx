import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const AboutBook = () => {
  return (
    <View style={styles.aboutBookComponent}>
      <ScrollView
        contentContainerStyle={styles.aboutBookComponentBlockScrollView}
        style={styles.aboutBookComponentBlock}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.aboutBookBlock}>
          <Text style={styles.aboutBook}>
            Brief Information About The Great Gatsby The Great Gatsby is a
            classic American novel written by F. Scott Fitzgerald, published in
            1925. It is considered one of the greatest literary works of the
            20th century. The novel explores themes of the American Dream, love,
            wealth, illusion, and the moral decay hidden beneath the glamour of
            the 1920s. Background (Before the Story) The story takes place
            during the Jazz Age — a period of economic prosperity, lavish
            parties, and social change in the U.S. The narrator, Nick Carraway,
            moves to Long Island to learn about the bond business. Brief Info
            About Main Characters Jay Gatsby: Wealthy, enigmatic man driven by
            his dream of winning back Daisy; symbol of hope and illusion. Nick
            Carraway: The narrator; honest observer who tries to understand the
            world around him. Daisy Buchanan: Beautiful, charming, but
            conflicted; Gatsby’s idealized love.
          </Text>
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
            <Pressable style={styles.otherBookImgAndName}>
              <Image
                source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                style={styles.otherBookImg}
              />
              <Text style={styles.otherBookName}>Tojikon</Text>
            </Pressable>

            {/* Book 2 */}
            <Pressable style={styles.otherBookImgAndName}>
              <Image
                source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                style={styles.otherBookImg}
              />
              <Text style={styles.otherBookName}>Tojikon</Text>
            </Pressable>

            {/* Book 3 */}
            <Pressable style={styles.otherBookImgAndName}>
              <Image
                source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                style={styles.otherBookImg}
              />
              <Text style={styles.otherBookName}>Tojikon</Text>
            </Pressable>

            {/* Book 4 */}
            <Pressable style={styles.otherBookImgAndName}>
              <Image
                source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                style={styles.otherBookImg}
              />
              <Text style={styles.otherBookName}>Tojikon</Text>
            </Pressable>
            {/* Book 5 */}
            <Pressable style={styles.otherBookImgAndName}>
              <Image
                source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                style={styles.otherBookImg}
              />
              <Text style={styles.otherBookName}>Tojikon</Text>
            </Pressable>
            {/* Book 6 */}
            <Pressable style={styles.otherBookImgAndName}>
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
  );
};

export default AboutBook;

const styles = StyleSheet.create({
  aboutBookComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  aboutBookComponentBlockScrollView: {
    paddingBottom: 10,
  },
  aboutBookComponentBlock: {
    padding: 10,
  },
  aboutBookBlock: {},
  aboutBook: {
    fontSize: 16,
    fontWeight: "400",
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
  },
  otherBookName: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  },
  ///////////////////////////////////////////
});
