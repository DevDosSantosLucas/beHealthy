import { Reducer } from "redux";
import produce from "immer";
import AsyncStorage from "@react-native-community/async-storage";
import { IAuthState, ActionTypes } from "./types";
import { IUser } from "../../../interfaces";
import { number } from "yup";

const INITIAL_STATE: IAuthState = {
  token: "",
  user: {} as IUser,
  loading: false,
};

const auth: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.authSuccess: {
        const { user, token } = action.payload;

        draft.user = user;
        draft.token = token;
        draft.loading = false;

        AsyncStorage.setItem("Healthy:User", JSON.stringify(user));
        AsyncStorage.setItem("Healthy:Token", token);

        break;
      }

      case ActionTypes.logout: {
        draft.user = null;
        draft.token = "";

        AsyncStorage.removeItem("Healthy:User");
        AsyncStorage.removeItem("Healthy:Token");

        break;
      }

      case ActionTypes.setLoading: {
        const { loading } = action.payload;

        draft.loading = loading;
        break;
      }

      case ActionTypes.updateQuantityDrinked: {
        const { quantity } = action.payload;

        draft.user = {
          ...draft.user,
          quantityThatYouDrinked: draft.user?.quantityThatYouDrinked + quantity,
        } as IUser;
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default auth;
