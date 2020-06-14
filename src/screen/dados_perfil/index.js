import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native';

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

        <Text style={styles.text_header}>INFORMAÇÕES PESSOAIS</Text>
      </ImageBackground>

      <TextInput
        style={styles.input}
        value={'Simão de Barros'}
        placeholder={'Nome completo'}
        placeholderTextColor={'black'}
      />

      <TextInput
        style={styles.input}
        value={'Sexo masculino'}
        placeholder={'Gênero'}
        placeholderTextColor={'black'}
      />

      <TextInput
        style={styles.input}
        value={'10/08/1968'}
        placeholder={'Data de nascimento'}
        placeholderTextColor={'black'}
      />

      <TextInput
        style={styles.input}
        value={'(19) 99999-9999'}
        placeholder={'Telefone'}
        placeholderTextColor={'black'}
      />

      <TextInput
        style={styles.input}
        value={'asidsaj'}
        placeholder={'Senha'}
        placeholderTextColor={'black'}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Atualizar cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};
