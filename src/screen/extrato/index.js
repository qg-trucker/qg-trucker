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
        <Text style={styles.text_header}>Forma pagamento</Text>
      </ImageBackground>

      <View style={styles.box}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => props.navigation.navigate('Qg_detalhes_historico')}>
          <Image
            source={require('../../assets/image/extrato.png')}
            style={{width: 500, height: 500, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
