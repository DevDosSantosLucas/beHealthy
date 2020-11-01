import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  Modal,
  Alert,
} from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import { useAuth } from "../contexts/auth";
import api from "../services/api";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

// import AddDrinkWater from './AddDrinkWater';

interface DetailUserDrink {
  quantityThatYouDrinked: number;
  quantityThatYouNeedToDrink: number;
  needToDrinkMore: boolean;
}
// interface IdUser{
//   id: string;
// }

function Dashboard() {
  // const image ={ uri : "../images/drinking.png"}
  const isFocused = useIsFocused();
  const { navigate } = useNavigation();
  const { user, signOut } = useAuth();

  // const [info,setInfo] =useState<DetailUserDrink>();

  //   const params = route.params as  IdUser;
  //   useEffect(()=>{
  //     api.get('users/').then(response => {
  //         setInfo(response.data);
  //     })
  // },[params.id]);

  const [quantityThatYouDrinked, setQuantityThatYouDrinked] = useState(0);
  const [quantityThatYouNeedToDrink, setQuantityThatYouNeedToDrink] = useState(0);
  const [needToDrinkMore, setNeedToDrinkMore] = useState(false);

  useEffect(() => {
    api.get("users/detail").then((response) => {
      setQuantityThatYouDrinked(response.data.quantityThatYouDrinked);
      setQuantityThatYouNeedToDrink(response.data.quantityThatYouNeedToDrink);
      setNeedToDrinkMore(response.data.needToDrinkMore);
    });
  }, []);

  function handleNavigateToLogin() {
    signOut();
  }
  function handleAddWater() {
    navigate("AddDrinkWater");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/drinking.png")}
        style={styles.imageBackgroung}
      >
        <View style={styles.box}>
          <Text style={styles.title}>
            Olá {user?.name} {"\n"}
          </Text>

          <View style={styles.squareFrame}>
            <Text style={styles.infoText}>Seu peso: {user?.kilograms} Kg</Text>

            <Text style={styles.infoText}>Você já bebeu:</Text>
            <Text style={styles.textInfo}>{quantityThatYouDrinked}</Text>
            <Text style={styles.infoText}>Você precisa beber:</Text>
            <Text style={[styles.textInfo, {color: needToDrinkMore ? '#000' : '#00b300'}]}>{quantityThatYouNeedToDrink} ml</Text>
          </View>
        </View>

        <RectButton onPress={handleAddWater} style={styles.addButton}>
          <Entypo name="plus" size={60} color="#FFF" />
        </RectButton>

        <RectButton onPress={handleNavigateToLogin} style={styles.exitButton}>
          <FontAwesome5 name="door-open" size={40} color="#FFF" />
        </RectButton>

        <View style={styles.imageLogo}>
          <Image
            style={styles.logo}
            source={require("../images/Be-Healthy.png")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackgroung: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    // fontFamily: 'Poppins_400Regular',
    padding: 10,
    bottom: 50,
    color: "#FF4500",
    fontSize: 28,
    lineHeight: 40,
    marginTop: 80,
    fontWeight: "bold",
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  box: {
    paddingTop: "20%",
  },

  squareFrame: {
    margin: 10,
    padding: "10%",
    borderRadius: 25,
    opacity: 0.8,
    backgroundColor: "#FFFF",
    bottom: "20%",
  },
  textInfo: {
    marginLeft: 10,
    width: "90%",
    backgroundColor: "#708090",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
    fontSize: 20,
  },

  infoText: {
    paddingLeft: 10,
    fontFamily: "Archivo_700Bold",
    color: "#FF4500",
    fontSize: 20,
    fontWeight: "bold",
  },

  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: "#d4c2ff",
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },
  iconStyle: {
    color: "#E9967A",
    paddingTop: 0,
  },
  exitButton: {
    position: "absolute",
    left: 30,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15c3f9",
  },
  imageLogo: {
    position: "absolute",
    bottom: 30,
    width: 60,
    height: 60,
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
