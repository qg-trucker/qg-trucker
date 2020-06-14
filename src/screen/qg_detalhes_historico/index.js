import React, {Component} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import pr from 'pr-unit';
import styles from './style.js';

export default class Qg_Detalhes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={{height: pr * 400}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 5,
                paddingTop: 20,
              }}>
              <Image
                style={styles.headerImage}
                source={require('../../assets/image/qg/3.jpeg')}
              />
              <Image
                style={styles.headerImage}
                source={require('../../assets/image/qg/4.jpeg')}
              />
              <Image
                style={styles.headerImage}
                source={require('../../assets/image/qg/5.jpeg')}
              />
            </ScrollView>
          </View>

          <View style={styles.containerInfo}>
            <View>
              <Text style={styles.title}>QG 32 | 3 KM</Text>
              <Text style={styles.subtitle}>2 disponiveís</Text>
              <Text style={styles.endereco}>
                Rodovia Luiz de Queiroz, KM 33, Americana / SP
              </Text>
            </View>
            <View>
              <Text style={styles.date}>30/06/20</Text>
              <Text style={styles.date}>22h 30m</Text>
            </View>
          </View>
        </View>

        <View style={{flex: 1, alignItems: 'center', marginTop: 50}}>
          <Image
            source={require('../../assets/image/historico.png')}
            style={{width: 300, height: 300, resizeMode: 'contain'}}
          />
        </View>
      </View>
    );
  }
}
