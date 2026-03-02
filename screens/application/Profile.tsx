import React from "react";
import { StyleSheet, View } from "react-native";

const Profile = () => {
  return (
    <View style={styles.profileComponent}>
      <View style={styles.profileComponentBlock}>
        <View style={styles.headerProfileComponent}></View>
        <View style={styles.sectionProfileComponent}></View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileComponent: {},
  profileComponentBlock: {},
  headerProfileComponent: {},
  sectionProfileComponent: {},
});
