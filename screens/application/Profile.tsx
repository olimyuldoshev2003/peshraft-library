import { useAuth } from "@/context/AuthContext";
import {
  Entypo,
  FontAwesome,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Profile = () => {
  const navigation: any = useNavigation();

  const [loading, setLoading] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logout();
      setShowLogoutModal(false);
    } finally {
      setLoading(false);
      Alert.alert("Logged out", "You have been successfully logged out.", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00A9FF" />
        <Text style={{ marginTop: 10, color: "#555" }}>Logging out...</Text>
      </View>
    );
  }

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
                <Pressable
                  style={styles.btnEdit}
                  onPress={() => {
                    navigation.navigate("EditUser");
                  }}
                >
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
                onPress={() => {
                  navigation.navigate("Feedback");
                }}
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

              <TouchableHighlight
                style={[styles.btnFunc, styles.logoutBtn]}
                onPress={() => setShowLogoutModal(true)}
                underlayColor={"#f0f0f0"}
              >
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

      {/* Logout Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showLogoutModal}
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowLogoutModal(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <View style={styles.modalIconContainer}>
                  <MaterialIcons name="logout" size={60} color="#FF3B30" />
                </View>
                <Text style={styles.modalTitle}>Logout</Text>
                <Text style={styles.modalMessage}>
                  Are you sure you want to logout from your account?
                </Text>
                <View style={styles.modalButtons}>
                  <Pressable
                    style={[styles.modalButton, styles.cancelButton]}
                    onPress={() => setShowLogoutModal(false)}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.modalButton, styles.logoutButton]}
                    onPress={handleLogout}
                  >
                    <Text style={styles.logoutButtonText}>Logout</Text>
                  </Pressable>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    width: "85%",
    maxWidth: 340,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalIconContainer: {
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 22,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "#F2F2F2",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  cancelButtonText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "600",
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
