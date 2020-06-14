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
                      img:
                        'https://i.ytimg.com/vi/t3EbiYDFvog/maxresdefault.jpg',
                      nome: 'QG 32',
                      km: 3,
                      endereco: 'Rodovia Luiz de Queiroz, KM 33, Americana',
                      disponiveis: 2,
                    },
                    {
                      img:
                        'https://lh3.googleusercontent.com/proxy/sZQXComvHKsaQVzZRhE178K5AYILUyXo53shTMaIj_DKCkPpIVOTlZnMwBkjO2joKfYnbesmcbH6oLmLV14FKlN7I-PlaXCIUdOFJ811pBHLHeWepJiAYGCPRDBstTCJzfoCCK10_1aDlQ',

                      nome: 'QG 23',
                      km: 3,
                      endereco: 'Rodovia Luiz de Queiroz, KM 33, Americana',
                      disponiveis: 3,
                    },
                    {
                      img:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaSXuRnM8grYAqRqD9ydGnwSBLEirTE52GLrlZxbuf4ZtMS7-i&usqp=CAU',
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
