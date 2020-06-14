import {StyleSheet} from 'pr-unit';
import {fonts} from '../../assets';

export default StyleSheet.create({
  main: {
    flex: 1,
  },

  header: {
    backgroundColor: 'green',
    height: 900,
    justifyContent: 'center',
    paddingTop: 100,
  },

  headerImage: {
    width: 700,
    height: 400,
    borderRadius: 40,
    marginLeft: 50,
  },

  containerInfo: {
    paddingTop: 50,
    paddingHorizontal: 100,
    flexDirection: 'row',
  },

  title: {
    color: 'white',
    fontSize: 50,
    fontFamily: fonts.bold,
  },

  subtitle: {
    color: 'white',
    fontSize: 40,
    fontFamily: fonts.bold,
  },

  endereco: {
    color: 'white',
    fontSize: 40,
    fontFamily: fonts.regular,
    width: 500,
  },

  date: {
    marginTop: 10,
    fontSize: 50,
    fontFamily: fonts.bold,
    color: 'white',
    backgroundColor: 'orange',
    padding: 10,
  },

  box: {
    width: 270,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontFamily: fonts.bold,
  },
});
