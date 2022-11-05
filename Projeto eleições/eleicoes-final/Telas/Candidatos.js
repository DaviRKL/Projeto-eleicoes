import React from 'react';
import { View, Image, StyleSheet, Text, FlatList, SafeAreaView,ScrollView, Button } from 'react-native';
  
  const candidatos=[
 
  {
    id:'0001',
    nome:'Monkey D. Luffy',
    partido:'One Piece',
    cargo:'Presidente',
    imagem: require('../Imagens/Luffy.jpg')
  },
  {
    id:'0002',
    nome:'Buggy D. Clown',
    partido:'One Piece',
    cargo:'Presidente',
    imagem: require('../Imagens/Buggy.jpg')
  },
  {
    id:'0003',
    nome:'Bob Esponja',
    partido:'Fenda do biquíni',
    cargo:'Presidente',
    imagem: require('../Imagens/bob.jpg')
  },
  {
    id:'0004',
    nome:'Patrick',
    partido:'Fenda do biquíni',
    cargo:'Presidente',
    imagem: require('../Imagens/Patrick.jpg')
  },
  {
    id:'0005',
    nome:'Shrek',
    partido:'Pantano',
    cargo:'Senador',
   imagem: require('../Imagens/shrek.jfif')
  },
  {
    id:'0006',
    nome:'Nemo',
    partido:'Oceano',
    cargo:'Deputado Estadual',
    imagem: require('../Imagens/nemo.jpg')
  },
  {
    id:'0007',
    nome:'Sonic',
    partido:'Green Hill',
    cargo:'Governador',
    imagem: require('../Imagens/Sonic.jpg') 
  },
  {
    id:'0008',
    nome:'Rapunzel',
    partido:'Princesas',
    cargo:'Presidente',
    imagem: require('../Imagens/rapunzel.jpg')
  },
  {
    id:'0009',
    nome:'Go D. Ussop',
    partido:'One Piece',
    cargo:'Senador',
    imagem: require('../Imagens/Usopp.jpg')
  },
  {
    id:'0010',
    nome:'Sanji',
    partido:'One Piece',
    cargo:'Deputado federal',
    imagem: require('../Imagens/sanji.jpg')
  },
 
]
function Candidatos({ navigation }) {
  return (

    <View style={{backgroundColor: '#212061'}}> 
      <Text style={{flex: 1, textAlign: "center", fontSize: 40, fontFamily: 'sans-serif', color: '#FFF', backgroundColor: '#00a86b'}}>Candidatos</Text> 
      <FlatList  data={candidatos}
          renderItem = {({item,index,separators})=>( <View style={{padding:20, marginVertical: 8, marginHorizontal: 16, borderTopRightRadius: 30,borderTopLeftRadius: 15, backgroundColor: '#226FEF'}}> 
              
                <View style={{backgroundColor: '#00a86b', borderRadius: 15}}> 
                  <Text style={{ fontSize: 20, fontFamily: 'sans-serif', color: '#DEEEED', }}> NÚMERO: {item.id}<br/> NOME: {item.nome}<br/> PARTIDO: {item.partido}<br/> CARGO: {item.cargo}</Text>
                </View>
                
                <View style={{marginTop:5, alignItems: 'center', marginBottom:5}}>
                  <Image style={{ width: 244, height: 200,}} source={item.imagem}/>
                </View>
              </View>
          )}/>
    </View>
    
  

    
  );
}

  

export default Candidatos;
 