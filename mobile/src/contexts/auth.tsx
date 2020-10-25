import React,{createContext, useState, useEffect, useContext} from 'react';

import * as auth from '../services/auth';
import api from '../services/api'
import AsyncStorage from '@react-native-community/async-storage';

interface User{
    name:string;
    email:string;
    kilograms:number;
}

interface AuthContextData{
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut():void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider : React.FC = ({children})=> {
    const [user,setUser] = useState<User |null>(null);
    const [loading,setLoading] = useState(false);//true para funcionar o loading 

    useEffect (()=> {
        async function loadStoragedData(){

            const storagedUser = await AsyncStorage.getItem('@eswapp:user');
            const storagedToken = await AsyncStorage.getItem('@eswapp:token');  
            
            
            if(storagedUser && storagedToken){
                api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

                setUser(JSON.parse(storagedUser));
                setLoading(false);
            }
        }
        loadStoragedData();
    },[]);

    async function signIn(){
          
        const response = await auth.signIn();
        setUser(response.user);

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
        await AsyncStorage.setItem('@mobile:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@mobile:token', response.token);

        console.log(response);
       
    };
    function signOut(){
        AsyncStorage.clear().then(()=>{
            setUser(null);
        });
    };

    
    return (
        <AuthContext.Provider 
            value= {{loading, signed: !!user,  user, signIn,signOut}}>
            
                    {children}
        </AuthContext.Provider>
    );
};

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}