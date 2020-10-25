// import { Inter_600SemiBold } from '@expo-google-fonts/inter';
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { FontAwesome5, Entypo } from "@expo/vector-icons";

// import {signIn} from '../services/auth';

import { useAuth } from "../contexts/auth";

export default function Dashboard() {
  const { user, signOut } = useAuth();

  async function handleSignOut() {
    console.log("Deslogar");
    signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.labelName}>Olá {user?.name}</Text>
        <TouchableOpacity onPress={handleSignOut}>
          <FontAwesome5 name="door-open" size={50} style={styles.iconColor} />
        </TouchableOpacity>
      </View>
      <Text style={styles.labelText}>
        Informe abaixo para que possamos sugerir a quantidade de água ideal para
        você!
      </Text>

      <View style={styles.body}>
        <View style={styles.bodyLeft}>
          <Text style={styles.label}>Seu peso é ? </Text>
          <TextInput
            style={styles.input}
            // value={peso}
            // onChangeText = {setPeso}
          />
        </View>
        <View style={styles.bodyRight}>
          <Text style={styles.label}>
            Quantos Litros {"\n"}você bebeu hoje ?{" "}
          </Text>
          <TextInput
            style={styles.input}
            // value={peso}
            // onChangeText = {setPeso}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.labelText}>
            Ver quantidade de{"\n"} água recomendada
          </Text>
          <Entypo name="water" size={50} style={styles.iconColor} />
        </TouchableOpacity>
        {/* <Text style = { styles.label}>Quantidade de água recomendada:</Text> */}
        <Text style={styles.font}>Litros</Text>
        {/* fazer uma condicional(if ) */}
        <Text style={styles.label}>Precisa Beber mais água</Text>
        <Text style={styles.label}>Ótimo! Você está bem hidratado</Text>
        {/* -------------------------- */}
        <View style={styles.logo}>
          <Image
            source={require("../images/Be-Healthy.png")}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d3e2e6",
    paddingTop: 30,
    padding: 10,
    alignItems: "center",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  body: {
    backgroundColor: "#15c3f9",
    marginTop: 20,
    borderRadius: 20,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  bodyLeft: {
    margin: 30,
  },
  bodyRight: {
    margin: 30,
  },
  text: {
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: "top",
  },
  labelName: {
    paddingRight: 100,
    fontWeight: "bold",
    color: "#15c3f9",
    fontSize: 32,

    marginBottom: 8,
  },
  labelText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  label: {
    color: "#FFFF",
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderColor: "#d3e2e6",
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: "top",
  },
  font: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#15c3f9",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    marginTop: 20,
    flexDirection: "row",
    borderColor: "red",
  },
  iconColor: {
    color: "#15c3f9",
  },
  logo: {
    alignItems: "center",
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
