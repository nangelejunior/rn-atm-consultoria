import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  Text,
  StyleSheet
} from 'react-native';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component<{}> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#EC7148',
    }
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor='#EC7148' />

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>

        <View style={styles.detalheEmpresa}>
          <Text style={styles.txtEmpresa}>Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color: '#EC7148',
    marginLeft: 10,
    marginTop: 20
  },
  detalheEmpresa: {
    padding: 20,
    marginTop: 20
  },
  txtEmpresa: {
    fontSize: 18
  }
});
