import React from "react";

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./src/contexts/auth";

import Routes from "./src/routes/";

import { Provider } from "react-redux";
import { StatusBar } from "react-native";

import { useFonts } from "expo-font";
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";
import store from "./src/redux";
import FlashMessage from "react-native-flash-message";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    // Nunito_600SemiBold,
    // Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <Provider store={store}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </Provider>
      </NavigationContainer>
      <FlashMessage position="bottom" />
    </>
  );
};

export default App;
