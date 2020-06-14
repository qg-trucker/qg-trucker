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
                source={{
                  uri:
                    'https://dicasdearquitetura.com.br/wp-content/uploads/2017/06/medidas-de-container-capa-homedit-672x372.jpg',
                }}
              />
              <Image
                style={styles.headerImage}
                source={{
                  uri:
                    'https://dicasdearquitetura.com.br/wp-content/uploads/2017/06/medidas-de-container-capa-homedit-672x372.jpg',
                }}
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

        <View style={{margin: pr * 100}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={[styles.box, {backgroundColor: '#808000'}]}>
              <Text style={styles.buttonText}>QG 32 A</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.box, {backgroundColor: 'green'}]}>
              <Text style={styles.buttonText}>Disponível</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.box, {backgroundColor: '#F4A460'}]}
              onPress={() => this.props.navigation.navigate('Qg_reserva')}>
              <Text style={styles.buttonText}>Reservar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginHorizontal: pr * 100, marginBottom: pr * 100}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={[styles.box, {backgroundColor: '#808000'}]}>
              <Text style={styles.buttonText}>QG 32 B</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.box, {backgroundColor: 'black'}]}>
              <Text style={styles.buttonText}>Indisponível</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.box, {backgroundColor: 'lightgray'}]}>
              <Text style={styles.buttonText}>Reservar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginHorizontal: pr * 100, marginBottom: pr * 100}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={[styles.box, {backgroundColor: '#808000'}]}>
              <Text style={styles.buttonText}>QG 32 C</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.box, {backgroundColor: 'green'}]}>
              <Text style={styles.buttonText}>Disponível</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.box, {backgroundColor: 'orange'}]}>
              <Text style={styles.buttonText}>Reservar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginHorizontal: pr * 100, marginBottom: pr * 100}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={[styles.box, {backgroundColor: '#808000'}]}>
              <Text style={styles.buttonText}>QG 32 D</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.box, {backgroundColor: 'black'}]}>
              <Text style={styles.buttonText}>Indisponível</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.box, {backgroundColor: 'lightgray'}]}>
              <Text style={styles.buttonText}>Reservar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
