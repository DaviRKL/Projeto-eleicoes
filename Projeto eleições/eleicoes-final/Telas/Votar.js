import React, {useState} from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import candidatos from './Candidatos';


const Candidato = 0;

const Stack = createStackNavigator();

export default function Votar() {
  return (
    

    <View style={{backgroundColor: '#111'}}>
     <View style={{backgroundColor: '#00a86b'}}>
    
        <Text style={{textAlign: "center", fontSize: 40, fontFamily: 'sans-serif', color: '#DEEEED'}}>Votar</Text>
     </View>
        <Text style={{color:'#FFF',paddingTop:5, fontSize: 20}}>Digite o número do candidato</Text>
        <TextInput 
            style={{ borderWidth: 3, borderStyle: 'solid', borderColor: '#00ffff', borderRadius: 6, color:'#FFF'}}
            placeholder="Número" placeholderTextColor="#FFF"
            keyboardType="number-pad"
           // onChangeText={(texto) => setX(parseInt(texto))}
           // value={x}
          />
          <View style={{paddingTop: 5, paddingBottom:5,}}>
            <Text style={{color:'#FFF',paddingTop:5, fontSize: 16}}>Nome: _______________ </Text>
            <Text style={{color:'#FFF',paddingTop:5, fontSize: 16}}>Partido: ______________</Text>
            <Text style={{color:'#FFF',paddingTop:5, fontSize: 16}}>Cargo: _______________ </Text>
            <Text style={{color:'#FFF',paddingTop:5, paddingBottom: 150, fontSize: 16}}>Foto:</Text>
            
          </View>
          
          
          <Button color="#00cc2e" title="Confirmar"/>
          <Button color="#F5EA00" title="Corrigir"/>
          <Button color="#F02626" title="Anular"/>
          

           
           
         
       </View>          
  );
}
function Verificar_Candidato()
{
 
}

 