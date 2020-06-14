import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './style';

import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 0,
    image: require('../../assets/image/intro/1.png'),
  },
  {
    key: 1,
    image: require('../../assets/image/intro/2.png'),
  },
  {
    key: 2,
    image: require('../../assets/image/intro/3.png'),
  },
  {
    key: 3,
    image: require('../../assets/image/intro/4.png'),
  },
  {
    key: 4,
    image: require('../../assets/image/intro/5.png'),
  },
];

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.next}>Próximo</Text>
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.buttonText}>Começar</Text>
      </View>
    );
  };

  _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    this.props.navigation.navigate('Registro');
  };

  render() {
    return (
      <View style={styles.main}>
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
          renderNextButton={this._renderNextButton}
          renderDoneButton={this._renderDoneButton}
        />
      </View>
    );
  }
}
