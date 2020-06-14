import React, {Component} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import Qg from './components/qg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fonts} from '../../assets';

export default class QGs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          img: 'https://i.ytimg.com/vi/t3EbiYDFvog/maxresdefault.jpg',
          nome: 'QG 32 A',
          km: 3,
          endereco: 'Rodovia Luiz de Queiroz, KM 33, Americana',
          disponiveis: 2,
        },
      ],
      showVisualizar: false,
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
              showModal={() => this.setState({showVisualizar: true})}
            />
          )}
          keyExtractor={(e) => e.img}
          ListEmptyComponent={() => (
            <Text style={styles.textAlert}>
              Insira uma cidade, uma data e hora para mostrarmos os resultados
            </Text>
          )}
        />

        <Modal isVisible={this.state.showVisualizar} style={{margin: 0}}>
          <View style={styles.containerModal}>
            <Text style={styles.titleModal}>QG 32 A | 3 km</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View>
                <Text style={styles.titleCheck}>Previsão de entrada</Text>
                <Text>30/06/2020 18h00</Text>
              </View>

              <View>
                <Text style={styles.titleCheck}>Previsão de saída</Text>
                <Text>01/07/2020 06h00</Text>
              </View>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({showVisualizar: false});
                  this.props.navigation.navigate('Check_in');
                }}>
                <Text style={styles.moedas}>Check-in</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({showVisualizar: false});
                  this.props.navigation.navigate('Check_out');
                }}>
                <Text style={styles.moedas}>Check-out</Text>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                marginTop: 50,
                color: 'red',
                fontFamily: fonts.bold,
                fontSize: 22,
                textDecorationLine: 'underline',
              }}>
              Cancelar reserva
            </Text>
          </View>
        </Modal>
      </View>
    );
  }
}
