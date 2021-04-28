import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const imagem3 = require('../../imgs/nomes.png');
const imagem4 = require('../../imgs/vs.png');

class Jogo extends React.Component {
  render(){
    return(

      <View style={{alignItems:'center'}}>
        <Image source={imagem3} style={{width:'100%', height:55, margin:2, borderWidth: 0}}/>
      </View>
    );
  }
}

export default Jogo;