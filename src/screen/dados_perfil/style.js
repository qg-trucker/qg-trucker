import { StyleSheet } from 'pr-unit';

export default StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
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

  input: {
    backgroundColor: 'white',
    width: 900,
    height: 140,
    borderWidth: 5,
    borderColor: '#73703e',
    justifyContent: 'center',
    paddingHorizontal: 30,
    fontSize: 55,
    fontFamily: 'Roboto-Regular',
    marginTop: 30,
  },

  button: {
    marginTop: 30,
    backgroundColor: '#cb6005',
    width: 900,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 55,
    fontFamily: 'Roboto-Regular',
    color: 'white',
  },

  buttonRegister: {
    width: 900,
    height: 140,
    borderWidth: 5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
