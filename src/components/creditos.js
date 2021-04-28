import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Creditos extends React.Component {
  render(){
    return(
      <View>
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'black', textAlign: 'center', top: '100%', display: 'block', borderColor: '#000', borderWidth: 1, }}>CLEBER RIAN E LÍVIA NUNES</Text>
      </View>
    );
  }
}

export default Creditos;