import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadastroContato from './CadastroContato';


type Props = {};
export default class ListaContatoScreen extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      Text: "",
      itens: [
        {
          key: "0",
          desc: "Marcos Andrade",
          contato: "8199359-2842",
          done: false
        },
        {
          key: "1",
          desc: "Patrícia Tavares",
          contato: "8199359-2842",
          done: false
        }]
    }
    this.inserirItem = this.inserirItem.bind(this);
    this.adicionar = this.adicionar.bind(this);
  }

  renderItem(obj) {
    return (
      <View style={styles.container}>
        <View style={styles.cardView}>
          <View style={styles.descriptionText}>
            <Text style={styles.cell}>{obj.item.desc}</Text>
            <Text style={styles.cell}>{obj.item.contato}</Text>
          </View>
        </View>
      </View>
    )
  }

  inserirItem() {
    let newItem = {
      key: this.state.itens.length.toString(),
      desc: this.state.text,
      contato: this.state.text,
      imageUri: this.state.text,
      done: false
    }
    let itens = this.state.itens;
    itens.push(newItem),
      this.setState({ itens })

    let text = ""
    this.setState({ text })
  }

  adicionar() {
    const navigation = useNavigation();
    navigation.navigate("CadastroContato");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <FlatList 
            style={styles.lista} 
            data={this.state.itens} 
            renderItem={this.renderItem} 
            extraData={this.state}/>
            
          <View style={styles.container}>
            {/* <TextInput style={styles.input} onChange={(text) => { this.setState({ text }) }} value={this.state.Text} /> */}
            {/* <Button onPress={this.inserirItem} title="Inserir" /> */}
            <TouchableOpacity
              style={styles.botaoLogin}
              onPress={ () => { this.adicionar() }}>

              <Text style={styles.botaoText}>Inserir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: 300,
    height: 42,
    backgroundColor: '#2c3e50',
    marginTop: 10,
    borderRadius: 4
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