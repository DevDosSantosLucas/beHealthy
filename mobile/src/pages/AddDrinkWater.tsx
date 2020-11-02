
import React, { useState } from 'react'
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
import api from '../services/api';

interface Water{
  drinks:number;
}




function AddDrinkWater() {
    // let  [drinks,setDrinks] = useState<Water>();
     
    const milliliters = [100,150,250,300,400,500,600,700,800]  
    const file = "../images/"
    const finalFile = ".png"
    const images = 
      "../images/150ml.png"
      // "../images/150ml.png",
      // "../images/150ml.png",
      // "../images/150ml.png",
      // "../images/150ml.png",
      // "../images/150ml.png",
      // "../images/150ml.png",
      // "../images/150ml.png",
      // "../images/150ml.png"
    // ]
    

    function handleBackDashboard(){
        navigate('Dashboard')
    }
    
    const  [quantity,setQuantity] = useState(0);
    function handleAddDrinkWater(receiveQuantity: number){
      
      console.log(receiveQuantity)

      // setQuantity(receiveQuantity)
      api.post("/drinks", {
        quantity:receiveQuantity
      });
      console.log(quantity)
      
      navigate('Dashboard');  
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
          
          


            

            {milliliters.map((milliliter) => 
           
            <TouchableOpacity 
            style={styles.item}
            onPress={()=>{handleAddDrinkWater(milliliter)}}
            activeOpacity={0.4}
            key={milliliter}>
              <Text style={styles.itemTitle}>{milliliter}</Text>
              
              <Image //aqui preciso chamar um array de imagens
                source={require(images)} />
                
            </TouchableOpacity>
            )}
            
          
           
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