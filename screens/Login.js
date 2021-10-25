import * as React from 'react';
import { View, Text, TouchableOpacity ,Image, StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



function HomeScreen({ navigation }) {
    return (
        <View  style={ styles.container }>
            <Image style={styles.logo} source={require('../src/assets/logo.jpg')} />

            <TextInput style={styles.input} placeholder="Digite seu email" />
            <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />

            <TouchableOpacity
                style={styles.botaoLogin}
                onPress={() => { navigation.navigate("ListaContato") }}>

                <Text style={styles.botaoText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botaoCadastro}
                onPress={() => navigation.navigate("CadastroUsuario")}>

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