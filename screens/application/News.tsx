import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const News = () => {
  return (
    <View style={styles.duetimeComponent}>
      <View style={styles.duetimeComponentBlock}>
        <ScrollView
          contentContainerStyle={styles.newsBlockScrollView}
          style={styles.newsBlock}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.newsContainer}>
            <Text style={styles.newsSentDay}>Yesterday</Text>
            <View style={styles.newsBlockOfThisDay}>
              {/* News Notification 1 */}
              <View style={styles.news}>
                <Image
                  source={require("../../assets/peshraft-library/home/event.jpg")}
                  style={styles.newsImg}
                />
                <View style={styles.newsTitleAndDescriptionBlock}>
                  <Text style={styles.newsTitle}>Event Announcement</Text>
                  <Text style={styles.newsDescription}>
                    📅 February 23, 2026 📍 Kohi Somon IT-GAP is coming! Join us
                    for an exciting IT event bringing together innovation,
                    technology, and networking.
                  </Text>
                  <Text style={styles.newsTime}>06:47</Text>
                </View>
              </View>

              {/* News Notification 2 */}
              <View style={styles.news}>
                <Image
                  source={require("../../assets/peshraft-library/home/event.jpg")}
                  style={styles.newsImg}
                />
                <View style={styles.newsTitleAndDescriptionBlock}>
                  <Text style={styles.newsTitle}>Event Announcement</Text>
                  <Text style={styles.newsDescription}>
                    📅 February 23, 2026 📍 Kohi Somon IT-GAP is coming! Join us
                    for an exciting IT event bringing together innovation,
                    technology, and networking.
                  </Text>
                  <Text style={styles.newsTime}>06:47</Text>
                </View>
              </View>

              {/* News Notification 3 */}
              <View style={styles.news}>
                <Image
                  source={require("../../assets/peshraft-library/home/event.jpg")}
                  style={styles.newsImg}
                />
                <View style={styles.newsTitleAndDescriptionBlock}>
                  <Text style={styles.newsTitle}>Event Announcement</Text>
                  <Text style={styles.newsDescription}>
                    📅 February 23, 2026 📍 Kohi Somon IT-GAP is coming! Join us
                    for an exciting IT event bringing together innovation,
                    technology, and networking.
                  </Text>
                  <Text style={styles.newsTime}>06:47</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  duetimeComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  duetimeComponentBlock: {
    paddingHorizontal: 16,
  },
  newsBlockScrollView: {},
  newsBlock: {
    paddingHorizontal: 7,
    paddingBottom: 55,
  },
  newsContainer: {},
  newsSentDay: {
    textAlign: "center",
    color: "#9E9E9E",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
  },
  newsBlockOfThisDay: {
    marginTop: 15,
    gap: 15,
  },

  // Styles with the same name and properties
  /////////////////////////////////////////////
  news: {
    borderRadius: 20,
    backgroundColor: "#fff",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 5,
  },
  newsImg: {
    width: "100%",
    height: 95,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  newsTitleAndDescriptionBlock: {
    padding: 15,
    gap: 6,
  },
  newsTitle: {
    fontSize: 25,
    fontWeight: "700",
    color: "#000",
  },
  newsDescription: {
    fontSize: 18,
    fontWeight: "400",
    color: "#000",
  },
  newsTime: {
    fontSize: 14,
    fontWeight: "400",
    color: "#9E9E9E",
    textAlign: "right",
  },
  /////////////////////////////////////////////
});
