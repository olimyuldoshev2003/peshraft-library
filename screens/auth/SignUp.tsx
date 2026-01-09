import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "expo-router";
import { Formik } from "formik";
import {
  AsYouType,
  CountryCode,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
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
import { AdvancedCheckbox } from "react-native-advanced-checkbox";
import { Selector } from "rn-selector";
import * as Yup from "yup";
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

// Enhanced password validation for 8-character minimum
const validatePasswordStrength = (
  password: string
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Basic requirements - 8 characters minimum
  if (!password || password.length < 8) {
    errors.push("Password must be at least 8 characters long");
    return { isValid: false, errors };
  }

  if (password.length > 128) {
    errors.push("Password must not exceed 128 characters");
    return { isValid: false, errors };
  }

  // Character type requirements - MUST HAVE ALL 4 TYPES for maximum strength
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(
    password
  );

  if (!hasUpperCase)
    errors.push("Must contain at least one uppercase letter (A-Z)");
  if (!hasLowerCase)
    errors.push("Must contain at least one lowercase letter (a-z)");
  if (!hasNumbers) errors.push("Must contain at least one number (0-9)");
  if (!hasSpecialChar)
    errors.push("Must contain at least one special character (!@#$%^&* etc.)");

  // Advanced security checks
  // For 8-char passwords, we require ALL 4 character types
  const hasAllTypes =
    hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
  if (!hasAllTypes) {
    errors.push("For maximum security, include all character types");
  }

  // Check for sequential characters (keyboard patterns) - simplified for 8 chars
  const sequentialPatterns = [
    "12345678",
    "87654321",
    "23456789",
    "98765432",
    "qwertyui",
    "iuytrewq",
    "asdfghjk",
    "kjhgfdsa",
    "zxcvbnm",
    "mnbvcxz",
    "password",
    "admin123",
    "letmein1",
    "welcome1",
    "monkey12",
    "dragon12",
  ];

  const lowerPassword = password.toLowerCase();
  for (const pattern of sequentialPatterns) {
    if (lowerPassword.includes(pattern)) {
      errors.push("Contains common sequential pattern");
      break;
    }
  }

  // Check for repeated characters (more strict for short passwords)
  const hasRepeatedChars = /(.)\1{3,}/.test(password); // More than 3 same characters in a row
  if (hasRepeatedChars) {
    errors.push("Too many repeated characters in sequence");
  }

  // Check for common number sequences
  const commonSequences = [
    "12345678",
    "87654321",
    "11111111",
    "22222222",
    "33333333",
    "44444444",
    "55555555",
    "66666666",
    "77777777",
    "88888888",
    "99999999",
    "00000000",
    "11223344",
    "22334455",
    "33445566",
    "44556677",
    "55667788",
    "66778899",
  ];

  if (commonSequences.includes(password)) {
    errors.push("Password is too predictable");
  }

  // Check for personal data patterns
  const emailPattern = /@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  if (emailPattern.test(password)) {
    errors.push("Avoid using email patterns in passwords");
  }

  // Entropy calculation for short passwords
  const characterSetSize =
    (hasUpperCase ? 26 : 0) +
    (hasLowerCase ? 26 : 0) +
    (hasNumbers ? 10 : 0) +
    (hasSpecialChar ? 32 : 0);

  const entropy = Math.log2(Math.pow(characterSetSize, password.length));
  if (entropy < 40) {
    errors.push("Password is not complex enough");
  }

  // Check for dictionary words (simplified)
  const dictionaryWords = [
    "password",
    "admin",
    "welcome",
    "qwerty",
    "letmein",
    "monkey",
    "dragon",
    "sunshine",
    "princess",
    "football",
    "baseball",
    "mustang",
    "superman",
    "trustno1",
    "master",
    "hello123",
    "secret",
    "abcd1234",
    "passw0rd",
    "admin123",
  ];

  const normalizedPass = password.toLowerCase();
  for (const word of dictionaryWords) {
    if (normalizedPass.includes(word)) {
      errors.push("Contains common dictionary word");
      break;
    }
  }

  return {
    isValid: errors.length === 0,
    errors: errors.slice(0, 3), // Limit to 3 most critical errors
  };
};

// Validation schema
const SignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full Name is required")
    .min(3, "Full Name must be at least 3 characters")
    .max(50, "Full Name must be at most 50 characters")
    .test(
      "no-special-chars",
      "Full Name can only contain letters, spaces, and basic punctuation",
      (value) => {
        if (!value) return true;
        return /^[a-zA-Z\s\-'.]*$/.test(value);
      }
    ),
  dateOfBirth: Yup.string()
    .required("Date of Birth is required")
    .test(
      "is-valid-date",
      "Invalid date format (YYYY-MM-DD)",
      function (value) {
        if (!value) return false;
        return validateDateOfBirth(value);
      }
    )
    .test(
      "is-adult",
      "You must be at least 13 years old to sign up",
      function (value) {
        if (!value) return false;
        const birthDate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
          return age - 1 >= 13;
        }
        return age >= 13;
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
    .email("Invalid email format")
    .max(254, "Email must not exceed 254 characters")
    .test("email-domain", "Please use a valid email domain", (value) => {
      if (!value) return true;
      const domain = value.split("@")[1];
      const invalidDomains = [
        "tempmail.com",
        "temp-mail.org",
        "guerrillamail.com",
        "mailinator.com",
        "yopmail.com",
        "10minutemail.com",
      ];
      return !invalidDomains.includes(domain?.toLowerCase() || "");
    }),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must not exceed 128 characters")
    .test(
      "password-strength",
      "Password is not strong enough",
      function (value) {
        if (!value) return false;

        const validation = validatePasswordStrength(value);
        if (!validation.isValid) {
          return this.createError({
            message:
              validation.errors[0] ||
              "Password does not meet security requirements",
          });
        }
        return true;
      }
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
  const [passwordStrength, setPasswordStrength] = useState<{
    score: number;
    feedback: string[];
  }>({ score: 0, feedback: [] });

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

  // Password strength analyzer for 8-character passwords
  const analyzePasswordStrength = (password: string) => {
    if (!password) {
      setPasswordStrength({ score: 0, feedback: [] });
      return;
    }

    let score = 0;
    const feedback: string[] = [];

    // Length score
    if (password.length >= 12) score += 3;
    else if (password.length >= 10) score += 2;
    else if (password.length >= 8) score += 1;
    else feedback.push("❌ Minimum 8 characters required");

    // Character diversity
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(
      password
    );

    const typeCount = [
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecialChar,
    ].filter(Boolean).length;

    // More points for more character types
    if (typeCount === 4) score += 3;
    else if (typeCount === 3) score += 2;
    else if (typeCount === 2) score += 1;
    else feedback.push("❌ Include multiple character types");

    // Check for all character types
    if (!hasUpperCase) feedback.push("⚠️ Add uppercase letters");
    if (!hasLowerCase) feedback.push("⚠️ Add lowercase letters");
    if (!hasNumbers) feedback.push("⚠️ Add numbers");
    if (!hasSpecialChar) feedback.push("⚠️ Add special characters");

    // Pattern detection
    const commonPatterns = [
      "12345678",
      "87654321",
      "password",
      "qwertyui",
      "admin123",
      "letmein1",
      "11111111",
      "22222222",
    ];

    const lowerPassword = password.toLowerCase();
    let hasCommonPattern = false;
    for (const pattern of commonPatterns) {
      if (lowerPassword.includes(pattern)) {
        hasCommonPattern = true;
        feedback.push("⚠️ Avoid common patterns");
        break;
      }
    }

    if (!hasCommonPattern) score += 2;

    // Entropy calculation
    const charSetSize =
      (hasUpperCase ? 26 : 0) +
      (hasLowerCase ? 26 : 0) +
      (hasNumbers ? 10 : 0) +
      (hasSpecialChar ? 32 : 0);

    const entropy = Math.log2(Math.pow(charSetSize, password.length));
    if (entropy > 60) score += 3;
    else if (entropy > 45) score += 2;
    else if (entropy > 30) score += 1;
    else if (password.length > 0) feedback.push("⚠️ Increase complexity");

    // Update strength
    const maxScore = 9;
    const strengthPercentage = Math.min(
      100,
      Math.round((score / maxScore) * 100)
    );

    // Filter out duplicate feedback
    const uniqueFeedback = [...new Set(feedback)];

    setPasswordStrength({
      score: strengthPercentage,
      feedback: uniqueFeedback.slice(0, 3),
    });
  };

  const handlePasswordChange = (text: string, setFieldValue: any) => {
    setFieldValue("password", text);
    analyzePasswordStrength(text);
  };

  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
    // Handle form submission here
  };

  return (
    <View style={styles.containerSignUpComponent}>
      {/* Header - Fixed at top */}
      <View style={styles.headerSignUpComponent}>
        <Image
          source={require("../../assets/peshraft-library/auth/signUpImg.jpg")}
          style={styles.imgHeaderSignUpComponent}
        />
      </View>

      {/* Scrollable Section - Only this part scrolls */}
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            style={styles.sectionSignUpComponent}
            contentContainerStyle={styles.sectionSignUpComponentScrollView}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
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
                validateOnChange={true}
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
                          touched.fullName &&
                            !errors.fullName &&
                            styles.inputSuccess,
                        ]}
                        onChangeText={handleChange("fullName")}
                        onBlur={handleBlur("fullName")}
                        value={values.fullName}
                        placeholder="Enter your full name"
                        returnKeyType="next"
                      />
                      {errors.fullName && touched.fullName && (
                        <Text style={styles.errorText}>{errors.fullName}</Text>
                      )}
                      {touched.fullName && !errors.fullName && (
                        <Text style={styles.successText}>✓ Valid name</Text>
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
                          touched.dateOfBirth &&
                            !errors.dateOfBirth &&
                            styles.inputSuccess,
                        ]}
                        onChangeText={(text) =>
                          handleDateOfBirthChange(text, setFieldValue)
                        }
                        onBlur={handleBlur("dateOfBirth")}
                        value={values.dateOfBirth}
                        placeholder="YYYY-MM-DD"
                        keyboardType="numeric"
                        returnKeyType="next"
                      />
                      {errors.dateOfBirth && touched.dateOfBirth && (
                        <Text style={styles.errorText}>
                          {errors.dateOfBirth}
                        </Text>
                      )}
                      {touched.dateOfBirth && !errors.dateOfBirth && (
                        <Text style={styles.successText}>✓ Valid date</Text>
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
                            touched.phoneNumber &&
                              !errors.phoneNumber &&
                              !phoneError &&
                              styles.inputSuccess,
                          ]}
                          onChangeText={(text) =>
                            handlePhoneChange(text, setFieldValue)
                          }
                          onBlur={handleBlur("phoneNumber")}
                          value={values.phoneNumber}
                          placeholder="+992 93 123 4567"
                          keyboardType="phone-pad"
                          returnKeyType="next"
                        />
                      </View>

                      {errors.phoneNumber && touched.phoneNumber ? (
                        <Text style={styles.errorText}>
                          {errors.phoneNumber}
                        </Text>
                      ) : phoneError ? (
                        <Text style={styles.errorText}>{phoneError}</Text>
                      ) : (
                        touched.phoneNumber &&
                        !errors.phoneNumber &&
                        !phoneError && (
                          <Text style={styles.successText}>
                            ✓ Valid phone number
                          </Text>
                        )
                      )}

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
                          touched.email && !errors.email && styles.inputSuccess,
                        ]}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        placeholder="example@email.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        returnKeyType="next"
                      />
                      {errors.email && touched.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                      )}
                      {touched.email && !errors.email && (
                        <Text style={styles.successText}>✓ Valid email</Text>
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
                            touched.password &&
                              !errors.password &&
                              styles.inputSuccess,
                          ]}
                          onChangeText={(text) =>
                            handlePasswordChange(text, setFieldValue)
                          }
                          onBlur={handleBlur("password")}
                          value={values.password}
                          secureTextEntry={!showAndHidePassword}
                          autoComplete="password-new"
                          placeholder="At least 8 characters with mixed types"
                          returnKeyType="next"
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

                      {/* Password Strength Indicator */}
                      {values.password.length > 0 && (
                        <View style={styles.passwordStrengthContainer}>
                          <View style={styles.strengthBarContainer}>
                            <View
                              style={[
                                styles.strengthBar,
                                {
                                  width: `${passwordStrength.score}%`,
                                  backgroundColor:
                                    passwordStrength.score >= 80
                                      ? "#34C759"
                                      : passwordStrength.score >= 60
                                      ? "#FF9500"
                                      : passwordStrength.score >= 40
                                      ? "#FFCC00"
                                      : "#FF3B30",
                                },
                              ]}
                            />
                          </View>
                          <Text style={styles.strengthText}>
                            Strength: {passwordStrength.score}%
                            {passwordStrength.score >= 80
                              ? " (Strong)"
                              : passwordStrength.score >= 60
                              ? " (Good)"
                              : passwordStrength.score >= 40
                              ? " (Fair)"
                              : " (Weak)"}
                          </Text>

                          {/* Password Requirements */}
                          <View style={styles.passwordRequirements}>
                            <Text style={styles.requirementsTitle}>
                              Requirements:
                            </Text>
                            <View style={styles.requirementItem}>
                              <Text
                                style={[
                                  styles.requirementText,
                                  values.password.length >= 8 &&
                                    styles.requirementMet,
                                ]}
                              >
                                {values.password.length >= 8 ? "✓" : "•"} At
                                least 8 characters
                              </Text>
                            </View>
                            <View style={styles.requirementItem}>
                              <Text
                                style={[
                                  styles.requirementText,
                                  /[A-Z]/.test(values.password) &&
                                    styles.requirementMet,
                                ]}
                              >
                                {/[A-Z]/.test(values.password) ? "✓" : "•"} One
                                uppercase letter
                              </Text>
                            </View>
                            <View style={styles.requirementItem}>
                              <Text
                                style={[
                                  styles.requirementText,
                                  /[a-z]/.test(values.password) &&
                                    styles.requirementMet,
                                ]}
                              >
                                {/[a-z]/.test(values.password) ? "✓" : "•"} One
                                lowercase letter
                              </Text>
                            </View>
                            <View style={styles.requirementItem}>
                              <Text
                                style={[
                                  styles.requirementText,
                                  /\d/.test(values.password) &&
                                    styles.requirementMet,
                                ]}
                              >
                                {/\d/.test(values.password) ? "✓" : "•"} One
                                number
                              </Text>
                            </View>
                            <View style={styles.requirementItem}>
                              <Text
                                style={[
                                  styles.requirementText,
                                  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(
                                    values.password
                                  ) && styles.requirementMet,
                                ]}
                              >
                                {/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(
                                  values.password
                                )
                                  ? "✓"
                                  : "•"}{" "}
                                One special character
                              </Text>
                            </View>

                            {/* Advanced feedback */}
                            {passwordStrength.feedback.length > 0 && (
                              <View style={styles.feedbackContainer}>
                                <Text style={styles.feedbackTitle}>
                                  Tips to improve:
                                </Text>
                                {passwordStrength.feedback.map(
                                  (item, index) => (
                                    <Text
                                      key={index}
                                      style={styles.feedbackItem}
                                    >
                                      {item}
                                    </Text>
                                  )
                                )}
                              </View>
                            )}
                          </View>
                        </View>
                      )}

                      {errors.password && touched.password && (
                        <Text style={styles.errorText}>{errors.password}</Text>
                      )}
                    </View>

                    {/* Confirm Password */}
                    <View
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
                            touched.confirmPassword &&
                              !errors.confirmPassword &&
                              styles.inputSuccess,
                          ]}
                          onChangeText={handleChange("confirmPassword")}
                          onBlur={handleBlur("confirmPassword")}
                          value={values.confirmPassword}
                          secureTextEntry={!showAndHideConfirmPassword}
                          autoComplete="password-new"
                          placeholder="Re-enter your password"
                          returnKeyType="done"
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
                      {touched.confirmPassword &&
                        !errors.confirmPassword &&
                        values.confirmPassword === values.password && (
                          <Text style={styles.successText}>
                            ✓ Passwords match
                          </Text>
                        )}
                    </View>

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
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  containerSignUpComponent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerSignUpComponent: {
    height: 283,
  },
  imgHeaderSignUpComponent: {
    width: "100%",
    height: "100%",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  sectionSignUpComponent: {
    flex: 1,
  },
  sectionSignUpComponentScrollView: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  formSignUp: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 13,
  },
  titleFormSignUp: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  blockLabelsAndInputs: {
    flex: 1,
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
  inputSuccess: {
    borderBottomColor: "#34C759",
  },
  errorText: {
    color: "#FF0000",
    fontSize: 12,
    marginTop: 2,
  },
  successText: {
    color: "#34C759",
    fontSize: 12,
    marginTop: 2,
    fontWeight: "500",
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
    marginTop: 5,
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
  // Password Strength Styles
  passwordStrengthContainer: {
    marginTop: 10,
  },
  strengthBarContainer: {
    height: 6,
    backgroundColor: "#E9ECEF",
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 6,
  },
  strengthBar: {
    height: "100%",
    borderRadius: 3,
  },
  strengthText: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 8,
  },
  passwordRequirements: {
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  requirementsTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#495057",
  },
  requirementItem: {
    marginBottom: 4,
  },
  requirementText: {
    fontSize: 12,
    color: "#6C757D",
  },
  requirementMet: {
    color: "#34C759",
    fontWeight: "500",
  },
  feedbackContainer: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#DEE2E6",
  },
  feedbackTitle: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 6,
    color: "#6C757D",
  },
  feedbackItem: {
    fontSize: 11,
    color: "#FF9500",
    marginBottom: 3,
    fontStyle: "italic",
  },
});
