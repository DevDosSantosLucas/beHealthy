
import {useAuth} from '../contexts/auth';

// import Logo from '../images/Be-Healthy.png';
import React, { useEffect ,useState} from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity ,Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';

// import api from '../../services/api';



export default function SignUp() {
  
    const [name,setName] =useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [kilograms,setKilograms] =useState('');

    const navigation = useNavigation();

    const route = useRoute();
    
   
    const {signed,user,signIn} = useAuth();
    console.log(signed);
    console.log(user);
    console.log(signIn);

    // function handleSignIn(){
    //  console.log("logar");
    //  signIn();
    // }
    async function handleSignIn(){
        console.log("logar");
        signIn(); 

        // const {latitude,longitude} = params.position;

        // const data = new FormData();

        // data.append('name',name);
        // data.append('password', password);
        
      
        // await api.post('orphanages',data)

        // navigation.navigate('OrphanagesMap');
    } 

    

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>      
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText = {setName}
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        value = {email}
        onChangeText = { setEmail}
      />
    
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value = {password}
        onChangeText = { setPassword}
      />

      <Text style={styles.label}>Qual seu Peso?</Text>
      <TextInput
        style={styles.input}
        value = {kilograms}
        onChangeText = { setKilograms}
      />

      

      <RectButton style={styles.nextButtonUp} onPress={handleSignIn}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6'
  },

  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

 
  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  nextButtonUp: {
    backgroundColor: '#E9967A',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})