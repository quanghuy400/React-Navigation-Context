import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AppContext } from "./AppContext";

export default function SignUp() {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Button
        title="Register"
        onPress={() => setIsLoggedIn(true)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});