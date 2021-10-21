import React, { Component } from 'react';
import {StyleSheet, TextInput, Text ,View, Image, TouchableOpacity, Alert} from 'react-native';

export default class App extends Component {
  cliclou = () =>{Alert.alert("IFPE", "Clicou")}
  render() {
    return(
      <View style={ styles.container }>
          <Image style={ styles.logo } source={ require('../assets/logo.jpg') } />

          <TextInput style={ styles.input } placeholder="Digite seu email"/>
          <TextInput style={ styles.input } placeholder="Digite sua senha" secureTextEntry={true}/>

          <TouchableOpacity 
            style={ styles.botao } 
            onPress={ () => { this.cliclou() }}>
            
            <Text style={ styles.botaoText }>Login</Text>
          </TouchableOpacity>
      </View>
      )
  }
}

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
  botao:{
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
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