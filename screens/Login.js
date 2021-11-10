import * as React from 'react';
import { View, Text, TouchableOpacity ,Image, StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


function HomeScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyBxCvAiFB3eJLh4cFIlBdiCR6KUeW2_qnI",  
    authDomain: "integracao-firebase-73f28.firebaseapp.com",  
    projectId: "integracao-firebase-73f28",
    storageBucket: "integracao-firebase-73f28.appspot.com",  
    messagingSenderId: "703468964500",  
    appId: "1:703468964500:web:2899c741a93bdc32b48281",  
    measurementId: "G-X2X1EY3QSV"  
  };
  
  const app = initializeApp(firebaseConfig);

  function loginFirebase(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Signed in
      console.log("conectado");
      const user = userCredential.user;
      navigation.navigate("ListaContato");
      // ...
    })
    .catch((error) => {
      console.log("não conectado");
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

    return (
        <View  style={ styles.container }>
            <Image style={styles.logo} source={require('../src/assets/logo.jpg')} />

            <TextInput 
              placeholder="Digite seu email"              
              leftIcon={
                <Icon
                  name='at'
                  size={24}      
                  color='black'    
                  />
                }
                value={email}
                onChangeText={email => setEmail(email)}
              style={styles.input}
            />
            <TextInput 
              placeholder="Digite sua senha" 
              leftIcon={
                <Icon
                  name='unlock-alt'
                  size={24}      
                  color='black'    
                  />
                }
                value={senha}
                onChangeText={senha => setSenha(senha)}
              style={styles.input} 
              secureTextEntry={true} 
            />

            <TouchableOpacity
                style={styles.botaoLogin}
                // onPress={() => { navigation.navigate("ListaContato") }}
                onPress={()=>loginFirebase()}
            >

                <Text style={styles.botaoText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botaoCadastro}
                onPress={() => navigation.navigate("CadastroUsuario")}
                //onPress={()=>cadastroUsuarioFirebase()}
            >

                <Text style={styles.botaoText}>Cadastre-se</Text>
            </TouchableOpacity>

        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor:'#2c3e50'
    },
    logo: {
      width: 150,
      height: 150,
      borderRadius: 100
    },
    input:{
      marginTop: 10,
      padding: 10,
      width: 300,
      backgroundColor: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 3
    },
    botaoLogin:{
      width: 300,
      height: 42,
      backgroundColor: '#3498db',
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center'
    },
    botaoCadastro:{
      width: 300,
      height: 42,
      backgroundColor: '#FF0000',
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center'
    },
    botaoText:{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
    }
  })