import React from "react";
import Dashboard from "../pages/Dashboard";
import AddDrinkWater from "../pages/AddDrinkWater";
import Profile from "../pages/Profile";

import AppStack from "./app.routes";

import { Entypo } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const AuthRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        elevation: 0,
        height: "10%",
      },
      tabStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      iconStyle: {
        flex: 1,
        width: 20,
        height: 20,
      },
      inactiveBackgroundColor: "#fafafc",
      activeBackgroundColor: "ebebf5",
      inactiveTintColor: "#A9A9A9",
      activeTintColor: "#15c3f9",
    }}
  >
    <Tab.Screen
      name="Main"
      component={AppStack}
      options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="ios-home" size={50} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="AddItems"
      component={AddDrinkWater}
      options={{
        tabBarIcon: ({ color }) => {
          return (
            <Entypo
              name="plus"
              size={80}
              color={color}
              style={{
                backgroundColor: "#696969",
                borderRadius: 25,
                borderWidth: 5,
                borderColor: "#D3D3D3",
                bottom: "100%",
              }}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="ios-person" size={60} color={color} />;
        },
      }}
    />
  </Tab.Navigator>
);

export default AuthRoutes;
