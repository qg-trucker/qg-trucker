import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'pr-unit';
import {fonts} from '../../../assets';

const qg = (props) => (
  <View style={styles.container}>
    <Image source={props.data.img} style={styles.image} />
    <View>
      <Text style={styles.title}>
        {props.data.nome} | {props.data.km} KM
      </Text>
      <Text style={styles.subtitle}>{props.data.disponiveis} disponíveis</Text>
      <Text style={styles.endereco}>{props.data.endereco}</Text>
    </View>
    <TouchableOpacity style={styles.button} onPress={props.goTo}>
      <Text style={styles.buttonText}>Ver mais</Text>
    </TouchableOpacity>
  </View>
);

export default qg;

const styles = StyleSheet.create({
  container: {
    width: 900,
    height: 300,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 50,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 40,
    color: 'green',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  endereco: {
    width: 500,
    fontFamily: fonts.regular,
  },
  button: {
    backgroundColor: '#cb6005',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: fonts.regular,
  },
});
