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
        <Image
          source={require('../../assets/image/check_in.png')}
          style={{width: 350, resizeMode: 'contain'}}
        />

        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => this.props.navigation.navigate('Reservas')}>
          <Text style={styles.moedas}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
