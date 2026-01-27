import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Duetime = () => {
  return (
    <View style={styles.duetimeComponent}>
      <View style={styles.duetimeComponentBlock}>
        <ScrollView
          contentContainerStyle={styles.duetimeNotificationsScrollView}
          style={styles.duetimeNotifications}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.duetimeNotificationsContainer}>
            <Text style={styles.duetimeNotificationsSentDay}>Yesterday</Text>
            <View style={styles.duetimeNotificationsBlockOfThisDay}>
              {/* Duetime Notification 1 */}
              <View style={styles.duetimeNotification}>
                <Image
                  source={require("../../assets/peshraft-library/home/duetime.jpg")}
                  style={styles.duetimeNotificationImg}
                />
                <View
                  style={styles.duetimeNotificationTitleAndDescriptionBlock}
                >
                  <Text style={styles.duetimeNotificationTitle}>
                    Overdue book
                  </Text>
                  <Text style={styles.duetimeNotificationDescription}>
                    Dear Anisa.
                    This is a reminder that the deadline to return
                    the book “Tojikon” ends tomorrow.Please make sure to return
                    the book on time.
                  </Text>
                  <Text style={styles.duetimeNotificationTime}>06:47</Text>
                </View>
              </View>

              {/* Duetime Notification 2 */}
              <View style={styles.duetimeNotification}>
                <Image
                  source={require("../../assets/peshraft-library/home/duetime.jpg")}
                  style={styles.duetimeNotificationImg}
                />
                <View
                  style={styles.duetimeNotificationTitleAndDescriptionBlock}
                >
                  <Text style={styles.duetimeNotificationTitle}>
                    Overdue book
                  </Text>
                  <Text style={styles.duetimeNotificationDescription}>
                    Dear Anisa.
                    This is a reminder that the deadline to return
                    the book “Tojikon” ends tomorrow.Please make sure to return
                    the book on time.
                  </Text>
                  <Text style={styles.duetimeNotificationTime}>06:47</Text>
                </View>
              </View>

              {/* Duetime Notification 3 */}
              <View style={styles.duetimeNotification}>
                <Image
                  source={require("../../assets/peshraft-library/home/duetime.jpg")}
                  style={styles.duetimeNotificationImg}
                />
                <View
                  style={styles.duetimeNotificationTitleAndDescriptionBlock}
                >
                  <Text style={styles.duetimeNotificationTitle}>
                    Overdue book
                  </Text>
                  <Text style={styles.duetimeNotificationDescription}>
                    Dear Anisa.
                    This is a reminder that the deadline to return
                    the book “Tojikon” ends tomorrow.Please make sure to return
                    the book on time.
                  </Text>
                  <Text style={styles.duetimeNotificationTime}>06:47</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Duetime;

const styles = StyleSheet.create({
  duetimeComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  duetimeComponentBlock: {
    paddingHorizontal: 16,
  },
  duetimeNotificationsScrollView: {},
  duetimeNotifications: {
    paddingHorizontal: 7,
    paddingBottom: 55,
  },
  duetimeNotificationsContainer: {},
  duetimeNotificationsSentDay: {
    textAlign: "center",
    color: "#9E9E9E",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
  },
  duetimeNotificationsBlockOfThisDay: {
    marginTop: 15,
    gap: 15,
  },

  // Styles with the same name and properties
  /////////////////////////////////////////////
  duetimeNotification: {
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
  duetimeNotificationImg: {
    width: "100%",
    height: 95,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  duetimeNotificationTitleAndDescriptionBlock: {
    padding: 15,
    gap: 6,
  },
  duetimeNotificationTitle: {
    fontSize: 25,
    fontWeight: "700",
    color: "#000",
  },
  duetimeNotificationDescription: {
    fontSize: 18,
    fontWeight: "400",
    color: "#000",
  },
  duetimeNotificationTime: {
    fontSize: 14,
    fontWeight: "400",
    color: "#9E9E9E",
    textAlign: "right",
  },
  /////////////////////////////////////////////
});
