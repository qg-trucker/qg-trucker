import {StyleSheet} from 'pr-unit';
import {fonts} from '../../assets/';

export default StyleSheet.create({
  main: {
    flex: 1,
  },

  header: {
    width: '100%',
    marginTop: 200,
    position: 'absolute',
    zIndex: 99,
    paddingHorizontal: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input: {
    paddingHorizontal: 40,
    backgroundColor: 'white',
    width: 500,
    height: 130,
    borderWidth: 5,
    borderColor: '#73703e',
  },

  button: {
    backgroundColor: '#cb6005',
    width: 300,
    height: 130,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },

  moedas: {
    fontFamily: fonts.bold,
    fontSize: 50,
    color: 'white',
  },

  icon: {
    width: 120,
    height: 120,
  },

  container: {
    width: 400,
    height: 200,
    backgroundColor: '#cb6005',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 35,
    flexDirection: 'row',
    borderRadius: 20,
  },

  title: {
    fontFamily: fonts.bold,
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 20,
  },

  subtitle: {
    color: 'white',
    fontFamily: fonts.regular,
    fontWeight: 'bold',
  },

  marker: {
    width: 80,
    height: 80,
    backgroundColor: '#cb6005',
    position: 'absolute',
    alignSelf: 'center',
    left: 75,
    bottom: -15,
    transform: [{rotateZ: '45deg'}],
  },
});
