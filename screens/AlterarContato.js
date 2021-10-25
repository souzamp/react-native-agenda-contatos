import React, { Component } from 'react';
import {StyleSheet, TextInput, Text ,View, Image, TouchableOpacity, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function AlterarContatoScreen() {
  return (
    <View style={ styles.container }>
          
          <TextInput style={ styles.input } placeholder="Nome"/>
          <TextInput style={ styles.input } placeholder="Email" secureTextEntry={true}/>
          <TextInput style={ styles.input } placeholder="Telefone" secureTextEntry={true}/>

          <TouchableOpacity 
            style={ styles.botaoSalvar } 
            onPress={ () => { this.cliclou() }}>
            
            <Text style={ styles.botaoText }>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={ styles.botaoExcluir } 
            onPress={ () => { this.cliclou() }}>
            
            <Text style={ styles.botaoText }>Excluir</Text>
          </TouchableOpacity>
      </View>
  );
}

export default AlterarContatoScreen;

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
  },
  botaoExcluir:{
    width: 300,
    height: 42,
    backgroundColor: '#FF0000',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
})