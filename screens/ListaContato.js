import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, FlatList, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, ListItem, Avatar, Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadastroContato from './CadastroContato';
import axios from 'axios';

export default function ListaContatoScreen({ navigation }){
  const [dados, setDados] = useState([]);

  useEffect(()=>{
    function getData(){
      axios.get('http://professornilson.com/testeservico/clientes')
        .then(function (response) {
          setDados(response.data);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
        });
      }
    getData();
  },[])

  function openContato(l){
    navigation.navigate('AlterarContato',
                        {id: l.id, 
                        nome:l.nome, 
                        email:l.email, 
                        telefone:l.telefone})
  }

  return(
    <View>
      <ScrollView>
        {    dados.map((l, i) => (      
        <ListItem key={i} bottomDivider onPress={()=>openContato(l)}>
            <Avatar source={{uri: 'https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1'}} />
            <ListItem.Content>
              <ListItem.Title>{l.nome}</ListItem.Title>
              <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
              <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
        ))  }
      </ScrollView>
      <Button
        onPress={() => navigation.navigate("CadastroContato")}
        icon={    
          <Icon      
            name="user-plus"      
            size={35}      
            color="white"    
          /> 
        }
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor:'#2c3e50'
  },
  listacontato: {
    width: 300,
    height: 42,
    backgroundColor: '#FF0000',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lista: {
    marginTop: 24,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  descriptionText: {
    flex: 1
  },
  cell: {
    alignItems: "center",
    justifyContent: "center"
  },
  InputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: "white",
    borderColor: "#CCC",
    borderWidth: 3,
    padding: 2,
    margin: 20,
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    alignItems: "center",
    marginTop: 0.3
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '94%',
    minHeight: 50
  },
  promotionImage: {
    width: '50%'
  },
  botaoLogin:{
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  }
});