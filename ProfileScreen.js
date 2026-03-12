import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AppContext } from "./AppContext";

export default function ProfileScreen() {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quang Huy</Text>
      <Text style={styles.text}>Sinh Viên</Text>

      <Button
        title="Sign Out"
        onPress={() => setIsLoggedIn(false)}
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
  text: {
    fontSize: 26,
    marginBottom: 20,
  },
});