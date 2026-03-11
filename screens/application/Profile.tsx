import {
  Entypo,
  FontAwesome,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const Profile = () => {

  const navigation:any = useNavigation()

  return (
    <View style={styles.profileComponent}>
      <View style={styles.profileComponentBlock}>
        <View style={styles.headerProfileComponent}>
          <Text style={styles.titleProfileComponent}>My Profile</Text>
          <View style={styles.userImgFullnameAndEmailAndBtnEditBlock}>
            <View style={styles.userImgBlock}>
              <Image
                source={require("../../assets/peshraft-library/profile/profile-img.jpg")}
                style={styles.userImg}
              />
            </View>
            <View style={styles.userFullnameEmailAndBtnEditBlock}>
              <Text style={styles.userFullname}>Olim Yuldoshev</Text>
              <Text style={styles.userEmail}>oyuldoshev39@gmail.com</Text>
              <View style={styles.btnEditBlock}>
                <Pressable style={styles.btnEdit}>
                  <Text style={styles.btnTextEdit}>Edit Profile</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={styles.sectionProfileComponentScrollView}
          style={styles.sectionProfileComponent}
        >
          {/* General */}
          <View
            style={[styles.generalSection, styles.generalAndAppearanceSection]}
          >
            <Text style={styles.titleOfGeneralAndAppearanceSections}>
              General
            </Text>
            <View
              style={[
                styles.generalFunctionalitiesBlock,
                styles.generalAndAppearanceFunctionalitiesBlock,
              ]}
            >
              {/* History Book */}
              <TouchableHighlight
                style={[styles.btnFunc, styles.historyBookBtn]}
                onPress={() => {
                  navigation.navigate("HistoryBook");
                }}
                underlayColor={"#f0f0f0"}
              >
                <View style={styles.iconFuncTypeAndIconRightSideBlock}>
                  <View style={styles.iconAndFuncTypeBlock}>
                    <View style={styles.iconBlock}>
                      <FontAwesome
                        name="clock-o"
                        size={32}
                        color="black"
                        style={[styles.icon, styles.historyBookIcon]}
                      />
                    </View>
                    <Text style={styles.funcType}>History Book</Text>
                  </View>
                  <Entypo
                    name="chevron-small-right"
                    size={37}
                    color={"black"}
                    style={styles.rightSideIcon}
                  />
                </View>
              </TouchableHighlight>

              {/* Feedback */}
              <TouchableHighlight
                style={[styles.btnFunc, styles.feedbackBtn]}
                // onPress={() => {
                //   navigation.navigate("GestureControl");
                // }}
                underlayColor={"#f0f0f0"}
              >
                <View style={styles.iconFuncTypeAndIconRightSideBlock}>
                  <View style={styles.iconAndFuncTypeBlock}>
                    <View style={styles.iconBlock}>
                      <MaterialIcons
                        name="feedback"
                        size={32}
                        color="black"
                        style={styles.icon}
                      />
                    </View>
                    <Text style={styles.funcType}>Feedback</Text>
                  </View>
                  <Entypo
                    name="chevron-small-right"
                    size={37}
                    color={"black"}
                    style={styles.rightSideIcon}
                  />
                </View>
              </TouchableHighlight>
            </View>
          </View>

          {/* Appearance */}
          <View
            style={[
              styles.appearanceSection,
              styles.generalAndAppearanceSection,
            ]}
          >
            <Text style={styles.titleOfGeneralAndAppearanceSections}>
              Appearance
            </Text>
            <View
              style={[
                styles.appearanceFunctionalitiesBlock,
                styles.generalAndAppearanceFunctionalitiesBlock,
              ]}
            >
              {/* Language */}
              <TouchableHighlight
                style={[styles.btnFuncShownType, styles.languageBtn]}
                underlayColor={"#f0f0f0"}
                // onPress={() => {
                //   navigation.navigate("Language");
                // }}
              >
                <View
                  style={
                    styles.iconFuncTypeShownSelectedFuncAndIconRightSideBlock
                  }
                >
                  <View style={styles.iconFuncTypeShownSelectedFuncBlock}>
                    <View style={styles.iconAndFuncTypeBlock}>
                      <View style={styles.iconBlock}>
                        <Fontisto
                          name="world-o"
                          size={32}
                          color="black"
                          style={styles.icon}
                        />
                      </View>
                      <Text style={styles.funcType}>Language</Text>
                    </View>
                    <Text style={styles.selectedFunc}>English</Text>
                  </View>
                  <Entypo
                    name="chevron-small-right"
                    size={37}
                    color={"black"}
                    style={styles.rightSideIcon}
                  />
                </View>
              </TouchableHighlight>

              <TouchableHighlight style={[styles.btnFunc, styles.updateAppBtn]}>
                <View style={styles.iconFuncTypeAndIconRightSideBlock}>
                  <View style={styles.iconAndFuncTypeBlock}>
                    <View style={styles.iconBlock}>
                      <Entypo
                        name="cycle"
                        size={30}
                        color="black"
                        style={styles.icon}
                      />
                    </View>
                    <Text style={styles.funcType}>Update app</Text>
                  </View>
                  <Entypo
                    name="chevron-small-right"
                    size={37}
                    color={"black"}
                    style={styles.rightSideIcon}
                  />
                </View>
              </TouchableHighlight>

              <TouchableHighlight style={[styles.btnFunc, styles.logoutBtn]}>
                <View style={styles.iconFuncTypeAndIconRightSideBlock}>
                  <View style={styles.iconAndFuncTypeBlock}>
                    <View style={styles.iconBlock}>
                      <MaterialIcons
                        name="logout"
                        size={30}
                        color="black"
                        style={styles.icon}
                      />
                    </View>
                    <Text style={styles.funcType}>Logout</Text>
                  </View>
                  <Entypo
                    name="chevron-small-right"
                    size={37}
                    color={"black"}
                    style={styles.rightSideIcon}
                  />
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileComponentBlock: {
    padding: 20,
    paddingTop: 35,
  },
  headerProfileComponent: {},
  titleProfileComponent: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500",
  },

  sectionProfileComponentScrollView: {
    paddingBottom: 170,
  },
  sectionProfileComponent: {},
  userImgFullnameAndEmailAndBtnEditBlock: {
    marginTop: 20,
    flexDirection: "row",
    // alignItems: "center"
    gap: 15,
  },
  userImgBlock: {},
  userImg: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  userFullnameEmailAndBtnEditBlock: {},
  userFullname: {
    fontSize: 23,
    fontWeight: "600",
  },
  userEmail: {
    fontSize: 18,
    fontWeight: "400",
    color: "#939393",
  },
  btnEditBlock: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  btnEdit: {
    backgroundColor: "#00A9FF",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 8,
  },
  btnTextEdit: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },

  ////////////////////////////////////////////////////

  generalSection: {},
  generalFunctionalitiesBlock: {},
  historyBookBtn: {},
  historyBookIcon: {
    paddingVertical: 1,
    paddingHorizontal: 4,
  },

  feedbackBtn: {},

  appearanceSection: {},
  appearanceFunctionalitiesBlock: {},
  languageBtn: {},
  updateAppBtn: {},
  logoutBtn: {},

  // Styles with the same properties
  generalAndAppearanceSection: {
    marginTop: 20,
    // backgroundColor: "#fff",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    // elevation: 5,
    // padding: 10,
    borderRadius: 12,
    gap: 12,
  },
  titleOfGeneralAndAppearanceSections: {
    color: "#000",
    fontSize: 22,
    fontWeight: "500",
  },
  generalAndAppearanceFunctionalitiesBlock: {
    gap: 20,
  },

  // Styles with the same properties for buttons, which showed selected type of functionality
  btnFuncShownType: {
    borderRadius: 12,
  },
  iconFuncTypeShownSelectedFuncAndIconRightSideBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconFuncTypeShownSelectedFuncBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconAndFuncTypeBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconBlock: {
    backgroundColor: "#D9D9D9",
    padding: 10,
    borderRadius: 50,
  },
  icon: {},
  funcType: {
    fontSize: 18,
    fontWeight: "400",
    color: "#000",
  },
  selectedFunc: {
    fontSize: 13,
    fontWeight: "400",

    color: "#626262",
  },
  rightSideIcon: {},

  // Styles with the same properties for buttons, which didn't show selected type of functionality
  btnFunc: {
    borderRadius: 12,
  },
  iconFuncTypeAndIconRightSideBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  ////////////////////////////////////////////////////
});
