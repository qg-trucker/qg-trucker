import {StyleSheet} from 'pr-unit';
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 100,
    fontFamily: 'Roboto-Regular',
  },

  image: {
    width: '100%',
    resizeMode: 'contain',
  },

  text: {
    color: 'black',
  },

  next: {
    color: 'white',
    fontSize: 55,
    fontFamily: 'Roboto-Regular',
  },
  button: {
    width: 350,
    height: 130,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 55,
    fontFamily: 'Roboto-Regular',
  },
});
