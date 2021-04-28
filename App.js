import * as React from 'react';
import { Image, Text, View, StyleSheet, Button,  ScrollView, TouchableOpacity } from 'react-native';

import Menu from './src/components/menu'
import Armas from './src/components/armas'
import Jogo from './src/components/jogo'
import Creditos from './src/components/creditos'

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    }
  }

  jokenpo(escolhaUsuario) {
    const numAleatorio = Math.floor(Math.random() * 5);

    let escolhaComputador = '';

    switch (numAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      case 3: escolhaComputador = 'spock'; break;
      case 4: escolhaComputador = 'lagarto'; break;
      default: escolhaComputador = ''
    }

    let resultado = '';

    if (escolhaComputador === 'pedra') {
      switch(escolhaUsuario){
        case 'pedra': resultado = 'Empate!'; break;
        case 'papel': resultado = 'Você Venceu!'; break;
        case 'tesoura': resultado = 'Você Perdeu!'; break;
        case 'spock': resultado = 'Você Perdeu!'; break;
        case 'lagarto': resultado = 'Você Venceu!'; break;
        default: resultado = ''
      }
    }
    else if (escolhaComputador === 'papel') {
      switch(escolhaUsuario){
        case 'papel': resultado = 'Empate!'; break;
        case 'tesoura': resultado = 'Você Venceu!'; break;
        case 'pedra': resultado = 'Você Perdeu!'; break;
        case 'spock': resultado = 'Você Venceu!'; break;
        case 'lagarto': resultado = 'Você Perdeu!'; break;
        default: resultado = ''
      }
    }
    else if (escolhaComputador === 'tesoura') {
      switch(escolhaUsuario){
        case 'tesoura': resultado = 'Empate!'; break;
        case 'pedra': resultado = 'Você Venceu!'; break;
        case 'papel': resultado = 'Você Perdeu!'; break;
        case 'spock': resultado = 'Você Perdeu!'; break;
        case 'lagarto': resultado = 'Você Venceu!'; break;
        default: resultado = ''
      }
    }
    else if (escolhaComputador === 'spock') {
      switch(escolhaUsuario){
        case 'tesoura': resultado = 'Você Venceu!'; break;
        case 'pedra': resultado = 'Você Venceu!'; break;
        case 'papel': resultado = 'Você Perdeu!'; break;
        case 'spock': resultado = 'Empate!'; break;
        case 'lagarto': resultado = 'Você Perdeu!'; break;
        default: resultado = ''
      }
    }
    else if (escolhaComputador === 'lagarto') {
      switch(escolhaUsuario){
        case 'tesoura': resultado = 'Você Perdeu!'; break;
        case 'pedra': resultado = 'Você Venceu!'; break;
        case 'papel': resultado = 'Você Venceu!'; break;
        case 'spock': resultado = 'Você Venceu!'; break;
        case 'lagarto': resultado = 'Empate!'; break;
        default: resultado = ''
      }
    }

    this.setState({escolhaUsuario, escolhaComputador, resultado})
  }


  render() {
    return (
      <ScrollView style={{backgroundColor: ''}}>
      <View style={{paddingTop: 0}}>
        <Menu />

        <View style={styles.painel}>
        <View style={styles.touchable}>
          <TouchableOpacity onPress={() => {this.jokenpo('pedra'); }}>
            <Image source={require('./imgs/pedra.png')} style={{height:50, width: 50, borderRadius: 50}}/>
            <Text style={{fontWeight:'bold', fontFamily:'arial black', fontSize:10,  color:'white'}}> PEDRA</Text>
          </TouchableOpacity>
          <Text> </Text>
          <Text> </Text>
          <TouchableOpacity onPress={() => {this.jokenpo('papel'); }}>
            <Image source={require('./imgs/papel.png')} style={{height:50, width: 50, borderRadius: 50}}/>
            <Text style={{fontWeight:'bold', fontFamily:'arial black', fontSize:10,  color:'white'}}>  PAPEL</Text>
          </TouchableOpacity>
          <Text> </Text>
          <Text> </Text>
          <TouchableOpacity onPress={() => {this.jokenpo('tesoura'); }}>
            <Image source={require('./imgs/tesoura.png')} style={{height:50, width: 50, borderRadius: 50}}/>
            <Text style={{fontWeight:'bold', fontFamily:'arial black', fontSize:10,  color:'white'}}>TESOURA</Text>
          </TouchableOpacity>
          <Text> </Text>
          <Text> </Text>
          <TouchableOpacity onPress={() => {this.jokenpo('spock'); }}>
            <Image source={require('./imgs/spock.png')} style={{height:50, width: 50, borderRadius: 50}}/>
            <Text style={{fontWeight:'bold', fontFamily:'arial black', fontSize:10,  color:'white'}}>  SPOCK</Text>
          </TouchableOpacity>
          <Text> </Text>
          <Text> </Text>
          <TouchableOpacity onPress={() => {this.jokenpo('lagarto'); }}>
            <Image source={require('./imgs/lagarto.png')} style={{height:50, width: 50, borderRadius: 50}}/>
            <Text style={{fontWeight:'bold', fontFamily:'arial black', fontSize:10,  color:'white'}}>LAGARTO</Text>
          </TouchableOpacity>
        </View>
        
        </View>
        <Jogo/>
        
        <View style={styles.palco}>
        
          <Armas escolha={this.state.escolhaUsuario} />
          
          <Image source={require('./imgs/vs.png')} style={{height:60, width: 60, borderRadius: 50, margin:20, borderWidth: 2}}/>
          
          <Armas escolha={this.state.escolhaComputador}/>
          
        </View>
        <View style={styles.txtStyle}>
        <Text style={styles.txtEscolha}>{this.state.escolhaUsuario}</Text>
        <Text />
        <Text style={styles.txtEscolha}>{this.state.escolhaComputador}</Text>
        </View>
        <Text style={styles.txtResultado}>{this.state.resultado}</Text>
        <Creditos/>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  painel:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    textTransform: 'uppercase', 
    backgroundColor: 'black',
    marginTop:5
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  palco: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    textTransform: 'uppercase'
  },
  txtResultado:{
    fontSize: 25,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily:'arial black',
    color: 'black',
    height: 40, 

  },
  txtStyle:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    textTransform: 'uppercase'
  },
  txtEscolha:{
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'black',
    fontFamily:'arial black',
    height: 30
  }
});
