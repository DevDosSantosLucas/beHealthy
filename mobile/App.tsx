import React from 'react';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import {AuthProvider} from './src/contexts/auth';
 

import Routes from './src/routes/';

import {useFonts} from 'expo-font';
import{Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito';


const App: React.FC = ()=> {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
     Nunito_700Bold,
      Nunito_800ExtraBold,
  });
  
  if(!fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer>
    <AuthProvider>
        <Routes/>
    </AuthProvider>
      
  </NavigationContainer>
  );
}


export default App;
