import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import {Icon_porco} from '../../assets/svg/icons';
import Qg from './components/qg';

export default class QGs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          img: 'https://i.ytimg.com/vi/t3EbiYDFvog/maxresdefault.jpg',
          nome: 'QG 32',
          km: 3,
          endereco: 'Rodovia Luiz de Queiroz, KM 33, Americana',
          disponiveis: 2,
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.input}
              placeholder={'Qual o nome da cidade'}
              placeholderTextColor={'black'}
            />
          </View>
        </View>

        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          data={this.state.data}
          renderItem={({item: e}) => (
            <Qg
              data={e}
              goTo={() => this.props.navigation.navigate('Detalhes_qg')}
            />
          )}
          keyExtractor={(e) => e.img}
          ListEmptyComponent={() => (
            <Text style={styles.textAlert}>
              Insira uma cidade, uma data e hora para mostrarmos os resultados
            </Text>
          )}
        />
      </View>
    );
  }
}
