import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import api from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { alertRequest } from "../redux/modules/alerts/actions";
import { IState } from "../redux";
import { IAuthState } from "../redux/modules/auth/types";
import { updateQuantityDrinked } from "../redux/modules/auth/actions";

function AddDrinkWater() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const { token } = useSelector<IState, IAuthState>((state) => state.auth);
  const milliliters = [
    {
      ml: 100,
      image: require("../images/100ml.png"),
    },
    {
      ml: 150,
      image: require("../images/150ml.png"),
    },
    {
      ml: 250,
      image: require("../images/250ml.png"),
    },
    {
      ml: 300,
      image: require("../images/300ml.png"),
    },
    {
      ml: 400,
      image: require("../images/400ml.png"),
    },
    {
      ml: 600,
      image: require("../images/600ml.png"),
    },
    {
      ml: 700,
      image: require("../images/700ml.png"),
    },
    {
      ml: 800,
      image: require("../images/800ml.png"),
    },
  ];

  function handleAddDrinkWater(receivedQuantity: number) {
    Alert.alert("Confirmar", `Deseja mesmo inserir ${receivedQuantity} ml ?`, [
      {
        text: "Cancelar",
      },
      {
        text: "Sim",
        onPress() {
          setQuantity(receivedQuantity);
          api
            .post(
              "/drinks",
              {
                quantity: receivedQuantity,
              },
              { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
              dispatch(
                alertRequest({
                  isDialog: true,
                  messageType: "success",
                  message: "Registro feito com sucesso",
                })
              );
              dispatch(updateQuantityDrinked(receivedQuantity));
              navigation.navigate("Dashboard");
            })
            .catch((error) => {
              dispatch(
                alertRequest({
                  isDialog: true,
                  messageType: "danger",
                  message: error.response.data.message,
                })
              );
            });
        },
      },
    ]);
  }

  return (
    <View style={styles.window}>
      <View style={styles.background} />

      <View style={styles.container}>
        <Text style={styles.title}>Quantos ml de água você tomou?</Text>
        <Text style={styles.title}>(Clique em uma das opções)</Text>

        <View style={styles.itemsContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {milliliters.map((milliliter) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  handleAddDrinkWater(milliliter.ml);
                }}
                activeOpacity={0.4}
                key={milliliter.ml}
              >
                <Text style={styles.itemTitle}>{milliliter.ml} ml</Text>
                <Image source={milliliter.image} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.background} />
    </View>
  );
}

const styles = StyleSheet.create({
  window: { flex: 1, backgroundColor: "rgba(52, 52, 52, 0.8)" },
  backbutton: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  container: {
    borderWidth: 3,
    borderColor: "#000",

    borderRadius: 15,
    paddingTop: "5%",
    paddingBottom: "5%",
    backgroundColor: "#15c3f9",
  },

  button: {
    justifyContent: "flex-start",
    padding: 10,
    marginLeft: "5%",
    marginRight: "60%",
    borderRadius: 15,
    backgroundColor: "#000",
    color: "#FF4500",
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontFamily: "Nunito_400Regular",
    // fontFamily: "Ubuntu_700Bold",
    marginTop: 24,
    color: "#FF4500",
    fontWeight: "bold",
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 4,
    fontFamily: "Nunito_400Regular",
    fontWeight: "bold",
  },
  itemsContainer: {
    flexDirection: "row",
    padding: 10,
    marginTop: 16,
    marginBottom: 32,
    backgroundColor: "#000",
  },

  item: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#15c3f9",
    height: 150,
    width: 150,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "space-between",

    textAlign: "center",
  },

  itemTitle: {
    fontFamily: "Nunito_400Regular",
    textAlign: "center",
    fontSize: 13,
  },
});

export default AddDrinkWater;
