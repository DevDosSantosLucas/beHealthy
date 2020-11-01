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

// import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  kilograms: number;
}

export default function SignUp() {
  const formRef = useRef<FormHandles>(null);

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const route = useRoute();

  const { signed, user, signIn } = useAuth();
  console.log(signed);
  console.log(user);
  console.log(signIn);

  const handleSignIn = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .required("Nome Obrigatório"),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("Email obrigatório"),
        password: Yup.string()
          .min(6, "Mínimo de 6 caracteres")
          .required("Senha obrigatório"),
        kilograms: Yup.string()
          .required("Informe Seu Peso")
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      signIn(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
      console.log("deu errado");
    }
  }, []);



  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 24 }}
    >
      

      <Form ref={formRef} onSubmit={handleSignIn}>
      <Input
          autoCorrect={false}
          autoCapitalize="none"
          name="user"
          icon="user"
          placeholder="Seu Nome"
          returnKeyType="next"
          // ref={}
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
          placeholder="Digite uma Senha"
          returnKeyType="send"
          autoCompleteType="password"
          ref={passwordInputRef}
          onSubmitEditing={() => {
            passwordInputRef.current?.focus();
          }}
        />      

          <Input
          autoCorrect={false}
          name="password"
          icon="lock"
          secureTextEntry
          placeholder="Repetir a Senha"
          returnKeyType="send"
          autoCompleteType="password"
          ref={passwordInputRef}
          onSubmitEditing={() => {
            passwordInputRef.current?.focus();
          }}
        /> 
        <Input
          keyboardType ={"numeric"}
          autoCorrect={false}
          autoCapitalize="none"
          name="kg"
          icon="plus-square"
          placeholder="Seu Peso (kg)"
          returnKeyType="next"
          // ref={}
          onSubmitEditing={() => {
            formRef.current?.submitForm();
          }}
          />
      <RectButton style={styles.nextButtonUp} onPress={() => formRef.current?.submitForm()}>
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
