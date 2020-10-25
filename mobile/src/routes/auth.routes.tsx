import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      options={{ headerShown: false }}
      name="SignIn"
      component={SignIn}
    />

    <AuthStack.Screen
      options={{
        title: "Registre-se",
        headerStyle: { backgroundColor: "#15c3f9" },
        headerTintColor: "#FFFF",
      }}
      name="SignUp"
      component={SignUp}
    />
  </AuthStack.Navigator>
);

// const styles = StyleSheet.create({
//     titlee: {
//       color: '#FFFF'
//     },
// })

export default AuthRoutes;
