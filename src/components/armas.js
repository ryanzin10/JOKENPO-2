import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

const imgPedra = require('../../imgs/pedra.png');
const imgPapel = require('../../imgs/papel.png');
const imgTesoura = require('../../imgs/tesoura.png');
const imgSpock = require('../../imgs/spock.png');
const imgLagarto = require('../../imgs/lagarto.png');
const imgVs = require('../../imgs/vs.png');

class Armas extends React.Component {
  render() {
    
    if (this.props.escolha === 'pedra') { 
      return (
      <View styles={styles.icone}>
        <Text styles={styles.txtJogador}>{this.props.jogador}</Text>
        <Image source={imgPedra} style={{width: 80, height:80, borderRadius: 150, borderWidth: 2}}/>
      </View>
      );
    }
    else if (this.props.escolha === 'papel') { 
      return(
      <View styles={styles.icone}>
        <Text styles={styles.txtJogador}>{this.props.jogador}</Text>
        <Image source={imgPapel} style={{width: 80, height:80, borderRadius: 150, borderWidth: 2}}/>
      </View>
      );
    }
    else if (this.props.escolha === 'tesoura') { 
      return(
      <View styles={styles.icone}>
        <Text styles={styles.txtJogador}>{this.props.jogador}</Text>
        <Image source={imgTesoura} style={{width: 80, height:80, borderRadius: 150, borderWidth: 2}}/>
      </View>
      );
    }
    else if (this.props.escolha === 'spock') { 
      return(
      <View styles={styles.icone}>
        <Text styles={styles.txtJogador}>{this.props.jogador}</Text>
        <Image source={imgSpock} style={{width: 80, height:80, borderRadius: 150, borderWidth: 2}}/>
      </View>
      );
    }
    else if (this.props.escolha === 'lagarto') { 
      return(
      <View styles={styles.icone}>
        <Text styles={styles.txtJogador}>{this.props.jogador}</Text>
        <Image source={imgLagarto} style={{width: 80, height:80, borderRadius: 150, borderWidth: 2}}/>
      </View>
      
      );
    }
    return false;
  }
}

const styles = StyleSheet.create({
  icone: {
    flexDirection: 'column',
    paddingBottom: 20
  },
  txtJogador: {
    fontSize: 20
  }
});

export default Armas;
