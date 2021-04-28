import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

const imagem = require('../../imgs/jogadores.png');
const imagem2 = require('../../imgs/regras.png');

class Menu extends React.Component {
  render(){
    return(
      
      <View style={{margin: 0}}>
        <View style={{marginLeft: 0, justifyContent:'space-between', flexDirection: 'row', backgroundColor: 'black', borderWidth: 3, borderColor: 'black'}}>
        <TouchableOpacity onPress={() => {imagem2}}>
            <Image source={require('../../imgs/botao.png')} style={{height:30, width: 30, borderRadius: 40, marginLeft: 8, marginTop:2}}/>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', fontSize: 18, fontFamily:'arial black', color:'white', marginTop:5}}>JOKENPO 2</Text>
          <Button title='JOGO'  onPress ={() => {this.trocaImg;}}/>
          
        </View>
        
        <View style={{borderColor: '#000', borderWidth: 3, marginTop:5, alignItems: 'center'}}>
        <Image source={imagem} title='img' style={{width:300, height:250}}/>
        </View>

      </View>
    );
  }
}

export default Menu;