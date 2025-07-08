import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import LoginScreen from "../screens/Login";
import SplashScreen from "../screens/Splash";
import ExploreScreen from "../screens/Explore";
import CameraScreen from "../screens/Camera";
import IntroScreen from "../screens/Splash/Intro";
import AccountScreen from "../screens/Account";
import SignUpScreen from "../screens/SignUp";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Account" component={AccountScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
