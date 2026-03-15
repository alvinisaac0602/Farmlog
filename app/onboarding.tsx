import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

const slides = [
  {
    title: "Track Farm Inputs",
    description: "Record seeds, fertilizers, and other farm inputs easily."
  },
  {
    title: "Manage Farm Expenses",
    description: "Keep track of all your farm spending in one place."
  },
  {
    title: "Monitor Harvest",
    description: "Record harvest quantities and understand your farm productivity."
  }
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace("/welcome");
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" /> {/* Dark icons for light background */}

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>

            <View style={styles.slideContainer}>
              <Text style={styles.title}>{slides[currentSlide].title}</Text>
              <Text style={styles.description}>
                {slides[currentSlide].description}
              </Text>
            </View>

            {/* Dots Indicator */}
            <View style={styles.dots}>
              {slides.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    currentSlide === index && styles.activeDot
                  ]}
                />
              ))}
            </View>

            <View style={styles.buttons}>
              {currentSlide > 0 && (
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={prevSlide}
                >
                  <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={styles.nextButton}
                onPress={nextSlide}
              >
                <Text style={styles.nextText}>
                  {currentSlide === slides.length - 1 ? "Start" : "Next"}
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 30
  },

  container: {
    flex: 1,
  },

  slideContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1B1B1B",
    marginBottom: 20,
    textAlign: "center"
  },

  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#6B6B6B"
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#A5D6A7",
    marginHorizontal: 5
  },

  activeDot: {
    backgroundColor: "#2F7D32"
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  nextButton: {
    backgroundColor: "#2F7D32",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10
  },

  backButton: {
    borderColor: "#2F7D32",
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10
  },

  nextText: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },

  backText: {
    color: "#2F7D32",
    fontWeight: "bold"
  }

});
