import React from 'react';
import Dashboard from '../pages/Dashboard';
import AddDrinkWater from '../pages/AddDrinkWater';




import {createStackNavigator} from '@react-navigation/stack';
import { Modal } from 'react-native';

const AppStack = createStackNavigator();

const AuthRoutes : React.FC  = ()=>(
    <AppStack.Navigator 
     mode="modal" 
    screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true
    //     cardStyleInterpolator: ({ current: { progress } }) => ({
    //       cardStyle: {
    //         opacity: progress.interpolate({
    //           inputRange: [0, 0.5, 0.9, 1],
    //           outputRange: [0, 0.25, 0.7, 1],
    //         }),
    //       },
    //       overlayStyle: {
    //         opacity: progress.interpolate({
    //           inputRange: [0, 1],
    //           outputRange: [0, 0.5],
    //           extrapolate: 'clamp',
    //         }),
    //       },
    //     }),
      }}
      >
        <AppStack.Screen 
         options={{ headerShown:false}}
        name ="Dashboard" component = {Dashboard}/>

    <AppStack.Screen  
         options={{ headerShown:false , }   }
        name ="AddDrinkWater" component = {AddDrinkWater}/>

    </AppStack.Navigator>
    
);
export default AuthRoutes;

