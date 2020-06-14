import {StyleSheet} from 'pr-unit';
import {fonts} from '../../assets';

export default StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 100,
    paddingTop: 200,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 100,
    color: 'orange',
  },
  subtitle: {
    marginTop: 50,
    width: 700,
    fontFamily: fonts.regular,
    fontSize: 50,
  },
  titleClock: {
    fontFamily: fonts.regular,
    fontSize: 50,
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 900,
    height: 150,
    flexDirection: 'row',
    paddingHorizontal: 100,
    borderRadius: 20,
    marginTop: 100,
    backgroundColor: 'green',
  },
  selecionar: {
    padding: 40,
    backgroundColor: 'darkorange',
    color: 'white',
    fontFamily: fonts.bold,
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
});
