import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  Text,
  StyleSheet
} from 'react-native';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const client1 = require('../imgs/cliente1.png');
const client2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component<{}> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#B9C941',
    }
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor='#B9C941' />

        <View style={styles.cabecalho}>
          <Image source={detalheCliente} />
          <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={client1} />
          <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={client2} />
          <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
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
    color: '#B9C941',
    marginLeft: 10,
    marginTop: 20
  },
  detalheCliente: {
    padding: 20,
    marginTop: 10
  },
  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20
  }
});
