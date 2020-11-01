
import React from 'react'
import {
    Modal,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
    Image,

    Platform, ScrollView
} from 'react-native'


import { useNavigation, useIsFocused } from '@react-navigation/native'



function AddDrinkWater() {

    function handleBackDashboard(){
        navigate('Dashboard')
    }
 
        


        const { navigate } = useNavigation();

        return (
          <View style={styles.window}>
          <View style = {styles.background}>

            <TouchableOpacity
              style = {styles.backbutton}
              onPress={handleBackDashboard} 
            />
          </View>
            <View style={styles.container}>
                    <Text style={styles.title}>Quantos ml de água você tomou?</Text>
                    
                    
        <View style={styles.itemsContainer}>
          
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          
            <TouchableOpacity
              style={styles.item}
              onPress={() => {   }}
              activeOpacity={0.4}>
              <Text style={styles.itemTitle}>100 ml</Text>
              <Image source={require("../images/100ml.png")} />
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.item}
              onPress={() => {   }}
              activeOpacity={0.4}>
              <Text style={styles.itemTitle}>150 ml</Text>
              <Image source={require("../images/150ml.png")} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {   }}
              activeOpacity={0.4}>
              <Text style={styles.itemTitle}>250 ml</Text>
              <Image source={require("../images/250ml.png")} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {   }}
              activeOpacity={0.4}>
              <Text style={styles.itemTitle}>300 ml</Text>
              <Image source={require("../images/300ml.png")} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {   }}
              activeOpacity={0.4}>
              <Text style={styles.itemTitle}>400 ml</Text>
              <Image source={require("../images/400ml.png")} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {   }}
              activeOpacity={0.4}>
              <Text style={styles.itemTitle}>600 ml</Text>
              <Image source={require("../images/600ml.png")} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {   }}
              activeOpacity={0.4}>
              <Text style={styles.itemTitle}>700 ml</Text>
              <Image source={require("../images/700ml.png")}  />
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.item}
              onPress={() => {   }}
              activeOpacity={0.4}>
              <Text style={styles.itemTitle}>800 ml</Text>
              <Image source={require("../images/800ml.png")} />
            </TouchableOpacity>
           
        </ScrollView>

      </View>
      <View >
                        
                        <TouchableOpacity onPress={handleBackDashboard}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                   
                </View>

                <View style = {styles.background}>

                  <TouchableOpacity
                  style = {styles.backbutton}
                  onPress={handleBackDashboard} 
                  />
                </View>
                
        </View>
            
            
        )
    }



const styles = StyleSheet.create({
    window:{flex:1},
    backbutton:{
    flex:1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    background:{
        flex:1,
    },
    container: {
      borderWidth: 3,
      borderColor: "#000",
    
      // borderRadius:15,
      paddingTop:'5%',
      paddingBottom:'5%',
      backgroundColor: '#15c3f9',
    },
  
    button: {
        justifyContent: 'flex-start',
        padding:10,
        marginLeft: '5%',
        marginRight: '60%',
        borderRadius: 15,
        backgroundColor: '#000',
        color: '#FF4500',
        fontWeight: 'bold'
    },
    title: {
      fontSize: 20,
      fontFamily: "Roboto_400Regular",
      // fontFamily: "Ubuntu_700Bold",
      marginTop: 24,
      color: '#FF4500',
      fontWeight: 'bold'
    },
      
    description: {
      color: "#6C6C80",
      fontSize: 16,
      marginTop: 4,
      fontFamily: "Roboto_400Regular",
      fontWeight: 'bold'
    },
    itemsContainer: {
      flexDirection: "row",
      padding:10,
      marginTop: 16,
      marginBottom: 32,
      backgroundColor: "#000"
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
      fontFamily: "Roboto_400Regular",
      textAlign: "center",
      fontSize: 13,
    },
  
});

export default AddDrinkWater;