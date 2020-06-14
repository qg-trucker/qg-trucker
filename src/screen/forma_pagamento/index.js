import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import styles from './style.js';

export default (props) => {
  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.header}
        source={require('../../assets/image/dinheiro.jpg')}>
        <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Text style={styles.btn_voltar}>{'<'} Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.text_header}>Forma pagamento</Text>
      </ImageBackground>

      <View style={styles.box}>
        <Image
          source={require('../../assets/image/forma_pagamento.png')}
          style={{width: 350, height: 350, resizeMode: 'contain'}}
        />
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Cadastro_cartao')}>
        <Text style={styles.button}>Finalizar pagamento</Text>
      </TouchableOpacity>
    </View>
  );
};
