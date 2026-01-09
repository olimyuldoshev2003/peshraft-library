import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("window");

const IntroductionAboutApp = () => {
  const navigation = useNavigation();
  const [showRealApp, setShowRealApp] = useState(false);

  const slides = [
    {
      key: 1,
      title: "Book request",
      text: "You can request and read books from the Peshraft library in this app.",
      image: require("../../assets/peshraft-library/introduction/books/rich-dad-poor-dad.jpg"),
      backgroundColor: "#4A6FA5",
    },
    {
      key: 2,
      title: "Online Book",
      text: "You can request a book and read several books online with this release.",
      image: require("../../assets/peshraft-library/introduction/books/rich-dad-poor-dad.jpg"),
      backgroundColor: "#59b2ab",
    },
  ];

  const onDone = () => {
    // setShowRealApp(true);
    navigation.navigate("FinalIntroduction" as never);
  };

  const onSkip = () => {
    // setShowRealApp(true);
    navigation.navigate("FinalIntroduction" as never);
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    const isLastSlide = index === slides.length - 1;

    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <View style={styles.contentContainer}>
          {/* Skip Button - Hidden on last slide */}
          {!isLastSlide && (
            <View style={styles.skipButtonContainer}>
              <Text style={styles.skipButtonText} onPress={onSkip}>
                Skip
              </Text>
            </View>
          )}

          {/* Image */}
          <View style={styles.imageContainer}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.imageOverlay} />
          </View>

          {/* Text Content */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>

          {/* Progress Dots */}
          <View style={styles.dotsContainer}>
            {slides.map((slide, dotIndex) => (
              <View
                key={slide.key}
                style={[
                  styles.dot,
                  item.key === slide.key
                    ? styles.activeDot
                    : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.nextButton}>
        <Entypo name="chevron-right" size={24} color="#fff" />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.doneButton}>
        <MaterialIcons name="done" size={24} color="#fff" />
      </View>
    );
  };

  if (showRealApp) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        showSkipButton={false}
        bottomButton
        dotStyle={styles.hiddenDot}
        activeDotStyle={styles.hiddenDot}
      />
    </View>
  );
};

export default IntroductionAboutApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 40,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  skipButtonContainer: {
    alignItems: "flex-end",
    marginBottom: 30,
  },
  skipButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
    opacity: 0.9,
  },
  imageContainer: {
    width: width * 0.85,
    height: height * 0.45,
    alignSelf: "center",
    borderRadius: 25,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "System",
    lineHeight: 38,
  },
  text: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    lineHeight: 26,
    opacity: 0.95,
    fontFamily: "System",
    paddingHorizontal: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: "#fff",
  },
  inactiveDot: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  nextButton: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    position: "absolute",
    right: 0,
    bottom: 40,
  },
  doneButton: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    position: "absolute",
    right: 0,
    bottom: 40,
  },
  doneButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4A6FA5",
  },
  hiddenDot: {
    display: "none",
  },
});
