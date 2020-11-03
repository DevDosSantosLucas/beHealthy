import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../contexts/auth";
// import AuthRoutes from './auth.routes';

import NavStack from "./nav.routes";
import AuthStack from "./auth.routes";



const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }
  return signed ? <NavStack/>: <AuthStack />;
};
export default Routes;
