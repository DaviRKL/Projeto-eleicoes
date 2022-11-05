import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import TelaInicial from './TelaInicial';


const Stack = createStackNavigator();

export default function TrocaTela() {
  return (
    <Stack.Navigator headerMode="Screen">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TelaInicial" component={TelaInicial} />
    </Stack.Navigator>
  );
}
