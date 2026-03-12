import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      {/* Email */}
      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
      />

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
      />

      <Text style={styles.forgot}>Forgot password?</Text>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* Divider */}
      <Text style={styles.orText}>Or sign in with</Text>

      {/* Social Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.facebookText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up */}
      <View style={styles.signupContainer}>
        <Text>Not yet a member? </Text>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  forgot: {
    alignSelf: "flex-end",
    color: "#f9a825",
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: "#f9a825",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  signInText: {
    color: "#fff",
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginBottom: 15,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  googleButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 5,
  },
  googleText: {
    color: "#000",
  },
  facebookButton: {
    flex: 1,
    backgroundColor: "#3b5998",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 5,
  },
  facebookText: {
    color: "#fff",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    color: "#f9a825",
    fontWeight: "bold",
  },
});