import { useAuth } from "../contexts/auth";

// import Logo from '../images/Be-Healthy.png';
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";
import Input from "../components/Input";
import * as Yup from "yup";
import getValidationErrors from "../utils/getValidationErrors";
import { IAuthState } from "../redux/modules/auth/types";
import { IState } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { authRequest } from "../redux/modules/auth/actions";
import { alertRequest } from "../redux/modules/alerts/actions";
import Spinner from 'react-native-loading-spinner-overlay';

// import api from '../../services/api';

interface SignUpFormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const route = useRoute();

  const { loading } = useSelector<IState, IAuthState>(state => state.auth);  

  const handleSignIn = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("Email obrigatório"),
        password: Yup.string()
          .min(6, "Mínimo de 6 caracteres")
          .required("Senha Obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      dispatch(
        authRequest({
          password: data.password,
          email: data.email,
          loading: true,
        }),
      );
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
      dispatch(
        alertRequest({
          message: 'Ocorreu um erro ao fazer login, tente novamente',
          isDialog: true,
          messageType: 'danger',
        }),
      );
    }
  }, []);

  function handleSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 24 }}
    >
      <Spinner
          visible={loading}
          textContent="Carregando..."
          textStyle={styles.spinnerTextStyle}
        />
      <View style={styles.logo}>
        <Image
          source={require("../images/Be-Healthy.png")}
          style={styles.image}
        />
      </View>

      <Form ref={formRef} onSubmit={handleSignIn}>
        <Input
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          name="email"
          icon="mail"
          placeholder="E-mail"
          returnKeyType="next"
          ref={emailInputRef}
          onSubmitEditing={() => {
            passwordInputRef.current?.focus();
          }}
        />

        <Input
          autoCorrect={false}
          name="password"
          icon="lock"
          secureTextEntry
          placeholder="Senha"
          returnKeyType="send"
          autoCompleteType="password"
          ref={passwordInputRef}
          onSubmitEditing={() => {
            formRef.current?.submitForm();
          }}
        />

        <RectButton
          style={styles.nextButtonIn}
          onPress={() => formRef.current?.submitForm()}
        >
          <Text style={styles.nextButtonText}>Entrar</Text>
        </RectButton>
      </Form>

      <RectButton style={styles.nextButtonUp} onPress={handleSignUp}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: "#5c8599",
    fontSize: 24,
    // fontFamily: "Nunito_700Bold",
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: "#D3E2E6",
  },

  label: {
    color: "#8fa7b3",
    // fontFamily: "Nunito_600SemiBold",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderColor: "#d3e2e6",
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: "top",
  },

  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },

  nextButtonIn: {
    backgroundColor: "#15c3f9",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginTop: 32,
  },
  nextButtonUp: {
    backgroundColor: "#E9967A",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    // fontFamily: "Nunito_800ExtraBold",
    fontSize: 16,
    color: "#FFF",
  },
  logo: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    flex: 1,
  },
  spinnerTextStyle: {
    color: '#15c3f9',
  },
});
