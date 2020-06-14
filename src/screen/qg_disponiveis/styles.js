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
    width: 200,
    height: 120,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginLeft: 40,
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
});
