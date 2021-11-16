import React, { Component } from 'react';
import {StyleSheet, TextInput, Text ,View, Image, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

import ListaContatoScreen from './ListaContato';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      telefone:""
    };
  }

  alert(text){
    Alert.alert(
      text,
      "",
      [ { text: "OK", onPress: () => navigation.navigate('ListaContato') } ]
    )
  }

  inserirtContato() {
    axios.post('http://professornilson.com/testeservico/clientes', {
      nome: this.state.nome,
      email: this.state.email,
      telefone: this.state.telefone,
      cpf: ""
    })
    .then(function (response) {
      alert("Contato salvo com sucesso!");
      console.log(response);
    })
    .catch(function (error) {
      alert("Ocorreu um erro, favor tentar novamente");
      console.log(error);
    });
  }

  render() {
    const Stack = createNativeStackNavigator();
    return(
      <View style={ styles.container }>
        <Stack.Screen name="ListaContato" component={ListaContatoScreen} />      
          <TextInput 
            style={ styles.input } 
            placeholder="Nome"
            value={this.nome}
            onChangeText={nome => this.state.nome}
          />
          <TextInput 
            style={ styles.input } 
            placeholder="Email"
            value={this.email}
            onChangeText={email => this.state.email}
          />
          <TextInput 
            style={ styles.input } 
            placeholder="Telefone" 
            value={this.telefone}
            onChangeText={telefone => this.state.telefone}
          />

          <TouchableOpacity 
            style={ styles.botaoSalvar } 
            onPress={ () => { this.inserirtContato() }}
          >            
            <Text style={ styles.botaoText }>Salvar</Text>
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
  botaoSalvar:{
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