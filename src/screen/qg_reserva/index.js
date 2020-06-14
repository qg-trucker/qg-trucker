import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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
            <Text style={styles.title}>Reservar</Text>

            <TouchableOpacity style={styles.button}>
              <Icon_porco width={30} height={30} fill={'white'} />
              <Text style={styles.moedas}>500</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>
            Selecione o tempo que você deseja reservar:
          </Text>
        </View>

        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => {
            this.props.navigation.navigate('Qg_reserva_sucesso');
          }}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon_clock width={25} height={25} fill={'black'} />
              <Text style={styles.titleClock}> das 8h as 11h</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon_coin width={25} height={25} fill={'black'} />
              <Text style={styles.titleClock}> 240 moedas</Text>
            </View>
          </View>
          <View>
            <Text style={styles.selecionar}>Reservar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerButton}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon_clock width={25} height={25} fill={'black'} />
              <Text style={styles.titleClock}> das 12h as 17h</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon_coin width={25} height={25} fill={'black'} />
              <Text style={styles.titleClock}> 240 moedas</Text>
            </View>
          </View>
          <View>
            <Text style={styles.selecionar}>Reservar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerButton}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon_clock width={25} height={25} fill={'black'} />
              <Text style={styles.titleClock}> das 18h as 6h</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon_coin width={25} height={25} fill={'black'} />
              <Text style={styles.titleClock}> 480 moedas</Text>
            </View>
          </View>
          <View>
            <Text style={styles.selecionar}>Reservar</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
