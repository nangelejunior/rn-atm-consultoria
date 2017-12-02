import React from 'react';
import {
  Image,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import CenaPrincipal from '../components/CenaPrincipal';
import CenaClientes from '../components/CenaClientes';
import CenaContatos from '../components/CenaContatos';
import CenaEmpresa from '../components/CenaEmpresa';
import CenaServicos from '../components/CenaServicos';

const btnVoltar = require('../imgs/btn_voltar.png');

const Left = ({ onPress }) => (
  <TouchableHighlight
    underlayColor={'transparent'}
    onPress={onPress}
  >
    <Image source={btnVoltar} style={{ marginLeft: 10 }} />
  </TouchableHighlight>
);

const RootNavigator = StackNavigator({
    Home: { screen: CenaPrincipal },
    Clientes: { screen: CenaClientes },
    Contatos: { screen: CenaContatos },
    Empresa: { screen: CenaEmpresa },
    Servicos: { screen: CenaServicos }
  }, {
    headerMode: 'float',
    mode: 'card',
    cardStyle: {
      backgroundColor: '#fff'
    },
    navigationOptions: {
      headerLeft: Left,
      headerTitle: 'ATM Consultoria',
      headerTitleStyle: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 18
      }
    }
});

export default RootNavigator;
