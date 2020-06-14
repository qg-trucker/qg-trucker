import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    setTimeout(() => {
      props.navigation.replace('Intro');
    }, 1500);
  }

  render() {
    return (
      <Image
        source={require('../../assets/image/bg-splash.png')}
        style={{width: '100%', resizeMode: 'stretch', height: '100%'}}
      />
    );
  }
}
