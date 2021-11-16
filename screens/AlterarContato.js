import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import {StyleSheet, TextInput, Text ,View, Image, TouchableOpacity, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import ListaContatoScreen from './ListaContato';

function AlterarContatoScreen({route, navigation}) {
  const Stack = createNativeStackNavigator();
  const {id, nome, email, telefone} = route.params;

  const [contatoId,setContatoId]= useState(id);
  const [contatoNome,setContatoNome]= useState(nome);
  const [contatoEmail,setContatoEmail]= useState(email);
  const [contatoTelefone,setContatoTelefone]= useState(telefone);

  function alert (text) {
    Alert.alert(
      text,
      "",
      [ { text: "OK", onPress: () => navigation.navigate('ListaContato')} ]
    );
  }

  function editarContato(id){
    axios.put(`http://professornilson.com/testeservico/clientes/${id}`,{
        nome:contatoNome,
        email:contatoEmail,
        telefone:contatoTelefone
    }).then(function(response){
      alert ("Seu contato foi salvo");
        console.log(response);
    }).catch(function(error){
      alert ("Ocorreu um erro, favor tentar novamente");
        console.log(error);
    })
  }

  function deletaContato(id){
    axios.delete(`http://professornilson.com/testeservico/clientes/${id}`)
    .then(function(response){
      alert ("Seu contato foi excluído");
      console.log(response);
  }).catch(function(error){
    alert ("Ocorreu um erro, favor tentar novamente");
      console.log(error);
  })
}

  return (
    <View style={ styles.container }>
      <Stack.Screen name="ListaContato" component={ListaContatoScreen} />
          <TextInput style={ styles.input } placeholder="Nome" value={contatoNome} onChangeText={contatoNome => setContatoNome(contatoNome)}/>
          <TextInput style={ styles.input } placeholder="Email" value={contatoEmail} onChangeText={contatoEmail => setContatoEmail(contatoEmail)}/>
          <TextInput style={ styles.input } placeholder="Telefone" value={contatoTelefone} onChangeText={contatoTelefone => setContatoTelefone(contatoTelefone)}/>

          <TouchableOpacity 
            style={ styles.botaoSalvar } 
            onPress={() => editarContato(contatoId)}>
            
            <Text style={ styles.botaoText }>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={ styles.botaoExcluir } 
            onPress={() =>deletaContato(contatoId)}>
            
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