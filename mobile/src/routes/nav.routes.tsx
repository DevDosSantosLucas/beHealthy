import React from "react";
import Dashboard from "../pages/Dashboard";
import AddDrinkWater from "../pages/AddDrinkWater";
import Profile from "../pages/Profile";

import AppStack from "./app.routes";

import { Entypo } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

const AuthRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {  
        marginBottom: Platform.OS === 'ios' ? 20: 0,
        bottom: Platform.OS === 'ios' ? 16 : 0,
        height: Platform.OS === 'ios' ?  0: '10%'
        
      },
      tabStyle: {
        paddingBottom:Platform.OS === 'ios' ?  0: '10%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        
        
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
          return <Ionicons name="ios-home" size={60} color={color} style={{}} />;
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
              size={60}
              color={color}
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
