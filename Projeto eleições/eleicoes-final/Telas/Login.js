import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput  } from 'react-native';


 function Login({ navigation }) {
  return (
           

                 <View style={{backgroundColor: '#111', padding: 15}}>
                 <View style={{backgroundColor: '#00cc2e', borderRadius: 8}}>
                  <Text style={{textAlign: "center", fontSize: 40, fontFamily: 'sans-serif', color: '#fff'}}>Cadastro</Text>
                </View>
                
      <Text style={{color:'#fff',paddingTop:5}}>Digite seu email</Text>
      <TextInput 
        style={{ borderWidth: 3, borderStyle: 'solid', borderColor: '#00ffff', borderRadius: 6, color:'#fff', }}
        placeholder=" Email" placeholderTextColor="#fff"
        keyboardType="number-pad"
      />
      <View style={{paddingTop: 5, paddingBottom:5}}>
      
       <Text style={{color:'#fff'}}>Digite seu endereço</Text>
       <TextInput 
        style={{ borderWidth: 3, borderStyle: 'solid', borderColor: '#0FF', borderRadius: 6, color:'#fff', }}
        placeholder=" Endereço" placeholderTextColor="#fff"
        keyboardType="number-pad"
      />
       <Text style={{color:'#fff'}}>Digite seu título de eleitor</Text>
       <TextInput 
        style={{ borderWidth: 3, borderStyle: 'solid', borderColor: '#0FF', borderRadius: 6, color:'#fff', }}
        placeholder=" Endereço" placeholderTextColor="#fff"
        keyboardType="number-pad"
      />
       <Text style={{color:'#fff'}}>Digite seu CPF</Text>
       <TextInput 
        style={{ borderWidth: 3, borderStyle: 'solid', borderColor: '#0FF', borderRadius: 6, color:'#fff', }}
        placeholder=" CPF" placeholderTextColor="#fff"
        keyboardType="number-pad"
      />
       <Text style={{color:'#fff'}}>Digite sua data de nascimento</Text>
       <TextInput 
        style={{ borderWidth: 3, borderStyle: 'solid', borderColor: '#0FF', borderRadius: 6, color:'#fff', }}
        placeholder=" Data de nascimento" placeholderTextColor="#fff"
        keyboardType="number-pad"
      />
      <Text style={{color:'#fff'}}>Crie uma senha</Text>
       <TextInput 
        style={{ borderWidth: 3, borderStyle: 'solid', borderColor: '#0FF', borderRadius: 6, color:'#fff', }}
        placeholder=" Senha" placeholderTextColor="#fff"
        keyboardType="number-pad"
      />
       <Text style={{color:'#fff'}}>Confirme a sua senha</Text>
       <TextInput 
        style={{ borderWidth: 3, borderStyle: 'solid', borderColor: '#0FF', borderRadius: 6, color:'#fff', }}
        placeholder=" Senha" placeholderTextColor="#fff"
        keyboardType="number-pad"
      />
       
      
     
       </View>
         <Button color="#00cc2e" title="Confirmar" onPress={() => navigation.navigate('TelaInicial')} />
       </View>
                

  );
 
}
export default Login