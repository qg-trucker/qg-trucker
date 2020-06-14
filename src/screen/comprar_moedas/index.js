import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';

import {Icon_coin, Icon_card, Icon_wallet} from './../../assets/svg/icons';

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

        <Text style={styles.text_header}>COMPRAR MOEDAS</Text>
      </ImageBackground>

      <View style={styles.box}>
        <View>
          <View style={styles.text_wrapper}>
            <Icon_coin width={30} height={30} fill={'#23481b'} />
            <Text style={styles.text_moedas_destaque}> 1200 moedas</Text>
          </View>
          <View style={styles.text_wrapper}>
            <Icon_card width={20} height={20} fill={'#23481b'} />
            <Text style={styles.text_moedas}> 3x de R$ 50,00</Text>
          </View>
          <View style={styles.text_wrapper}>
            <Icon_wallet width={20} height={20} fill={'#23481b'} />
            <Text style={styles.text_moedas}> ou R$ 139,00</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Forma_pagamento')}>
          <Text style={styles.button}>SELECIONAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <View>
          <View style={styles.text_wrapper}>
            <Icon_coin width={30} height={30} fill={'#23481b'} />
            <Text style={styles.text_moedas_destaque}> 2500 moedas</Text>
          </View>
          <View style={styles.text_wrapper}>
            <Icon_card width={20} height={20} fill={'#23481b'} />
            <Text style={styles.text_moedas}> 3x de R$ 100,00</Text>
          </View>
          <View style={styles.text_wrapper}>
            <Icon_wallet width={20} height={20} fill={'#23481b'} />
            <Text style={styles.text_moedas}> ou R$ 250,00</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.button}>SELECIONAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <View>
          <View style={styles.text_wrapper}>
            <Icon_coin width={30} height={30} fill={'#23481b'} />
            <Text style={styles.text_moedas_destaque}> 5000 moedas</Text>
          </View>
          <View style={styles.text_wrapper}>
            <Icon_card width={20} height={20} fill={'#23481b'} />
            <Text style={styles.text_moedas}> 3x de R$ 200,00</Text>
          </View>
          <View style={styles.text_wrapper}>
            <Icon_wallet width={20} height={20} fill={'#23481b'} />
            <Text style={styles.text_moedas}> ou R$ 499,00</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.button}>SELECIONAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
