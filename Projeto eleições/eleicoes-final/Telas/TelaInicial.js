import * as React from 'react';
import { Button, View, Text, Image} from 'react-native';
  
   function TelaInicial({ navigation }) {
  return (
    <View style={{backgroundColor: '#00a86b'}}>
                  <Text style={{textAlign: "center", fontSize: 40, fontFamily: 'sans-serif', color: '#FFF'}}>Eleições 2022</Text>
                   <View style={{ alignItems: 'center'}}>
                    <Image style={{ width: 200, height: 150,}} source={require('../Imagens/tribunal-superior-eleitoral-logo.png')}/>
                    <Text style={{textAlign: "center", fontSize: 12, fontFamily: 'sans-serif', color: '#FFF'}}>Feito por Davi Ryan Konuma Lima, Gabriel Sales Dorea, Isabela de Oliveira Jacob e Izabelly Ortolano Rosa da Silva</Text>
                    </View>
                </View>
                
  );
}


  
export default TelaInicial;