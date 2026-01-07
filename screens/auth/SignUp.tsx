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

import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "expo-router";
import { AdvancedCheckbox } from "react-native-advanced-checkbox";

const SignUp = () => {
  const navigation: any = useNavigation();

  const [showAndHidePassword, setShowAndHidePassword] = useState(false);
  const [showAndHideConfirmPassword, setShowAndHideConfirmPassword] =
    useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.containerSignUpComponent}
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : -90}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainerSignUpComponent}
          showsVerticalScrollIndicator={false}
          // keyboardShouldPersistTaps="handled"
          scrollEnabled={false}
        >
          <View style={styles.signUpComponent}>
            <View style={styles.headerSignUpComponent}>
              <Image
                source={require("../../assets/peshraft-library/auth/signUpImg.jpg")}
                style={styles.imgHeaderSignUpComponent}
              />
            </View>

            <View style={styles.formSignUp}>
              <Text style={styles.titleFormSignUp}>Create account</Text>

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
                      <Entypo
                        name="eye-with-line"
                        size={30}
                        color="black"
                        style={styles.showAndHidePasswordIcon}
                        onPress={() => setShowAndHidePassword(false)}
                      />
                    ) : (
                      <Entypo
                        name="eye"
                        size={30}
                        color="black"
                        style={styles.showAndHidePasswordIcon}
                        onPress={() => setShowAndHidePassword(true)}
                      />
                    )}
                  </View>
                </View>
                <View style={styles.checkboxOfIsPeshraftVolunteer}>
                  <AdvancedCheckbox
                    value={checked}
                    onValueChange={(value) =>
                      setChecked(typeof value === "boolean" ? value : false)
                    }
                    label="I'm a volunteer of Peshraft"
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
                    <Pressable
                      style={styles.btnNavSignIn}
                      onPress={() => {
                        navigation.navigate("SignIn");
                      }}
                    >
                      <Text style={styles.btnTextNavSignIn}> Sign in</Text>
                    </Pressable>
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

export default SignUp;

const styles = StyleSheet.create({
  containerSignUpComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainerSignUpComponent: {
    // flexGrow: 1,
  },
  signUpComponent: {
    flex: 1,
  },
  headerSignUpComponent: {
    height: 240, // Slightly reduced
  },
  imgHeaderSignUpComponent: {
    width: "100%",
    height: "100%",
  },
  formSignUp: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 13,
    justifyContent: "space-between", // This is KEY
  },
  titleFormSignUp: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  blockLabelsAndInputs: {
    flex: 1,
    justifyContent: "space-between", // This is also KEY
    gap: 8,
  },
  labelAndInputFullNameBlock: {},
  labelAndInputAgeBlock: {},
  labelAndInputPhoneNumberBlock: {},
  labelAndInputEmailBlock: {},
  labelAndInputPasswordBlock: {},
  iconAndInputPasswordBlock: {
    position: "relative",
  },
  inputPassword: {
    paddingRight: 50,
  },
  labelAndInputConfirmPasswordBlock: {},
  iconAndInputConfirmPasswordBlock: {
    position: "relative",
  },
  inputConfirmPassword: {},
  checkboxOfIsPeshraftVolunteer: {
    marginTop: 5,
    marginBottom: 10,
  },
  btnSignUp: {
    backgroundColor: "#00A9FF",
    borderRadius: 30,
    paddingVertical: 12,
    marginTop: 5,
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
    marginTop: 8,
  },

  titleAndBtnNavSignIn: {
    textAlign: "center",
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

  // Styles with the same names and properties - EXACTLY as you had them
  labelAndInputBlock: {},
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 3,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    fontSize: 18,
    paddingVertical: 8,
    paddingBottom: 5,
    height: 35,
  },
  showAndHidePasswordIcon: {
    position: "absolute",
    top: 3.5,
    right: 12,
  },
  btnSignUpAndSignInNavBlock: {
    paddingBottom: 40, // Increased
    paddingTop: 10,
  },
});
