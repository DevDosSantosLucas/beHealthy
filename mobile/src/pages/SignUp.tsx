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
// import * as auth from "../services/auth";

import api from "../services/api";
import { useDispatch } from "react-redux";
import { alertRequest } from "../redux/modules/alerts/actions";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  kilograms: string;
}

export default function SignUp() {
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const repeatpwdInputRef = useRef<TextInput>(null);
  const nameInputRef = useRef<TextInput>(null);
  const kilogramsInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleSignUp = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .required("Nome Obrigatório")
          .max(30, "Máximo 30 caracteres"),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("Email obrigatório"),
        password: Yup.string()
          .min(6, "Mínimo de 6 caracteres")
          .required("Senha obrigatório"),
        kilograms: Yup.string()
          .max(5, "Maximo 5 caracteres")
          .required("Informe Seu Peso"),
        password_confirmation: Yup.string()
          .required("Você precisa confirmar a nova senha")
          .oneOf([Yup.ref("password")], "As senhas precisam ser iguais"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api
        .post("/users", {
          name: data.name,
          email: data.email,
          password: data.password,
          kilograms: data.kilograms,
        })
        .catch((error) => {
          dispatch(
            alertRequest({
              isDialog: true,
              messageType: "danger",
              message: error.response.data.message,
            })
          );
        });

      navigation.navigate("SignIn");

      dispatch(
        alertRequest({
          message:
            "Usuário cadastro com sucesso, por favor realize o seu login",
          messageType: "success",
          isDialog: true,
        })
      );
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
      dispatch(
        alertRequest({
          message: "Ocorreu um erro ao tentar se cadastrar, tente mais tarde.",
          messageType: "danger",
          isDialog: true,
        })
      );
    }
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 24 }}
    >
      <Form ref={formRef} onSubmit={handleSignUp}>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          name="name"
          icon="user"
          placeholder="Seu Nome"
          returnKeyType="next"
          ref={nameInputRef}
          onSubmitEditing={() => {
            emailInputRef.current?.focus();
          }}
        />
        <Input
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          name="email"
          icon="mail"
          placeholder="Seu E-mail"
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
          placeholder="Digite uma senha"
          returnKeyType="send"
          autoCompleteType="password"
          ref={passwordInputRef}
          onSubmitEditing={() => {
            repeatpwdInputRef.current?.focus();
          }}
        />

        <Input
          autoCorrect={false}
          name="password_confirmation"
          icon="lock"
          secureTextEntry
          placeholder="Confirme a sua senha"
          returnKeyType="send"
          autoCompleteType="password"
          ref={repeatpwdInputRef}
          onSubmitEditing={() => {
            kilogramsInputRef.current?.focus();
          }}
        />
        <Input
          keyboardType="numeric"
          autoCorrect={false}
          autoCapitalize="none"
          name="kilograms"
          icon="bar-chart"
          placeholder="Seu Peso (kg)"
          returnKeyType="next"
          ref={kilogramsInputRef}
          onSubmitEditing={() => {
            formRef.current?.submitForm();
          }}
        />
        <RectButton
          style={styles.nextButtonUp}
          onPress={() => formRef.current?.submitForm()}
        >
          <Text style={styles.nextButtonText}>Cadastrar</Text>
        </RectButton>
      </Form>
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
    fontFamily: "Nunito_700Bold",
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: "#D3E2E6",
  },

  label: {
    color: "#8fa7b3",
    fontFamily: "Nunito_600SemiBold",
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
  nextButtonUp: {
    backgroundColor: "#E9967A",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 16,
    color: "#FFF",
  },
});
