import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {Icon_porco} from '../../assets/svg/icons';
import MapView from 'react-native-maps';
import {Marker, Callout} from 'react-native-maps';

import styles from './style';

export default class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: [
        {
          latlng: {latitude: -22.7375052, longitude: -47.3306024},
          img: require('../../assets/image/qg/1.jpeg'),
          nome: 'QG 232',
          km: 3,
        },
        {
          latlng: {latitude: -22.752014, longitude: -47.3356746},
          img: require('../../assets/image/qg/2.jpeg'),
          nome: 'QG 232',
          km: 4,
        },
        {
          latlng: {latitude: -22.7733433, longitude: -47.3390862},
          img: require('../../assets/image/qg/3.jpeg'),
          nome: 'QG 232',
          km: 6,
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder={'Para onde vamos?'}
            placeholderTextColor={'black'}
          />

          <TouchableOpacity style={styles.button}>
            <Icon_porco width={30} height={30} fill={'white'} />
            <Text style={styles.moedas}>500</Text>
          </TouchableOpacity>
        </View>
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: -22.7375052,
            longitude: -47.3306024,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {this.state.marker.map((e) => {
            return (
              <Callout onPress={() => alert('teste')}>
                <Marker coordinate={e.latlng}>
                  <View style={styles.container}>
                    <Image source={e.img} style={styles.icon} />
                    <View>
                      <Text style={styles.title}>{e.nome}</Text>
                      <Text style={styles.subtitle}>{e.km}km</Text>
                    </View>

                    <View style={styles.marker} />
                  </View>
                </Marker>
              </Callout>
            );
          })}
        </MapView>
      </View>
    );
  }
}
