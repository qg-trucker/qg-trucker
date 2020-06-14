import {StyleSheet} from 'pr-unit';
import {fonts} from '../../assets/';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    paddingTop: 100,
    backgroundColor: 'green',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    backgroundColor: 'white',
    width: 700,
    height: 120,
    paddingHorizontal: 20,
    borderWidth: 0,
  },

  button: {
    backgroundColor: '#cb6005',
    width: 380,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  moedas: {
    fontFamily: fonts.bold,
    fontSize: 40,
    color: 'white',
  },

  textAlert: {
    margin: 150,
    fontFamily: fonts.bold,
    fontSize: 50,
  },

  containerModal: {
    backgroundColor: 'white',
    width: '100%',
    height: 1500,
    bottom: 0,
    position: 'absolute',
    padding: 150,
  },

  titleModal: {
    fontFamily: fonts.bold,
    fontSize: 60,
  },

  titleCheck: {
    fontFamily: fonts.bold,
    fontSize: 40,
    color: 'darkorange',
  },
});
