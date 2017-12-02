import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  Text,
  StyleSheet
} from 'react-native';

const detalheServico = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component<{}> {  
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#19D1C8',
    }
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor='#19D1C8' />

        <View style={styles.cabecalho}>
          <Image source={detalheServico} />
          <Text style={styles.txtTitulo}>Nossos Serviços</Text>
        </View>

        <View style={styles.detalheServico}>
          <Text style={styles.txtServico}>- Consultoria</Text>
          <Text style={styles.txtServico}>- Processos</Text>
          <Text style={styles.txtServico}>- Acompanhamento de Projetos</Text>
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
    color: '#19D1C8',
    marginLeft: 10,
    marginTop: 20
  },
  detalheServico: {
    padding: 20,
    marginTop: 20
  },
  txtServico: {
    fontSize: 18
  }
});
