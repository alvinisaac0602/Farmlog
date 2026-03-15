import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >

          <View style={styles.container}>

            <View style={styles.header}>
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>
                Join FarmLog and start managing your farm
              </Text>
            </View>

            <View style={styles.form}>

              <Text style={styles.label}>Full Name</Text>
              <View style={styles.inputContainer}>
                <MaterialIcons name="person" size={20} color="#888" />
                <TextInput
                  placeholder="Enter your name"
                  placeholderTextColor="#888"
                  value={name}
                  onChangeText={setName}
                  style={styles.input}
                />
              </View>

              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                <MaterialIcons name="email" size={20} color="#888" />
                <TextInput
                  placeholder="Enter your email"
                  placeholderTextColor="#888"
                  value={email}
                  onChangeText={setEmail}
                  style={styles.input}
                  keyboardType="email-address"
                />
              </View>

              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <MaterialIcons name="lock" size={20} color="#888" />
                <TextInput
                  placeholder="Create a password"
                  placeholderTextColor="#888"
                  value={password}
                  onChangeText={setPassword}
                  style={styles.input}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <MaterialIcons
                    name={showPassword ? "visibility" : "visibility-off"}
                    size={20}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.inputContainer}>
                <MaterialIcons name="lock" size={20} color="#888" />
                <TextInput
                  placeholder="Confirm your password"
                  placeholderTextColor="#888"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  style={styles.input}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity
                  onPress={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  <MaterialIcons
                    name={
                      showConfirmPassword
                        ? "visibility"
                        : "visibility-off"
                    }
                    size={20}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.signUpText}>Create Account</Text>
              </TouchableOpacity>

              <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.divider} />
              </View>

              <TouchableOpacity style={styles.googleButton}>
                <FontAwesome name="google" size={18} color="#DB4437" />
                <Text style={styles.googleText}>
                  {" "}Continue with Google
                </Text>
              </TouchableOpacity>

            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Already have an account?
              </Text>

              <TouchableOpacity
                onPress={() => router.push("/sign-in")}
              >
                <Text style={styles.signIn}> Sign In</Text>
              </TouchableOpacity>
            </View>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center"
  },

  container: {
    padding: 30
  },

  header: {
    marginBottom: 40
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2F7D32",
    marginBottom: 10
  },

  subtitle: {
    fontSize: 16,
    color: "#6B6B6B"
  },

  form: {
    marginBottom: 30
  },

  label: {
    fontSize: 14,
    marginBottom: 8,
    color: "#444"
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20
  },

  input: {
    flex: 1,
    padding: 14,
    fontSize: 16
  },

  signUpButton: {
    backgroundColor: "#2F7D32",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },

  signUpText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#DDD"
  },

  orText: {
    marginHorizontal: 10,
    color: "#777"
  },

  googleButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#F9F9F9"
  },

  googleText: {
    fontSize: 16,
    fontWeight: "500"
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center"
  },

  footerText: {
    color: "#666"
  },

  signIn: {
    color: "#2F7D32",
    fontWeight: "bold"
  }

});
