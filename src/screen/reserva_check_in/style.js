import {StyleSheet} from 'pr-unit';
import {fonts} from '../../assets';

export default StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 100,
    backgroundColor: 'white',
  },

  containerButton: {
    backgroundColor: '#cb6005',
    width: 870,
    height: 120,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -300,
  },

  moedas: {
    fontFamily: fonts.bold,
    fontSize: 40,
    color: 'white',
  },
});
