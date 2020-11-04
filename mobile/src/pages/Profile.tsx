import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useAuth } from "../contexts/auth";
import api from "../services/api";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { IAuthState } from "../redux/modules/auth/types";
import { IState } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/modules/auth/actions";
import { alertRequest } from "../redux/modules/alerts/actions";

function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector<IState, IAuthState>(
    (state) => state.auth
  );

  function handleNavigateToLogin() {
    Alert.alert("Sair do login", "Deseja mesmo Sair?", [
      {
        text: "Cancelar",
      },
      {
        text: "Sim",
        onPress() {
          dispatch(logout());
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.squareFrame}>
        <View style={styles.header}>
          <View style={styles.imageLogo}>
            <Image
              style={styles.logo}
              source={require("../images/Be-Healthy.png")}
            />
          </View>

          <RectButton onPress={handleNavigateToLogin} style={styles.exitButton}>
            <FontAwesome5 name="door-open" size={40} color="#15c3f9" />
          </RectButton>
        </View>
      </View>

      <View style={styles.squareFrame}>
        <Text style={styles.title}>
          Olá {user?.name} {"\n"}
        </Text>
        <Ionicons name="ios-person" size={250} style={styles.imageBackgroung} />
        <Text style={styles.infoText}>email:{user?.email}</Text>
        <Text style={styles.infoText}>Seu peso: {user?.kilograms} Kg</Text>
        <Text style={styles.infoText}>
          {" "}
          {user?.needToDrinkMore ? "" : "Você ja bebeu o suficiente Hoje"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackgroung: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    opacity: 0.1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#15c3f9",
  },

  title: {
    fontFamily: "Poppins_400Regular",
    padding: 10,
    bottom: 50,
    color: "#FF4500",
    fontSize: 28,
    lineHeight: 50,
    marginTop: 80,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  squareFrame: {
    top: 1,
    paddingTop: 15,
    margin: 10,
    borderRadius: 25,
    opacity: 0.8,
    backgroundColor: "#FFFF",
    bottom: "20%",
    justifyContent: "center",
  },

  infoText: {
    color: "#FF4500",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  iconStyle: {
    color: "#E9967A",
    paddingTop: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: "10%",
  },
  exitButton: {
    top: 20,
    right: 30,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  imageLogo: {
    top: 20,
    left: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default Profile;
