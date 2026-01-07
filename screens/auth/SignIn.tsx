import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const SignIn = () => {
  const navigation: any = useNavigation();

  const [showAndHidePassword, setShowAndHidePassword] = useState(false);

  return (
    <View style={styles.signInComponent}>
      <View style={styles.signInComponentBlock}>
        <View style={styles.headerSignInComponent}>
          <Image
            source={require("../../assets/peshraft-library/auth/signInImg.jpg")}
            style={styles.imgHeaderSignInComponent}
          />
        </View>
        <View style={styles.sectionSignInComponent}>
          <View style={styles.formSignIn}>
            <Text style={styles.titleFormSignin}>Login</Text>
            <View style={styles.blockLabelsAndInputs}>
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
            </View>
            <View style={styles.forgetPasswordNavBtnBlock}>
              <Pressable style={styles.forgetPasswordNavBtn}>
                <Text style={styles.forgetPasswordNavBtnText}>
                  Forgot your password?
                </Text>
              </Pressable>
            </View>
            <View style={styles.btnSignInBlock}>
              <Pressable style={styles.btnSignIn}>
                <Text style={styles.btnTextSignIn}>Sign in</Text>
              </Pressable>
            </View>
            <View style={styles.anotherWaysToSignUpBlock}>
              <View style={styles.lineWithTextBlock}>
                <View style={[styles.line, styles.line1]}></View>
                <Text style={styles.textInTheMiddleOfLines}>Or</Text>
                <View style={[styles.line, styles.line2]}></View>
              </View>
              <View style={styles.signUpWithSocialMediasAndCorporationsBlock}>
                <Pressable
                  style={[styles.socialMediasAndCorporations, styles.google]}
                >
                  <Image
                    source={require("../../assets/peshraft-library/auth/google.png")}
                    style={[
                      styles.imgsSocialMediasAndCorporations,
                      styles.googleImg,
                    ]}
                  />
                </Pressable>
                <Pressable
                  style={[styles.socialMediasAndCorporations, styles.facebook]}
                >
                  <Image
                    source={require("../../assets/peshraft-library/auth/facebook.png")}
                    style={[
                      styles.imgsSocialMediasAndCorporations,
                      styles.facebookImg,
                    ]}
                  />
                </Pressable>
                <Pressable
                  style={[styles.socialMediasAndCorporations, styles.microsoft]}
                >
                  <Image
                    source={require("../../assets/peshraft-library/auth/microsoft.png")}
                    style={[
                      styles.imgsSocialMediasAndCorporations,
                      styles.microsoftImg,
                    ]}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.btnSignUpNavBtnBlock}>
              <View style={styles.blockTitleAndBtnNavSignUp}>
                <Text style={styles.titleAndBtnNavSignUp}>
                  Don't have an account?
                </Text>
                <Pressable
                  style={styles.btnNavSignUp}
                  onPress={() => {
                    navigation.navigate("SignUp");
                  }}
                >
                  <Text style={styles.btnTextNavSignUp}> Sign up</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  signInComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  signInComponentBlock: {},
  headerSignInComponent: {
    height: 300,
  },
  imgHeaderSignInComponent: {
    width: "100%",
    height: "100%",
  },
  sectionSignInComponent: {},
  formSignIn: {
    paddingVertical: 10,
    paddingHorizontal: 13,
  },
  titleFormSignin: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  blockLabelsAndInputs: {
    justifyContent: "space-between", // This is also KEY
    gap: 8,
  },
  labelAndInputEmailBlock: {},
  inputPassword: {
    paddingRight: 50,
  },
  labelAndInputPasswordBlock: {},
  iconAndInputPasswordBlock: {
    position: "relative",
  },

  forgetPasswordNavBtnBlock: {
    marginTop: 15,
  },
  forgetPasswordNavBtn: {},
  forgetPasswordNavBtnText: {
    fontSize: 14,
    fontWeight: "400",
  },
  btnSignInBlock: {
    marginTop: 10,
  },
  btnSignIn: {
    backgroundColor: "#00A9FF",
    borderRadius: 30,
    paddingVertical: 12,
    marginTop: 5,
  },
  btnTextSignIn: {
    textAlign: "center",
    color: "#fff",
    fontSize: 19,
    fontWeight: "600",
  },

  anotherWaysToSignUpBlock: {},
  lineWithTextBlock: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 2,
    backgroundColor: "#D5D5D5",
    width: `42%`,
  },
  line1: {},
  textInTheMiddleOfLines: {
    fontSize: 28,
    fontWeight: "700",
    paddingHorizontal: 10,
    color: "#747272",
  },
  line2: {},

  signUpWithSocialMediasAndCorporationsBlock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  google: {},
  googleImg: {},
  facebook: {},
  facebookImg: {},
  microsoft: {},
  microsoftImg: {},
  btnSignUpNavBtnBlock: {
    marginTop: 16,
  },
  blockTitleAndBtnNavSignUp: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleAndBtnNavSignUp: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
    color: "#8E8E8E",
  },
  btnNavSignUp: {},
  btnTextNavSignUp: {
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

  socialMediasAndCorporations: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D5D5D5",
  },
  imgsSocialMediasAndCorporations: {
    width: 36,
    height: 36,
  },
});
