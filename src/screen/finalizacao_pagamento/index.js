import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import styles from './style.js';
import {Icon_trofeu} from '../../assets/svg/icons';
export default (props) => {
  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.header}
        source={require('../../assets/image/dinheiro.jpg')}>
        <Text style={styles.text_header}>Forma pagamento</Text>
      </ImageBackground>

      <View style={styles.box}>
        <Icon_trofeu width={100} height={100} fill={'orange'} />
      </View>
      <Text style={styles.title}>Moedas adicionadas com sucesso</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate('Perfil')}>
        <Text style={[styles.button, {marginTop: 40}]}>Tudo certo!</Text>
      </TouchableOpacity>
    </View>
  );
};
