import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Icon_trofeu} from '../../assets/svg/icons';

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
          <View style={{alignItems: 'center'}}>
            <Icon_trofeu width={100} height={100} fill={'orange'} />
          </View>
        </View>

        <Image
          source={require('../../assets/image/check_out.png')}
          style={{
            width: 340,
            height: 400,
            marginTop: 20,
            resizeMode: 'contain',
          }}
        />

        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => this.props.navigation.navigate('Qg')}>
          <Text style={styles.moedas}>Enviar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
