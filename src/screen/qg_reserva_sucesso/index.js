import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Icon_clock, Icon_coin, Icon_porco} from '../../assets/svg/icons';

import styles from './style';

export default class Qg_reserva extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Sucesso!</Text>

            <TouchableOpacity style={styles.button}>
              <Icon_porco width={30} height={30} fill={'white'} />
              <Text style={styles.moedas}>260</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>
            Selecione o tempo que você deseja reservar:
          </Text>
        </View>

        <Image
          source={require('../../assets/image/success.png')}
          style={{width: 300, resizeMode: 'contain'}}
        />

        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => this.props.navigation.navigate('Reservas')}>
          <Text style={styles.moedas}>Ver minha reservas</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
