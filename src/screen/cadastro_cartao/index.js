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
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => props.navigation.navigate('Finalizacao_pagamento')}>
          <Image
            source={require('../../assets/image/cadastro_cartao.png')}
            style={{width: 400, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
