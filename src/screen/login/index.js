import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';

import styles from './style.js';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celular: '',
    };
  }

  handleChange(event) {
    console.log(event);
    let reg = /^(0|08|08[0-9]{1,9})$/;
    if (reg.test(event)) {
      this.setState({celular: event});
    }
  }

  render() {
    return (
      <ImageBackground
        style={styles.main}
        source={require('../../assets/image/bg-login.png')}>
        <Image
          source={require('../../assets/image/logo.png')}
          style={styles.logo}
        />

        <TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          value={this.state.celular}
          style={styles.input}
          placeholder={'Celular'}
          placeholderTextColor={'black'}
          onChangeText={(text) => {
            this.setState({
              celular: text,
            });
          }}
        />

        <TextInput
          style={styles.input}
          placeholder={'Senha'}
          placeholderTextColor={'black'}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Principal')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <View style={{position: 'absolute', bottom: 40, alignItems: 'center'}}>
          <Text style={[styles.buttonText, {marginTop: 40, marginBottom: 20}]}>
            Esqueci a senha
          </Text>

          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => this.props.navigation.navigate('Registro')}>
            <Text style={styles.buttonText}>Registrar conta</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
