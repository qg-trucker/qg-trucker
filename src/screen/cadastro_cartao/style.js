import {StyleSheet} from 'pr-unit';

export default StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    resizeMode: 'cover',
  },

  btn_voltar: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 70,
    marginBottom: 20,
    fontFamily: 'Roboto-Regular',
  },

  text_header: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
    marginLeft: 70,
    fontFamily: 'Roboto-Regular',
  },

  box: {
    width: '100%',
    padding: 50,
    alignItems: 'center',
  },

  text_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text_moedas: {
    color: '#757138',
  },

  text_moedas_destaque: {
    color: '#e76000',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#cb6005',
    padding: 40,
    fontFamily: 'Roboto-Regular',
    color: 'white',
  },
});
