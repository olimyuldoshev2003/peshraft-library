import React, { useState, useEffect } from "react";
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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "expo-router";
import { AdvancedCheckbox } from "react-native-advanced-checkbox";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  AsYouType,
  CountryCode,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
import { Selector } from "rn-selector";
// @ts-ignore: Module 'country-telephone-data' has no type declarations
import { allCountries } from "country-telephone-data";

// Tajik SIM card prefixes and operators data
const TAJIK_PREFIXES = {
  "90": "MegaFon Tajikistan",
  "55": "MegaFon Tajikistan",
  "41": "MegaFon Tajikistan",
  "88": "MegaFon Tajikistan",
  "00": "MegaFon Tajikistan",
  "01": "MegaFon Tajikistan",
  "02": "MegaFon Tajikistan",
  "07": "MegaFon Tajikistan",
  "97": "MegaFon Tajikistan",
  "12": "MegaFon Tajikistan",
  "21": "MegaFon Tajikistan",
  "27": "MegaFon Tajikistan",
  "91": "ZET-Mobile",
  "40": "ZET-Mobile",
  "80": "ZET-Mobile",
  "33": "ZET-Mobile",
  "81": "ZET-Mobile",
  "03": "ZET-Mobile",
  "04": "ZET-Mobile",
  "08": "ZET-Mobile",
  "05": "ZET-Mobile",
  "09": "ZET-Mobile",
  "06": "ZET-Mobile",
  "18": "ZET-Mobile",
  "19": "ZET-Mobile",
  "66": "ZET-Mobile",
  "38": "ZET-Mobile",
  "92": "Tcell",
  "93": "Tcell",
  "50": "Tcell",
  "77": "Tcell",
  "70": "Tcell",
  "99": "Tcell",
  "11": "Tcell",
  "10": "O-Mobile",
  "20": "O-Mobile",
  "22": "O-Mobile",
  "30": "O-Mobile",
  "78": "Anor",
  "87": "Anor",
  "98": "Babilon-Mobile",
  "94": "Babilon-Mobile",
  "71": "Babilon-Mobile",
  "17": "Babilon-Mobile",
  "75": "Babilon-Mobile",
  "440": "ZET-Mobile",
  "444": "ZET-Mobile",
  "030": "ZET-Mobile",
  "040": "ZET-Mobile",
  "080": "ZET-Mobile",
  "442": "ZET-Mobile",
  "443": "ZET-Mobile",
  "447": "ZET-Mobile",
  "449": "ZET-Mobile",
  "918": "Babilon-Mobile",
};

// Get all countries from the library and format for rn-selector
const COUNTRIES_DATA = allCountries.map((country: any) => ({
  value: country.iso2,
  label: `${country.name} (+${country.dialCode})`,
  emoji: country.emoji,
  dialCode: country.dialCode,
  name: country.name,
}));

// Date formatting function
const formatDateOfBirth = (text: string): string => {
  // Remove all non-digit characters
  const cleaned = text.replace(/\D/g, "");

  // Limit to 8 digits (YYYYMMDD)
  const limited = cleaned.slice(0, 8);

  // Apply formatting
  if (limited.length <= 4) {
    return limited; // YYYY
  } else if (limited.length <= 6) {
    return `${limited.slice(0, 4)}-${limited.slice(4, 6)}`; // YYYY-MM
  } else {
    return `${limited.slice(0, 4)}-${limited.slice(4, 6)}-${limited.slice(
      6,
      8
    )}`; // YYYY-MM-DD
  }
};

// Validate date of birth
const validateDateOfBirth = (date: string): boolean => {
  if (!date || date.length !== 10) return false;

  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) return false;

  const [year, month, day] = date.split("-").map(Number);

  // Check month
  if (month < 1 || month > 12) return false;

  // Check day
  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) return false;

  // Check year (must be between 1900 and current year)
  const currentYear = new Date().getFullYear();
  if (year < 1900 || year > currentYear) return false;

  // Check if date is not in the future
  const inputDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return inputDate <= today;
};

// Validation schema
const SignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full Name is required")
    .min(3, "Full Name must be at least 3 characters")
    .max(50, "Full Name must be at most 50 characters"),
  dateOfBirth: Yup.string()
    .required("Date of Birth is required")
    .test(
      "is-valid-date",
      "Invalid date format (YYYY-MM-DD)",
      function (value) {
        if (!value) return false;
        return validateDateOfBirth(value);
      }
    ),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .test("is-valid-phone", "Invalid phone number", function (value) {
      if (!value) return false;

      // Clean the phone number
      const cleanNumber = value.replace(/[^\d+]/g, "");

      // Check if it starts with +
      if (!cleanNumber.startsWith("+")) return false;

      // Try to parse the phone number
      try {
        const phoneNumber = parsePhoneNumberFromString(cleanNumber);
        if (!phoneNumber || !phoneNumber.isValid()) return false;

        // Additional validation for Tajik numbers
        if (phoneNumber.country === "TJ") {
          const nationalNumber = phoneNumber.nationalNumber;

          // Check 3-digit prefixes first
          const threeDigitPrefix = nationalNumber.substring(0, 3);
          if (TAJIK_PREFIXES[threeDigitPrefix as keyof typeof TAJIK_PREFIXES]) {
            return true;
          }

          // Check 2-digit prefixes
          const twoDigitPrefix = nationalNumber.substring(0, 2);
          if (TAJIK_PREFIXES[twoDigitPrefix as keyof typeof TAJIK_PREFIXES]) {
            return true;
          }

          return false; // Invalid Tajik prefix
        }

        return true; // Valid non-Tajik number
      } catch (error) {
        return false;
      }
    }),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  isVolunteer: Yup.boolean(),
});

const SignUp = () => {
  const navigation: any = useNavigation();

  const [showAndHidePassword, setShowAndHidePassword] = useState(false);
  const [showAndHideConfirmPassword, setShowAndHideConfirmPassword] =
    useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [detectedOperator, setDetectedOperator] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("tj");

  // Detect Tajik mobile operator from phone number
  const detectTajikOperator = (phoneNumber: string): string => {
    if (!phoneNumber || !phoneNumber.includes("+992")) {
      return "";
    }

    const cleanNumber = phoneNumber.replace(/[^\d]/g, "");
    const nationalNumber = cleanNumber.startsWith("992")
      ? cleanNumber.substring(3)
      : cleanNumber;

    if (!nationalNumber) return "";

    const threeDigitPrefix = nationalNumber.substring(0, 3);
    if (TAJIK_PREFIXES[threeDigitPrefix as keyof typeof TAJIK_PREFIXES]) {
      return TAJIK_PREFIXES[threeDigitPrefix as keyof typeof TAJIK_PREFIXES];
    }

    const twoDigitPrefix = nationalNumber.substring(0, 2);
    if (TAJIK_PREFIXES[twoDigitPrefix as keyof typeof TAJIK_PREFIXES]) {
      return TAJIK_PREFIXES[twoDigitPrefix as keyof typeof TAJIK_PREFIXES];
    }

    return "";
  };

  // Enhanced country detection with Tajik prefix support
  const detectCountryFromPhoneNumber = (phoneNumber: string): string | null => {
    if (!phoneNumber || !phoneNumber.startsWith("+")) {
      return null;
    }

    // Special case: Check for Tajikistan number with specific prefixes
    if (phoneNumber.startsWith("+992")) {
      const operator = detectTajikOperator(phoneNumber);
      setDetectedOperator(operator);
      return "tj";
    }

    // Try to parse with libphonenumber
    try {
      const phoneNumberObj = parsePhoneNumberFromString(phoneNumber);
      if (phoneNumberObj && phoneNumberObj.country) {
        const detectedCountry = phoneNumberObj.country.toLowerCase();

        if (detectedCountry !== "tj") {
          setDetectedOperator("");
        }
        return detectedCountry;
      }
    } catch (error) {
      console.log("Error parsing phone number:", error);
    }

    // Fallback: Check against our countries data by dial code
    const cleanPhone = phoneNumber.replace(/\D/g, "");

    const sortedCountries = [...COUNTRIES_DATA].sort(
      (a: any, b: any) =>
        b.dialCode.replace("+", "").length - a.dialCode.replace("+", "").length
    );

    for (const country of sortedCountries) {
      const countryDialCode = country.dialCode.replace("+", "");
      if (cleanPhone.startsWith(countryDialCode)) {
        if (country.value !== "tj") {
          setDetectedOperator("");
        }
        return country.value;
      }
    }

    setDetectedOperator("");
    return null;
  };

  // Phone number formatting and validation
  const handlePhoneChange = (text: string, setFieldValue: any) => {
    // Allow only digits, plus, spaces, and parentheses
    const cleaned = text.replace(/[^\d+()\s-]/g, "");
    setFieldValue("phoneNumber", cleaned);

    // Auto-detect country from input when number starts with +
    if (cleaned.startsWith("+") && cleaned.length >= 3) {
      const detectedCountry = detectCountryFromPhoneNumber(cleaned);

      if (detectedCountry && detectedCountry !== selectedCountry) {
        setSelectedCountry(detectedCountry);
        setPhoneError("");
        setDetectedOperator("");

        try {
          const formatter = new AsYouType(
            detectedCountry.toUpperCase() as CountryCode
          );
          const formatted = formatter.input(cleaned);
          setFieldValue("phoneNumber", formatted);

          if (detectedCountry === "tj" && formatted.startsWith("+992")) {
            const operator = detectTajikOperator(formatted);
            setDetectedOperator(operator);
          }
        } catch (error) {
          setFieldValue("phoneNumber", cleaned);
        }

        validatePhoneNumber(cleaned, detectedCountry, setPhoneError);
        return;
      }
    }

    if (!cleaned || !cleaned.startsWith("+") || cleaned.length < 3) {
      if (selectedCountry !== "") {
        setSelectedCountry("");
      }
      setPhoneError("");
      setDetectedOperator("");
      return;
    }

    if (selectedCountry) {
      try {
        const formatter = new AsYouType(
          selectedCountry.toUpperCase() as CountryCode
        );
        const formatted = formatter.input(cleaned);
        setFieldValue("phoneNumber", formatted);

        if (selectedCountry === "tj" && formatted.startsWith("+992")) {
          const operator = detectTajikOperator(formatted);
          setDetectedOperator(operator);
        }
      } catch (error) {
        setFieldValue("phoneNumber", cleaned);
      }

      validatePhoneNumber(cleaned, selectedCountry, setPhoneError);
    }
  };

  // Phone number validation function
  const validatePhoneNumber = (
    phoneNumber: string,
    countryCode: string,
    setError: any
  ) => {
    if (phoneNumber.replace("+", "").length < 4) {
      setError("");
      return;
    }

    try {
      const phoneNumberObj = parsePhoneNumberFromString(
        phoneNumber,
        countryCode.toUpperCase() as CountryCode
      );

      if (phoneNumberObj && phoneNumberObj.isValid()) {
        setError("");

        if (countryCode === "tj" && phoneNumber.startsWith("+992")) {
          const cleanNumber = phoneNumber.replace(/[^\d]/g, "");
          if (cleanNumber.length >= 11) {
            const operator = detectTajikOperator(phoneNumber);
            if (!operator) {
              setError("Invalid Tajik mobile prefix");
            }
          }
        }
      } else {
        const cleanNumber = phoneNumber.replace(/[^\d]/g, "");
        if (cleanNumber.length < 8) {
          setError("");
        } else {
          setError("Please enter a valid phone number");
        }
      }
    } catch (error) {
      const cleanNumber = phoneNumber.replace(/[^\d]/g, "");
      if (cleanNumber.length < 8) {
        setError("");
      } else {
        setError("Please enter a valid phone number");
      }
    }
  };

  // Handle country selection
  const handleCountrySelect = (countryCode: string, setFieldValue: any) => {
    setSelectedCountry(countryCode);
    setPhoneError("");
    setDetectedOperator("");

    const country = COUNTRIES_DATA.find((c: any) => c.value === countryCode);
    if (country) {
      setFieldValue("phoneNumber", `+${country.dialCode} `);
    }
  };

  // Handle date of birth change with formatting
  const handleDateOfBirthChange = (text: string, setFieldValue: any) => {
    const formatted = formatDateOfBirth(text);
    setFieldValue("dateOfBirth", formatted);
  };

  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
    // Handle form submission here
  };

  return (
    <KeyboardAvoidingView
      style={styles.containerSignUpComponent}
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : -72}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainerSignUpComponent}
          showsVerticalScrollIndicator={false}
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

              <Formik
                initialValues={{
                  fullName: "",
                  dateOfBirth: "",
                  phoneNumber: "+992 ",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  isVolunteer: false,
                }}
                validationSchema={SignUpSchema}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validateOnBlur={true}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                  values,
                  errors,
                  touched,
                }) => (
                  <View style={styles.blockLabelsAndInputs}>
                    {/* Full Name */}
                    <View
                      style={[
                        styles.labelAndInputFullNameBlock,
                        styles.labelAndInputBlock,
                      ]}
                    >
                      <Text style={styles.label}>Full Name</Text>
                      <TextInput
                        style={[
                          styles.input,
                          errors.fullName &&
                            touched.fullName &&
                            styles.inputError,
                        ]}
                        onChangeText={handleChange("fullName")}
                        onBlur={handleBlur("fullName")}
                        value={values.fullName}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && touched.fullName && (
                        <Text style={styles.errorText}>{errors.fullName}</Text>
                      )}
                    </View>

                    {/* Date of Birth */}
                    <View
                      style={[
                        styles.labelAndInputAgeBlock,
                        styles.labelAndInputBlock,
                      ]}
                    >
                      <Text style={styles.label}>Date of Birth</Text>
                      <TextInput
                        style={[
                          styles.input,
                          errors.dateOfBirth &&
                            touched.dateOfBirth &&
                            styles.inputError,
                        ]}
                        onChangeText={(text) =>
                          handleDateOfBirthChange(text, setFieldValue)
                        }
                        onBlur={handleBlur("dateOfBirth")}
                        value={values.dateOfBirth}
                        placeholder="YYYY-MM-DD"
                        keyboardType="numeric"
                      />
                      {errors.dateOfBirth && touched.dateOfBirth && (
                        <Text style={styles.errorText}>
                          {errors.dateOfBirth}
                        </Text>
                      )}
                    </View>

                    {/* Phone Number */}
                    <View
                      style={[
                        styles.labelAndInputPhoneNumberBlock,
                        styles.labelAndInputBlock,
                      ]}
                    >
                      <Text style={styles.label}>Phone number</Text>

                      {/* Country Selector */}
                      <View style={styles.countrySelectorContainer}>
                        <Selector
                          options={COUNTRIES_DATA}
                          selectedValue={selectedCountry}
                          onValueChange={(countryCode) =>
                            handleCountrySelect(countryCode, setFieldValue)
                          }
                          placeholder="Select Country"
                          searchable={true}
                          primaryColor="#007AFF"
                          customArrow={
                            <Entypo
                              name="chevron-thin-down"
                              size={16}
                              color="#666"
                            />
                          }
                          searchPlaceholder="Search countries..."
                          textStyle={{
                            color: "#000",
                            fontSize: 14,
                          }}
                          style={styles.selectorStyle}
                          optionStyle={styles.optionStyle}
                          dropdownStyle={styles.dropdownStyle}
                          searchInputStyle={styles.searchInputStyle}
                        />
                      </View>

                      <View style={styles.phoneInputContainer}>
                        <FontAwesome
                          name="phone"
                          size={20}
                          color="black"
                          style={styles.phoneIcon}
                        />
                        <TextInput
                          style={[
                            styles.input,
                            styles.phoneInput,
                            (errors.phoneNumber && touched.phoneNumber) ||
                            phoneError
                              ? styles.inputError
                              : null,
                          ]}
                          onChangeText={(text) =>
                            handlePhoneChange(text, setFieldValue)
                          }
                          onBlur={handleBlur("phoneNumber")}
                          value={values.phoneNumber}
                          placeholder="+992 93 123 4567"
                          keyboardType="phone-pad"
                        />
                      </View>

                      {errors.phoneNumber && touched.phoneNumber ? (
                        <Text style={styles.errorText}>
                          {errors.phoneNumber}
                        </Text>
                      ) : phoneError ? (
                        <Text style={styles.errorText}>{phoneError}</Text>
                      ) : null}

                      {detectedOperator && (
                        <Text style={styles.operatorText}>
                          Operator: {detectedOperator}
                        </Text>
                      )}

                      <Text style={styles.phoneHint}>
                        {selectedCountry === "tj"
                          ? "Start with +992. Supported prefixes: 90, 91, 92, 93, 94, 98, 99, etc."
                          : "Start with + or select country."}
                      </Text>
                    </View>

                    {/* Email */}
                    <View
                      style={[
                        styles.labelAndInputEmailBlock,
                        styles.labelAndInputBlock,
                      ]}
                    >
                      <Text style={styles.label}>Email</Text>
                      <TextInput
                        style={[
                          styles.input,
                          errors.email && touched.email && styles.inputError,
                        ]}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        placeholder="example@email.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                      {errors.email && touched.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                      )}
                    </View>

                    {/* Password */}
                    <View
                      style={[
                        styles.labelAndInputPasswordBlock,
                        styles.labelAndInputBlock,
                      ]}
                    >
                      <Text style={styles.label}>Password</Text>
                      <View style={styles.iconAndInputPasswordBlock}>
                        <TextInput
                          style={[
                            styles.input,
                            styles.inputPassword,
                            errors.password &&
                              touched.password &&
                              styles.inputError,
                          ]}
                          onChangeText={handleChange("password")}
                          onBlur={handleBlur("password")}
                          value={values.password}
                          secureTextEntry={!showAndHidePassword}
                          autoComplete="password-new"
                          placeholder="At least 8 characters"
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
                      {errors.password && touched.password && (
                        <Text style={styles.errorText}>{errors.password}</Text>
                      )}
                    </View>

                    {/* Confirm Password */}
                    {/* <View
                      style={[
                        styles.labelAndInputConfirmPasswordBlock,
                        styles.labelAndInputBlock,
                      ]}
                    >
                      <Text style={styles.label}>Confirm Password</Text>
                      <View style={styles.iconAndInputConfirmPasswordBlock}>
                        <TextInput
                          style={[
                            styles.input,
                            styles.inputConfirmPassword,
                            errors.confirmPassword &&
                              touched.confirmPassword &&
                              styles.inputError,
                          ]}
                          onChangeText={handleChange("confirmPassword")}
                          onBlur={handleBlur("confirmPassword")}
                          value={values.confirmPassword}
                          secureTextEntry={!showAndHideConfirmPassword}
                          autoComplete="password-new"
                          placeholder="Confirm your password"
                        />
                        {showAndHideConfirmPassword ? (
                          <Entypo
                            name="eye-with-line"
                            size={30}
                            color="black"
                            style={styles.showAndHideConfirmPasswordIcon}
                            onPress={() => setShowAndHideConfirmPassword(false)}
                          />
                        ) : (
                          <Entypo
                            name="eye"
                            size={30}
                            color="black"
                            style={styles.showAndHideConfirmPasswordIcon}
                            onPress={() => setShowAndHideConfirmPassword(true)}
                          />
                        )}
                      </View>
                      {errors.confirmPassword && touched.confirmPassword && (
                        <Text style={styles.errorText}>
                          {errors.confirmPassword}
                        </Text>
                      )}
                    </View> */}

                    {/* Volunteer Checkbox */}
                    <View style={styles.checkboxOfIsPeshraftVolunteer}>
                      <AdvancedCheckbox
                        value={values.isVolunteer}
                        onValueChange={(value) =>
                          setFieldValue(
                            "isVolunteer",
                            typeof value === "boolean" ? value : false
                          )
                        }
                        label="I'm a volunteer of Peshraft"
                        checkedColor="#007AFF"
                        uncheckedColor="#ccc"
                        size={22}
                      />
                    </View>

                    {/* Submit Button */}
                    <View style={styles.btnSignUpAndSignInNavBlock}>
                      <Pressable
                        style={styles.btnSignUp}
                        onPress={() => handleSubmit()}
                      >
                        <Text style={styles.btnTextSignUp}>Sign up</Text>
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
                )}
              </Formik>
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
    height: 240,
  },
  imgHeaderSignUpComponent: {
    width: "100%",
    height: "100%",
  },
  formSignUp: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 13,
    justifyContent: "space-between",
  },
  titleFormSignUp: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  blockLabelsAndInputs: {
    flex: 1,
    justifyContent: "space-between",
    gap: 8,
  },
  labelAndInputFullNameBlock: {},
  labelAndInputAgeBlock: {},
  labelAndInputPhoneNumberBlock: {},
  labelAndInputEmailBlock: {},
  labelAndInputPasswordBlock: {},
  labelAndInputConfirmPasswordBlock: {},
  iconAndInputPasswordBlock: {
    position: "relative",
  },
  iconAndInputConfirmPasswordBlock: {
    position: "relative",
  },
  inputPassword: {
    paddingRight: 50,
  },
  inputConfirmPassword: {
    paddingRight: 50,
  },
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
  inputError: {
    borderBottomColor: "#FF0000",
  },
  errorText: {
    color: "#FF0000",
    fontSize: 12,
    marginTop: 2,
  },
  showAndHidePasswordIcon: {
    position: "absolute",
    top: 3.5,
    right: 12,
  },
  showAndHideConfirmPasswordIcon: {
    position: "absolute",
    top: 3.5,
    right: 12,
  },
  btnSignUpAndSignInNavBlock: {
    paddingBottom: 40,
    paddingTop: 10,
  },
  operatorText: {
    color: "#4C4ADA",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 2,
    fontStyle: "italic",
  },
  phoneHint: {
    color: "#666",
    fontSize: 10,
    fontStyle: "italic",
    marginTop: 2,
  },
  countrySelectorContainer: {
    marginBottom: 8,
    zIndex: 1000,
  },
  selectorStyle: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  optionStyle: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    color: "#000",
  },
  dropdownStyle: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginTop: 5,
    maxHeight: 200,
    backgroundColor: "#fff",
  },
  searchInputStyle: {
    backgroundColor: "#f0f0f0",
    color: "#000",
  },
  phoneInputContainer: {
    position: "relative",
  },
  phoneIcon: {
    position: "absolute",
    top: 10,
    left: 0,
    zIndex: 1,
  },
  phoneInput: {
    paddingLeft: 30,
  },
});
