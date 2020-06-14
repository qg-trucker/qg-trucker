import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import styles from './styles';
import {Icon_porco} from '../../assets/svg/icons';
import Qg from './components/qg';

export default class QGs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
            <TouchableOpacity style={styles.button}>
              <Icon_porco width={30} height={30} fill={'white'} />
              <Text style={styles.moedas}>500</Text>
            </TouchableOpacity>
          </View>

          <TextInputMask
            type={'datetime'}
            options={{
              format: 'DD/MM/YY HH:mm',
            }}
            value={this.state.data_hora}
            style={[styles.input, {width: 360, marginTop: 20}]}
            placeholder={'Data e hora da chegada'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
              this.setState({data_hora: text});

              if (text.length == 14) {
                this.setState({
                  data: [
                    {
                      img: require('../../assets/image/qg/1.jpeg'),
                      nome: 'QG 32',
                      km: 3,
                      endereco: 'Rodovia Luiz de Queiroz, KM 33, Americana',
                      disponiveis: 2,
                    },
                    {
                      img: require('../../assets/image/qg/2.jpeg'),
                      nome: 'QG 23',
                      km: 3,
                      endereco: 'Rodovia Luiz de Queiroz, KM 33, Americana',
                      disponiveis: 3,
                    },
                    {
                      img: require('../../assets/image/qg/3.jpeg'),
                      nome: 'QG 16',
                      km: 3,
                      endereco: 'Rodovia Luiz de Queiroz, KM 33, Americana',
                      disponiveis: 4,
                    },
                  ],
                });
              }
            }}
          />
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
