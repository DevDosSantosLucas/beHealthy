
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
            <Modal transparent={true} 
                // onRequestClose= {oncancel}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                  }}
                animationType='slide'>
                <TouchableWithoutFeedback
                    onPress={handleBackDashboard}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Quantos ml de água você tomou?</Text>
                    
                    
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
      <View style={styles.buttons}>
                        
                        <TouchableOpacity onPress={handleBackDashboard}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback
                    onPress={handleBackDashboard}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }



const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container: {
        backgroundColor: '#FFF'
    },
    header: {
        // fontFamily: commonStyles.fontFamily,
        // backgroundColor: commonStyles.colors.today,
        // color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    input: {
        
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: '#000'
    },
    date: {
        
        fontSize: 20,
        marginLeft: 15
    },
    // 
    // 
    
      
        title: {
          fontSize: 20,
          fontFamily: "Ubuntu_700Bold",
          marginTop: 24,
        },
      
        description: {
          color: "#6C6C80",
          fontSize: 16,
          marginTop: 4,
          fontFamily: "Roboto_400Regular",
        },
      
        mapContainer: {
          flex: 1,
          width: "100%",
          borderRadius: 10,
          overflow: "hidden",
          marginTop: 16,
        },
      
        map: {
          width: "100%",
          height: "100%",
        },
      
       
      
        mapMarkerContainer: {
          width: 90,
          height: 70,
          backgroundColor: "#34CB79",
          flexDirection: "column",
          borderRadius: 8,
          overflow: "hidden",
          alignItems: "center",
        },
      
        mapMarkerImage: {
          width: 90,
          height: 45,
          resizeMode: "cover",
        },
      
        mapMarkerTitle: {
          flex: 1,
          fontFamily: "Roboto_400Regular",
          color: "#FFF",
          fontSize: 13,
          lineHeight: 23,
        },
      
        itemsContainer: {
          flexDirection: "row",
          marginTop: 16,
          marginBottom: 32,
        },
      
        item: {
          backgroundColor: "#fff",
          borderWidth: 2,
          borderColor: "#eee",
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
      
        selectedItem: {
          borderColor: "#34CB79",
          borderWidth: 2,
        },
      
        itemTitle: {
          fontFamily: "Roboto_400Regular",
          textAlign: "center",
          fontSize: 13,
        },
      
});

export default AddDrinkWater;