import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView, Platform
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
    <View style={styles.container}>
      <View style = {styles.squareFrame}>
      <Text style={styles.title}>Quantos ml de água você tomou?</Text>
      <Text style={styles.description}>(Clique em uma das opções)</Text>

      <View style={styles.itemsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10  }}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#15c3f9",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === 'ios' ?  0: '40%',
    paddingBottom: Platform.OS === 'ios' ?  0: '10%',
    paddingHorizontal:Platform.OS === 'ios' ?  0: 10,
  },
  title: {
    paddingHorizontal: 10,
    color: "#FF4500",
    fontSize: 28,
    lineHeight: 40,
    fontWeight: "bold",
  },

  description: {
    color: "#000",
    fontSize: 16,
    // marginTop: 4,
    fontFamily: "Nunito_400Regular",
    // fontWeight: "bold",
  },
  itemsContainer: {
    flexDirection: "row",
    padding: 10,
    // marginTop: 16,
    // marginBottom: 32,
  },

  item: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#15c3f9",
    height: 140,
    width: 140,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },
  squareFrame: {
    paddingTop: "20%",
    // margin: 10,
    // padding: "10%",
    borderRadius: 25,
    opacity: 0.8,
    backgroundColor: "#FFFF",
    // bottom: "10%",
  },

  itemTitle: {
    fontFamily: "Nunito_400Regular",
    textAlign: "center",
    fontSize: 18,
    color:'#15c3f9'
  },
});

export default AddDrinkWater;
