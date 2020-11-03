import React, { useEffect } from "react";

import NavStack from "./nav.routes";
import AuthStack from "./auth.routes";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../redux";
import { IAuthState } from "../redux/modules/auth/types";
import { IAlertState } from "../redux/modules/alerts/types";
import { showMessage } from 'react-native-flash-message';
import { loadUser } from "../redux/modules/auth/actions";


const Routes: React.FC = () => {
  const { user } = useSelector<IState, IAuthState>(state => state.auth);

  const dispatch = useDispatch();
  const message = useSelector<IState, IAlertState>(state => state.alerts);

  useEffect(() => {
    if (message.isDialog) {
      console.log('teste')
      showMessage({
        message: 'Nova mensagem',
        description: message.message,
        type: message.messageType,
        floating: true,
      });
    }
  }, [message, dispatch]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return user?.name ? <NavStack/>: <AuthStack />;
};
export default Routes;
