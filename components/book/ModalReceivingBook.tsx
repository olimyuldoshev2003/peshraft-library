import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  GestureResponderEvent,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";

interface FormData {
  fullName: string;
  jobTitle: string;
  bookName: string;
  author: string;
  receivingDate: string;
  returningDate: string;
}

interface FormErrors {
  fullName?: string;
  jobTitle?: string;
  bookName?: string;
  author?: string;
  receivingDate?: string;
  returningDate?: string;
}

const ModalReceivingBook = ({
  modalReceivingBook,
  setModalReceivingBook,
}: {
  modalReceivingBook: boolean;
  setModalReceivingBook: Dispatch<SetStateAction<boolean>>;
  }) => {
  
  const navigation:any = useNavigation(); 
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    jobTitle: "",
    bookName: "",
    author: "",
    receivingDate: "",
    returningDate: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Helper function to format date input
  const formatDateInput = (text: string, previousText: string): string => {
    // Remove non-digits
    const cleaned = text.replace(/\D/g, "");

    // Format as DD.MM.YYYY
    if (cleaned.length <= 2) {
      return cleaned;
    } else if (cleaned.length <= 4) {
      return `${cleaned.slice(0, 2)}.${cleaned.slice(2)}`;
    } else if (cleaned.length <= 8) {
      return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 4)}.${cleaned.slice(4)}`;
    }
    return previousText;
  };

  // Validate date
  const isValidDate = (dateStr: string): boolean => {
    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(dateStr)) return false;

    const [day, month, year] = dateStr.split(".").map(Number);

    // Check if date is valid
    const date = new Date(year, month - 1, day);
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return false;
    }

    // Check if date is not in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      return false;
    }

    return true;
  };

  // Compare two dates
  const isDateAfter = (date1: string, date2: string): boolean => {
    if (!date1 || !date2) return true;

    const [day1, month1, year1] = date1.split(".").map(Number);
    const [day2, month2, year2] = date2.split(".").map(Number);

    const dateObj1 = new Date(year1, month1 - 1, day1);
    const dateObj2 = new Date(year2, month2 - 1, day2);

    return dateObj2 > dateObj1;
  };

  const validateField = (
    name: string,
    value: string,
    allData?: FormData,
  ): string => {
    const data = allData || formData;

    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 3)
          return "Full name must be at least 3 characters";
        if (value.trim().length > 50)
          return "Full name must not exceed 50 characters";
        if (!/^[a-zA-Z\s\-']+$/.test(value.trim()))
          return "Full name can only contain letters, spaces, hyphens and apostrophes";
        return "";

      case "jobTitle":
        if (!value.trim()) return "Job title is required";
        if (value.trim().length < 2)
          return "Job title must be at least 2 characters";
        if (value.trim().length > 50)
          return "Job title must not exceed 50 characters";
        return "";

      case "bookName":
        if (!value.trim()) return "Book name is required";
        if (value.trim().length < 1)
          return "Book name must be at least 1 character";
        if (value.trim().length > 100)
          return "Book name must not exceed 100 characters";
        return "";

      case "author":
        if (!value.trim()) return "Author name is required";
        if (value.trim().length < 3)
          return "Author name must be at least 3 characters";
        if (value.trim().length > 50)
          return "Author name must not exceed 50 characters";
        return "";

      case "receivingDate":
        if (!value.trim()) return "Receiving date is required";
        if (!/^\d{2}\.\d{2}\.\d{4}$/.test(value))
          return "Date must be in format DD.MM.YYYY";
        if (!isValidDate(value))
          return "Invalid date or date cannot be in the past";
        return "";

      case "returningDate":
        if (!value.trim()) return "Returning date is required";
        if (!/^\d{2}\.\d{2}\.\d{4}$/.test(value))
          return "Date must be in format DD.MM.YYYY";
        if (!isValidDate(value))
          return "Invalid date or date cannot be in the past";

        // Check if returning date is after receiving date
        if (data.receivingDate) {
          if (!isDateAfter(data.receivingDate, value)) {
            return "Returning date must be after receiving date";
          }
        }
        return "";

      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(
        key,
        formData[key as keyof FormData],
        formData,
      );
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (name: string, value: string) => {
    let formattedValue = value;

    // Apply formatting for date fields
    if (name === "receivingDate" || name === "returningDate") {
      formattedValue = formatDateInput(
        value,
        formData[name as keyof FormData] as string,
      );
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));

    // Validate field if it has been touched
    if (touched[name]) {
      const error = validateField(name, formattedValue, {
        ...formData,
        [name]: formattedValue,
      });
      setErrors((prev) => ({ ...prev, [name]: error }));

      // Revalidate related fields (for date comparisons)
      if (name === "receivingDate") {
        if (touched.returningDate) {
          const returningDateError = validateField(
            "returningDate",
            formData.returningDate,
            { ...formData, [name]: formattedValue },
          );
          setErrors((prev) => ({ ...prev, returningDate: returningDateError }));
        }
      } else if (name === "returningDate") {
        if (touched.receivingDate) {
          const receivingDateError = validateField(
            "receivingDate",
            formData.receivingDate,
            { ...formData, [name]: formattedValue },
          );
          setErrors((prev) => ({ ...prev, receivingDate: receivingDateError }));
        }
      }
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(
      name,
      formData[name as keyof FormData],
      formData,
    );
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = () => {
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {} as { [key: string]: boolean },
    );

    setTouched(allTouched);

    if (validateForm()) {
      // Form is valid, you can submit the data
      Alert.alert("Success", "Book receipt recorded successfully!", [
        {
          text: "OK",
          onPress: () => {
            // Reset form and close modal
            setFormData({
              fullName: "",
              jobTitle: "",
              bookName: "",
              author: "",
              receivingDate: "",
              returningDate: "",
            });
            setErrors({});
            setTouched({});
            setModalReceivingBook(false);
            navigation.navigate("Home"); // Navigate to Home screen after submission
          },
        },
      ]);
      console.log("Form submitted:", formData);
    } else {
      Alert.alert("Error", "Please fix all errors before submitting");
    }
  };

  const handleClose = () => {
    // Reset form when closing
    setFormData({
      fullName: "",
      jobTitle: "",
      bookName: "",
      author: "",
      receivingDate: "",
      returningDate: "",
    });
    setErrors({});
    setTouched({});
    setModalReceivingBook(false);
  };

  return (
    <Modal
      visible={modalReceivingBook}
      style={styles.modalReceivingBookComponent}
      animationType="slide"
      transparent={true}
    >
      <Pressable style={styles.overlayModalReceivingBook} onPress={handleClose}>
        <Pressable
          style={styles.modalReceivingBookMainBlock}
          onPress={(event: GestureResponderEvent) => {
            event.stopPropagation();
          }}
        >
          <View style={styles.headerModalReceivingBook}>
            <View
              style={styles.closeModalIconAndTitleModalReceivingBookComponent}
            >
              <AntDesign
                style={styles.closeModalReceivingBookIcon}
                name="close"
                size={25}
                color="black"
                onPress={handleClose}
              />
              <Text style={styles.titleModalReceivingBookComponent}>
                Receive a book
              </Text>
              <View></View>
            </View>
            <View style={styles.imgNameAndAuthorOfThisBookBlock}>
              <Image
                source={require("../../assets/peshraft-library/home/tojikon.jpg")}
                style={styles.imgOfBook}
              />
              <View style={styles.nameAndAuthorOfBookBlock}>
                <Text style={styles.nameOfBook}>Tojikon</Text>
                <Text style={styles.authorOfBook}>Bobojon Ghafurov</Text>
              </View>
            </View>
          </View>

          <ScrollView
            contentContainerStyle={styles.sectionModalReceivingBookScrollView}
            style={styles.sectionModalReceivingBook}
            showsVerticalScrollIndicator={false}
          >
            {/* Full name */}
            <View
              style={[
                styles.labelAndInputFullNameBlock,
                styles.labelAndInputBlock,
              ]}
            >
              <Text style={[styles.label, styles.labelFullName]}>
                Full name <Text style={styles.requiredStar}>*</Text>
              </Text>
              <TextInput
                style={[
                  styles.input,
                  styles.inputFullName,
                  touched.fullName && errors.fullName && styles.inputError,
                ]}
                value={formData.fullName}
                onChangeText={(text) => handleInputChange("fullName", text)}
                onBlur={() => handleBlur("fullName")}
                placeholder="Enter full name"
                placeholderTextColor="#999"
                maxLength={50}
              />
              {touched.fullName && errors.fullName && (
                <Text style={styles.errorText}>{errors.fullName}</Text>
              )}
            </View>

            {/*Job title  */}
            <View
              style={[
                styles.labelAndInputJobTitleBlock,
                styles.labelAndInputBlock,
              ]}
            >
              <Text style={[styles.label, styles.labelJobTitle]}>
                Job Title <Text style={styles.requiredStar}>*</Text>
              </Text>
              <TextInput
                style={[
                  styles.input,
                  styles.inputJobTitle,
                  touched.jobTitle && errors.jobTitle && styles.inputError,
                ]}
                value={formData.jobTitle}
                onChangeText={(text) => handleInputChange("jobTitle", text)}
                onBlur={() => handleBlur("jobTitle")}
                placeholder="Enter job title"
                placeholderTextColor="#999"
                maxLength={50}
              />
              {touched.jobTitle && errors.jobTitle && (
                <Text style={styles.errorText}>{errors.jobTitle}</Text>
              )}
            </View>

            {/* Book name */}
            <View
              style={[
                styles.labelAndInputBookNameBlock,
                styles.labelAndInputBlock,
              ]}
            >
              <Text style={[styles.label, styles.labelBookName]}>
                Book name <Text style={styles.requiredStar}>*</Text>
              </Text>
              <TextInput
                style={[
                  styles.input,
                  styles.inputBookName,
                  touched.bookName && errors.bookName && styles.inputError,
                ]}
                value={formData.bookName}
                onChangeText={(text) => handleInputChange("bookName", text)}
                onBlur={() => handleBlur("bookName")}
                placeholder="Enter book name"
                placeholderTextColor="#999"
                maxLength={100}
              />
              {touched.bookName && errors.bookName && (
                <Text style={styles.errorText}>{errors.bookName}</Text>
              )}
            </View>

            {/* Author */}
            <View
              style={[
                styles.labelAndInputAuthorBlock,
                styles.labelAndInputBlock,
              ]}
            >
              <Text style={[styles.label, styles.labelAuthor]}>
                Author <Text style={styles.requiredStar}>*</Text>
              </Text>
              <TextInput
                style={[
                  styles.input,
                  styles.inputAuthor,
                  touched.author && errors.author && styles.inputError,
                ]}
                value={formData.author}
                onChangeText={(text) => handleInputChange("author", text)}
                onBlur={() => handleBlur("author")}
                placeholder="Enter author name"
                placeholderTextColor="#999"
                maxLength={50}
              />
              {touched.author && errors.author && (
                <Text style={styles.errorText}>{errors.author}</Text>
              )}
            </View>

            {/* Receiving Date */}
            <View
              style={[
                styles.labelAndInputReceivingDateBlock,
                styles.labelAndInputBlock,
              ]}
            >
              <Text style={[styles.label, styles.labelReceivingDate]}>
                Receiving date <Text style={styles.requiredStar}>*</Text>
              </Text>
              <TextInput
                style={[
                  styles.input,
                  styles.inputReceivingDate,
                  touched.receivingDate &&
                    errors.receivingDate &&
                    styles.inputError,
                ]}
                keyboardType="numeric"
                value={formData.receivingDate}
                onChangeText={(text) =>
                  handleInputChange("receivingDate", text)
                }
                onBlur={() => handleBlur("receivingDate")}
                placeholder="DD.MM.YYYY"
                placeholderTextColor="#999"
                maxLength={10}
              />
              {touched.receivingDate && errors.receivingDate && (
                <Text style={styles.errorText}>{errors.receivingDate}</Text>
              )}
            </View>

            {/* Returning Date */}
            <View
              style={[
                styles.labelAndInputReturningDateBlock,
                styles.labelAndInputBlock,
              ]}
            >
              <Text style={[styles.label, styles.labelReturningDate]}>
                Returning date <Text style={styles.requiredStar}>*</Text>
              </Text>
              <TextInput
                style={[
                  styles.input,
                  styles.inputReturningDate,
                  touched.returningDate &&
                    errors.returningDate &&
                    styles.inputError,
                ]}
                keyboardType="numeric"
                value={formData.returningDate}
                onChangeText={(text) =>
                  handleInputChange("returningDate", text)
                }
                onBlur={() => handleBlur("returningDate")}
                placeholder="DD.MM.YYYY"
                placeholderTextColor="#999"
                maxLength={10}
              />
              {touched.returningDate && errors.returningDate && (
                <Text style={styles.errorText}>{errors.returningDate}</Text>
              )}
            </View>

            {/* Submit Button */}
            <Pressable style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </Pressable>
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ModalReceivingBook;

const styles = StyleSheet.create({
  modalReceivingBookComponent: {},
  overlayModalReceivingBook: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalReceivingBookMainBlock: {
    position: "absolute",
    inset: 0,
    backgroundColor: "#fff",
  },
  headerModalReceivingBook: {
    backgroundColor: "#DDEEFE",
    paddingVertical: 20,
  },
  closeModalIconAndTitleModalReceivingBookComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  closeModalReceivingBookIcon: {},
  titleModalReceivingBookComponent: {
    fontSize: 23,
    fontWeight: "600",
  },
  imgNameAndAuthorOfThisBookBlock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginTop: 5,
  },
  imgOfBook: {
    width: 112,
    height: 200,
    resizeMode: "contain",
  },
  nameAndAuthorOfBookBlock: {},
  nameOfBook: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  authorOfBook: {
    color: "#515151",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },

  sectionModalReceivingBookScrollView: {
    paddingTop: 10,
    paddingHorizontal: 20,
    gap: 15,
    paddingBottom: 30,
  },
  sectionModalReceivingBook: {
    flex: 1,
  },

  labelAndInputFullNameBlock: {},
  labelFullName: {},
  inputFullName: {},

  labelAndInputJobTitleBlock: {},
  labelJobTitle: {},
  inputJobTitle: {},

  labelAndInputBookNameBlock: {},
  labelBookName: {},
  inputBookName: {},

  labelAndInputAuthorBlock: {},
  labelAuthor: {},
  inputAuthor: {},

  labelAndInputReceivingDateBlock: {},
  labelReceivingDate: {},
  inputReceivingDate: {},

  labelAndInputReturningDateBlock: {},
  labelReturningDate: {},
  inputReturningDate: {},

  // Styles with the same properties and names
  labelAndInputBlock: {
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 3,
    color: "#646464",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    fontSize: 18,
    fontWeight: "500",
    paddingVertical: 8,
    paddingBottom: 5,
    height: 45,
    color: "#646464",
  },
  requiredStar: {
    color: "red",
    fontSize: 14,
  },
  inputError: {
    borderBottomColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
  },
  submitButton: {
    backgroundColor: "#00A9FF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  submitButtonText: {
    fontSize:23,
    fontWeight: "600",
    color: "#fff",
  },
});
