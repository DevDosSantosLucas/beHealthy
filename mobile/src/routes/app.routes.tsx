import React from 'react';
import Dashboard from '../pages/Dashboard';
import AddDrinkWater from '../pages/AddDrinkWater';




import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AuthRoutes : React.FC  = ()=>(
    <AppStack.Navigator>
        <AppStack.Screen 
         options={{ headerShown:false}}
        name ="Dashboard" component = {Dashboard}/>

    <AppStack.Screen 
         options={{ headerShown:false}}
        name ="AddDrinkWater" component = {AddDrinkWater}/>

    </AppStack.Navigator>
    
);
export default AuthRoutes;

