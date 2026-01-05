import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import { AdvancedCheckbox } from "react-native-advanced-checkbox";

const SignIn = () => {
  const [showAndHidePassword, setShowAndHidePassword] = useState(false);
  const [showAndHideConfirmPassword, setShowAndHideConfirmPassword] =
    useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.containerSignInComponent}
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : -60}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainerSignInComponent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.signInComponent}>
            <View style={styles.headerSignInComponent}>
              <Image
                source={require("../../assets/peshraft-library/auth/signInImg.jpg")}
                style={styles.imgHeaderSignInComponent}
              />
            </View>
            <View style={styles.sectionSignInComponent}>
              <View style={styles.formSignIn}>
                <Text style={styles.titleFormSignIn}>Create account</Text>
                <View style={styles.blockLabelsAndInputs}>
                  <View
                    style={[
                      styles.labelAndInputFullNameBlock,
                      styles.labelAndInputBlock,
                    ]}
                  >
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput style={styles.input} />
                  </View>
                  <View
                    style={[
                      styles.labelAndInputAgeBlock,
                      styles.labelAndInputBlock,
                    ]}
                  >
                    <Text style={styles.label}>Date of birth</Text>
                    <TextInput style={styles.input} />
                  </View>
                  <View
                    style={[
                      styles.labelAndInputPhoneNumberBlock,
                      styles.labelAndInputBlock,
                    ]}
                  >
                    <Text style={styles.label}>Phone number</Text>
                    <TextInput style={styles.input} />
                  </View>
                  <View
                    style={[
                      styles.labelAndInputEmailBlock,
                      styles.labelAndInputBlock,
                    ]}
                  >
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} />
                  </View>
                  <View
                    style={[
                      styles.labelAndInputPasswordBlock,
                      styles.labelAndInputBlock,
                    ]}
                  >
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.iconAndInputPasswordBlock}>
                      <TextInput
                        style={[styles.input, styles.inputPassword]}
                        secureTextEntry={!showAndHidePassword}
                        autoComplete="password-new"
                      />
                      {showAndHidePassword ? (
                        <AntDesign
                          name="eye-invisible"
                          size={30}
                          color="black"
                          style={styles.showAndHidePasswordIcon}
                          onPress={() => setShowAndHidePassword(false)}
                        />
                      ) : (
                        <AntDesign
                          name="eye"
                          size={30}
                          color="black"
                          style={styles.showAndHidePasswordIcon}
                          onPress={() => setShowAndHidePassword(true)}
                        />
                      )}
                    </View>
                  </View>
                  {/* <View
                    style={[
                      styles.labelAndInputConfirmPasswordBlock,
                      styles.labelAndInputBlock,
                    ]}
                  >
                    <Text style={styles.label}>Confirm Password</Text>
                    <View style={styles.iconAndInputConfirmPasswordBlock}>
                      <TextInput
                        style={[styles.input, styles.inputConfirmPassword]}
                        secureTextEntry={!showAndHideConfirmPassword}
                        autoComplete="password-new"
                      />
                      {showAndHideConfirmPassword ? (
                        <AntDesign
                          name="eye-invisible"
                          size={30}
                          color="black"
                          style={styles.showAndHidePasswordIcon}
                          onPress={() => setShowAndHideConfirmPassword(false)}
                        />
                      ) : (
                        <AntDesign
                          name="eye"
                          size={30}
                          color="black"
                          style={styles.showAndHidePasswordIcon}
                          onPress={() => setShowAndHideConfirmPassword(true)}
                        />
                      )}
                    </View>
                  </View> */}
                  <View style={styles.checkboxOfIsPeshraftVolunteer}>
                    <AdvancedCheckbox
                      value={checked}
                      onValueChange={(value) =>
                        setChecked(typeof value === "boolean" ? value : false)
                      }
                      label="I’m a volunteer of Peshraft"
                      checkedColor="#007AFF"
                      uncheckedColor="#ccc"
                      size={22}
                    />
                  </View>
                  <View style={styles.btnSignUpAndSignInNavBlock}>
                    <Pressable style={styles.btnSignUp}>
                      <Text style={styles.btnTextSignUp}>Sign Up</Text>
                    </Pressable>
                    <View style={styles.blockTitleAndBtnNavSignIn}>
                      <Text style={styles.titleAndBtnNavSignIn}>
                        Already have an account?
                      </Text>
                      <Pressable style={styles.btnNavSignIn}>
                        <Text style={styles.btnTextNavSignIn}> Sign In</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  containerSignInComponent: {},
  scrollContainerSignInComponent: {
    // paddingBottom: 80,
  },
  signInComponent: {},
  headerSignInComponent: {},
  imgHeaderSignInComponent: {
    width: "100%",
    height: 280,
  },
  sectionSignInComponent: {},
  formSignIn: {
    paddingVertical: 10,
    paddingHorizontal: 13,
  },
  titleFormSignIn: {
    fontSize: 20,
    fontWeight: "700",
  },
  blockLabelsAndInputs: {
    marginTop: 10,
    gap:5,
  },
  labelAndInputFullNameBlock: {},
  labelAndInputAgeBlock: {},
  labelAndInputPhoneNumberBlock: {},
  labelAndInputEmailBlock: {},
  labelAndInputPasswordBlock: {},
  iconAndInputPasswordBlock: {
    position: "relative",
  },
  inputPassword: {},
  labelAndInputConfirmPasswordBlock: {},
  iconAndInputConfirmPasswordBlock: {
    position: "relative",
  },
  inputConfirmPassword: {},
  checkboxOfIsPeshraftVolunteer: {},
  btnSignUp: {
    backgroundColor: "#00A9FF",
    borderRadius: 30,
    paddingVertical: 12,
  },
  btnTextSignUp: {
    textAlign: "center",
    color: "#fff",
    fontSize: 19,
    fontWeight: "600",
  },

  blockTitleAndBtnNavSignIn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  titleAndBtnNavSignIn: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "400",
    color: "#8E8E8E",
  },
  btnNavSignIn: {},
  btnTextNavSignIn: {
    fontSize: 18,
    fontWeight: "400",
    color: "#3A65FF",
  },

  // Styles with the same names and properties
  labelAndInputBlock: {},
  label: {
    fontSize: 15,
    fontWeight: "500",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    fontSize: 18,
  },
  showAndHidePasswordIcon: {
    position: "absolute",
    top: 9,
    right: 12,
  },
  btnSignUpAndSignInNavBlock: {
    
  },
});
