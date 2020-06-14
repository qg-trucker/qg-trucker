import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';

import styles from './style.js';

export default (props) => {
  return (
    <ImageBackground
      style={styles.main}
      source={require('../../assets/image/bg-registro.png')}>
      <Image
        source={require('../../assets/image/logo-horizontal.png')}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder={'Nome completo'}
        placeholderTextColor={'black'}
      />

      <TextInput
        style={styles.input}
        placeholder={'Gênero'}
        placeholderTextColor={'black'}
      />

      <TextInput
        style={styles.input}
        placeholder={'Data nascimento'}
        placeholderTextColor={'black'}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder={'Celular'}
        placeholderTextColor={'black'}
      />

      <TextInput
        style={styles.input}
        placeholder={'Senha'}
        placeholderTextColor={'black'}
      />

      <TextInput
        style={styles.input}
        placeholder={'Repetir senha'}
        placeholderTextColor={'black'}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Finalizar cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#48672f' }]}
        onPress={() => this.props.navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Já tenho conta</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}