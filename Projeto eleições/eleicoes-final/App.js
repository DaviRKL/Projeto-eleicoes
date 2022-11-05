import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from './Telas/Menu'
import Candidatos from './Telas/Candidatos'
import Calc from './Telas/TelaInicial'
import Login from './Telas/Login'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu/>
    </NavigationContainer>
  );
}

