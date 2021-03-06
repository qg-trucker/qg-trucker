import { StyleSheet } from 'pr-unit';

export default StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 400,
    paddingHorizontal: 50,
    backgroundColor: '#326726',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  text_header: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
  },

  img_perfil: {
    width: 200,
    height: 200,
    borderRadius: 100,
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

  qtd_moedas: {
    marginTop: 30,
    backgroundColor: '#326726',
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
