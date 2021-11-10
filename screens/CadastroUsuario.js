import * as React from 'react';
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function CadastroUsuarioScreen({ navigation }) {
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

  function cadastroUsuarioFirebase() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate("Login");
        console.log('usuário cadastrado');
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('usuário não cadastrado');
        console.log(error.message);
        // ..
      });
  }

  return (
    <View style={styles.container}>
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
        style={styles.botaoSalvar}
        onPress={() => cadastroUsuarioFirebase()}
      >

        <Text style={styles.botaoText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CadastroUsuarioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },
  botaoSalvar: {
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
})