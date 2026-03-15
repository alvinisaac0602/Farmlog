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
import React, { useState, useContext } from "react";
import { router } from "expo-router";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    const { error } = await login(email, password);

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      router.replace("/(tabs)/home");
    }
  };

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
              <Text style={styles.title}>Welcome Back</Text>
              <Text style={styles.subtitle}>
                Sign in to continue using FarmLog
              </Text>
            </View>

            <View style={styles.form}>

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
                  autoCapitalize="none"
                />
              </View>

              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <MaterialIcons name="lock" size={20} color="#888" />
                <TextInput
                  placeholder="Enter your password"
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

              <TouchableOpacity
                style={styles.signInButton}
                onPress={handleSignIn}
                disabled={loading}
              >
                <Text style={styles.signInText}>
                  {loading ? "Signing In..." : "Sign In"}
                </Text>
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
                Don't have an account?
              </Text>

              <TouchableOpacity
                onPress={() => router.replace("/auth/sign-up")}
              >
                <Text style={styles.signUp}> Sign Up</Text>
              </TouchableOpacity>
            </View>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default SignIn;

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

  signInButton: {
    backgroundColor: "#2F7D32",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },

  signInText: {
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

  signUp: {
    color: "#2F7D32",
    fontWeight: "bold"
  }

});