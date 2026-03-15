import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />  {/* Light text/icons for dark green background */}

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>

            <View style={styles.content}>
              <Text style={styles.title}>FarmLog</Text>
              <Text style={styles.subtitle}>
                Track your farm inputs, expenses, and harvest easily.
              </Text>
            </View>

            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.signUpButton}
                onPress={() => router.push("/auth/sign-up")}
              >
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => router.push("/auth/sign-in")}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#2F7D32"  // Matte green
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between"
  },

  container: {
    flex: 1,
    padding: 30,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20
  },

  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#E8F5E9"
  },

  buttons: {
    marginBottom: 40
  },

  signUpButton: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15
  },

  loginButton: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    padding: 16,
    borderRadius: 10,
    alignItems: "center"
  },

  signUpText: {
    color: "#2F7D32",
    fontWeight: "bold",
    fontSize: 16
  },

  loginText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16
  }

});
