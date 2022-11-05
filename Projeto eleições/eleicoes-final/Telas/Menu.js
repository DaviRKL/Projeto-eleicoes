import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaInicial from './TelaInicial';
import Candidatos from './Candidatos';
import Votar from './Votar';
import Login from './Login';
import TrocaTela from './TrocaTela'
import Justificar from './Justificar'

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
      <Drawer.Navigator initialRouteName="Eleições 2022">
      <Drawer.Screen name="Eleições 2022" component={TrocaTela} />
        <Drawer.Screen name="Candidatos" component={Candidatos} />
        <Drawer.Screen name="Votar" component={Votar} />
         <Drawer.Screen name="Justificativa eleitoral" component={Justificar} />
      </Drawer.Navigator>
      
  );
}
 