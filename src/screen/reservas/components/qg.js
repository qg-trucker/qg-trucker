import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'pr-unit';
import {fonts} from '../../../assets';

const qg = (props) => (
  <View style={{borderBottomWidth: 1, paddingBottom: 20}}>
    <View style={styles.container}>
      <Image source={props.data.img} style={styles.image} />
      <View>
        <Text style={styles.title}>
          {props.data.nome} | {props.data.km} KM
        </Text>
        <Text style={styles.subtitle}>
          {props.data.disponiveis} disponíveis
        </Text>
        <Text style={styles.endereco}>{props.data.endereco}</Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'green'}]}
        onPress={props.showModal}>
        <Text style={styles.buttonText}>Visualizar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Navegar</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default qg;

const styles = StyleSheet.create({
  container: {
    width: 900,
    height: 300,
    backgroundColor: 'white',
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
    marginRight: 80,
  },
  endereco: {
    width: 700,
    fontFamily: fonts.regular,
  },
  button: {
    backgroundColor: '#cb6005',
    width: 400,
    height: 100,
    marginRight: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: fonts.regular,
  },
});
