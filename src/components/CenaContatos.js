import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  Text,
  StyleSheet
} from 'react-native';

const detalheContato = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component<{}> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#61BD8C',
    }
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor='#61BD8C' />

        <View style={styles.cabecalho}>
          <Image source={detalheContato} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>

        <View style={styles.detalheContato}>
          <Text style={styles.txtContato}>TEL.: (11) 1234-1234</Text>
          <Text style={styles.txtContato}>CEL.: (11) 91234-1234</Text>
          <Text style={styles.txtContato}>EMAIL.: contato@atmconsultoria.com.br</Text>
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
    color: '#61BD8C',
    marginLeft: 10,
    marginTop: 20
  },
  detalheContato: {
    padding: 20,
    marginTop: 20
  },
  txtContato: {
    fontSize: 18
  }
});
