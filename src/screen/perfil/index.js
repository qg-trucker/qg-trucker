import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Icon_porco} from '../../assets/svg/icons';

import styles from './style.js';

export default (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text_header}>Simão de Barros</Text>
          <Text style={styles.text_header}>(19) 99999-9999</Text>
        </View>
        <Image
          source={require('../../assets/image/img_profile.png')}
          style={styles.img_perfil}
        />
      </View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>
          <Text style={{fontWeight: 'bold'}}>Saldo: </Text>
          <Icon_porco width={20} height={20} fill={'white'} /> 70 moedas
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Comprar_moedas')}>
        <Text style={styles.buttonText}>Comprar moedas</Text>
      </TouchableOpacity>

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
