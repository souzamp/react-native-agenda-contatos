import React, { Component } from 'react';
import {StyleSheet, Text, useColorScheme, View,} from 'react-native';

import styles from './styles/Index';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Olá</Text>
      </View>
    );
  }
}