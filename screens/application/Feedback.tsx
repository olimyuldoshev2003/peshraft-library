import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Feedback = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.feedbackComponent}>
      <View style={styles.feedbackComponentBlock}>
        <View style={styles.headerFeedbackComponent}>
          <MaterialCommunityIcons
            name="arrow-left-thin-circle-outline"
            size={45}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.titleFeedbackComponent}>History book</Text>
        </View>
        <View style={styles.sectionFeedbackComponent}>
          <View style={styles.userImgFullnameAndEmailBlock}>
            <Image
              source={require("../../assets/peshraft-library/profile/profile-img.jpg")}
              style={styles.userImg}
            />
            <View style={styles.userFullnameAndEmailBlock}>
              <Text style={styles.userFullname}>Olim Yuldoshev</Text>
              <Text style={styles.userEmail}>oyuldoshev39@gmail.com</Text>
            </View>
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  feedbackComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  feedbackComponentBlock: {
    padding: 10,
    paddingTop: 30,
  },
  headerFeedbackComponent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 81,
  },
  titleFeedbackComponent: {
    fontSize: 23,
    fontWeight: "400",
  },
  sectionFeedbackComponent: {},
  userImgFullnameAndEmailBlock: {
    justifyContent: "center",
    alignItems: "center",
  },
  userImg: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  userFullnameAndEmailBlock: {
    marginTop: 10,
  },
  userFullname: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  userEmail: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
    color: "#939393",
  },
});
