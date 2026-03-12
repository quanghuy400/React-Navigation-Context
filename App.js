import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AppProvider, AppContext } from "./AppContext";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// 🔹 Auth Stack
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

// 🔹 Bottom Tab
function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explorer" component={HomeScreen} />
      <Tab.Screen name="Account" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// 🔹 Root Navigation
function RootNavigation() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTab /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppProvider>
      <RootNavigation />
    </AppProvider>
  );
}