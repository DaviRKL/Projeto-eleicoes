import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput  } from 'react-native';


 function Justificar({ navigation }) {
  return (
           

                 <View style={{backgroundColor: '#111', padding: 15}}>
                 <View style={{backgroundColor: '#00cc2e', borderRadius: 8}}>
                  <Text style={{textAlign: "center", fontSize: 33, fontFamily: 'sans-serif', color: '#fff'}}>Justificativa eleitoral</Text>
                </View>
                
      <Text style={{color:'#fff',paddingTop:5}}>Digite seu titulo de eleitor</Text>
      <TextInput 
        style={{ borderWidth: 3, borderStyle: 'solid', borderColor: '#00ffff', borderRadius: 6, color:'#fff', }}
        placeholder=" Titulo de eleitor" placeholderTextColor="#fff"
        keyboardType="number-pad"
      />
      <View style={{paddingTop: 5, paddingBottom:5}}>
       <Text style={{color:'#fff'}}>Informe a sua justificativa</Text>
       <TextInput 
        style={{ borderWidth: 3, borderStyle: 'solid', borderColor: '#0FF', borderRadius: 6, color:'#fff', }}
        placeholder=" Justificativa" placeholderTextColor="#fff"
        keyboardType="number-pad"
      />
       </View>
         <Button color="#00cc2e" title="Enviar" onPress={() => navigation.navigate('TelaInicial')} />
       </View>
                

  );
 
}
export default Justificar