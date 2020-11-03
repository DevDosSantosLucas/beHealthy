import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";

import { useAuth } from "../contexts/auth";
import api from "../services/api";


function Dashboard() {
  const { user } = useAuth();

  const [quantityThatYouDrinked, setQuantityThatYouDrinked] = useState(0);
  const [quantityThatYouNeedToDrink, setQuantityThatYouNeedToDrink] = useState(0);
  const [needToDrinkMore, setNeedToDrinkMore] = useState(false);

    useEffect(() => { 
      api.get("users/").then((response) => {
        setQuantityThatYouDrinked(response.data.quantityThatYouDrinked);
        setQuantityThatYouNeedToDrink(response.data.quantityThatYouNeedToDrink);
        setNeedToDrinkMore(response.data.needToDrinkMore);
      });
      }, []);

  return (
    <View style={styles.container}>
            <View style={styles.box}>
          
          <View style={styles.squareFrame}>
          <View style={styles.imageLogo}>
             <Image
            style={styles.logo}
            source={require("../images/Be-Healthy.png")}
            />
            </View>
            <Text style={styles.infoText}>Seu peso: {user?.kilograms} Kg</Text>

            <Text style={styles.infoText}>Você já bebeu:</Text>
            <View style ={{justifyContent:'center',alignSelf:'center', alignItems:'center'}}>
            <Text style={styles.textInfo}>{quantityThatYouDrinked} ml</Text>
            </View>
            <Text style={styles.infoText}>Você precisa beber:</Text>
            <View style ={{justifyContent:'center',alignSelf:'center', alignItems:'center'}}>
            <Text style={[styles.textInfo,{
              color: needToDrinkMore ? '#000' : '#FF4500'
              }]}>{quantityThatYouNeedToDrink} ml</Text>
            </View>
            <View style ={{justifyContent:'center',alignSelf:'center', alignItems:'center'}}>
            <Text style={styles.infoText}> {
              needToDrinkMore ? '' : 'Você ja bebeu o suficiente Hoje'
            }</Text>
            </View>

            
          </View>
        </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'#15c3f9',
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    padding: 10,
    bottom: 50,
    color: "#FF4500",
    fontSize: 28,
    lineHeight: 40,
    marginTop: 80,
    fontWeight: "bold",
  },

  box: {
    paddingTop: "30%",
  },

  squareFrame: {
    paddingTop:'20%',
    margin: 10,
    padding: "10%",
    borderRadius: 25,
    opacity: 0.8,
    backgroundColor: "#FFFF",
    bottom: "10%",
  },
  textInfo: {
    width: "90%",
    backgroundColor: "#708090",
    borderRadius: 8,
    padding: 24,
    justifyContent: "center",
    fontSize: 20,
    fontWeight:'bold',
    alignSelf: "center",
    alignItems: "center",
  },

  infoText: {
    fontFamily: "Archivo_700Bold",
    color: "#FF4500",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    color: "#E9967A",
    paddingTop: 0,
  },
  imageLogo: {
    bottom: 30,
    width: 50,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  addButton: {
    position: "absolute",
    right: 30,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15c3f9",
  },
});

export default Dashboard;
