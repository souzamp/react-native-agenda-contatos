import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from  './screens/Login';
import CadastroUsuarioScreen from './screens/CadastroUsuario';
import ListaContatoScreen from './screens/ListaContato';
import AlterarContatoScreen from './screens/AlterarContato';
import CadastroContatoScreen from './screens/CadastroContato';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />
        <Stack.Screen name="ListaContato" component={ListaContatoScreen} />
        <Stack.Screen name="CadastroContato" component={CadastroContatoScreen} />
        <Stack.Screen name="AlterarContato" component={AlterarContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;