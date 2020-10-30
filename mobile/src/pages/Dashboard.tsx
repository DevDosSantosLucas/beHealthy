import React, { useState, useEffect } from 'react';
import { View, Image, Text ,StyleSheet,ImageBackground} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

import { useAuth } from "../contexts/auth";
import api from '../services/api';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


function Dashboard() {
  // const image ={ uri : "../images/drinking.png"}
  const isFocused = useIsFocused();
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);
  const { user, signOut } = useAuth();
  // useEffect(() => {
  //   api.get('connections').then(response => {
  //     const { total } = response.data;

  //     setTotalConnections(total);
  //   })
  // }, [isFocused]);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses')
  }

  function handleNavigateToLogin() {
    
    signOut();
  }
  function handleAddWater(){
    navigate('AddDrinkWater')

  }

  return (
    
    
    <View style={styles.container}>

    <ImageBackground source={require("../images/drinking.png")} 
      style={styles.imageBackgroung}>
     
     <View style={styles.TopContainer}>
       <View>
       <Image style = {styles.imageLogo}
          source={require("../images/Be-Healthy.png")} 
            />
        </View>
        <View>
         <RectButton onPress={handleNavigateToLogin}>       
          <FontAwesome5 name="door-open" size={50} style={styles.iconStyle} />          
        </RectButton>
        </View>
      </View>

      <Text style={styles.title}>
        Olá {user?.name} {'\n'}
        <Text style={styles.titleBold}>Já bebeu água hoje?</Text>
      </Text>
     
      <View style={styles.buttonsContainer}>
       <View style = {styles.squareFrame}>
        <Text style = {styles.infoText}>Seu peso: {user?.kilograms}Kg{user?.quantityThatYouDrinked}
        </Text>
        
        <Text style = {styles.infoText}>Você já bebeu:</Text>
        <Text style = {styles.textInfo}>{user?.quantityThatYouDrinked}</Text>
        <Text style = {styles.infoText}>Você precisa beber:</Text>
          {console.log()}
        <Text style = {styles.textInfo}>{user?.quantityThatYouNeedToDrink}</Text>
          </View>
      </View>
      <RectButton
          onPress={handleAddWater}        
          style={styles.addButton}>
          <Entypo name="plus" size={60} color="black" />
        </RectButton>
      </ImageBackground>
     
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackgroung:{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",

    },
  container: {
    flex: 1,  
    justifyContent: 'center',
    // margin:1
  },

  banner: {
    width: '100%',
    resizeMode: 'contain'
  },

  title: {
    // fontFamily: 'Poppins_400Regular',
    padding:10,
    color: '#FF4500',
    fontSize: 28,
    lineHeight: 40,
    marginTop: 80,
    fontWeight: 'bold'
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#87CEEB',
    paddingBottom:20
  },
  TopContainer:{
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom:'10%'
  },
  squareFrame:{
    marginLeft:10,
    padding:10,
    borderRadius:25,
    opacity: 0.7,
    backgroundColor: '#FFFF'
  },
  textInfo: {
    marginLeft:10,
    width: '90%',
    backgroundColor: '#708090',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
    fontSize: 20,
  },

  infoText: {
    paddingLeft:10,
    fontFamily: 'Archivo_700Bold',
    color: '#FF4500',
    fontSize: 20,
    fontWeight: 'bold'
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40
  },
  iconStyle: {
    color: "#E9967A",
    paddingTop: 0
  },
  imageLogo:{
    width: 100,
    height: 100,   
  },
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#15c3f9'
}

});




export default Dashboard;