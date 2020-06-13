// Aqui será salvo valores de medidas que serão usados muitas vezes no desenvolvimento do aplicativo
// Além disso, pode salvar valores auxiliares como o behavior da KeyboardAvoidingView

// Exemplo:
import {Dimensions} from 'react-native';
import pr from 'pr-unit';

const {width, height} = Dimensions.get('window');

const metrics = {
  base: 48 * pr,
  doubleBase: 96 * pr,
  tripleBase: 120 * pr,
  quadrapBase: 144 * pr,

  verySmall: 12 * pr,
  small: 24 * pr,
  medium: 36 * pr,
  large: 50 * pr,
  big: 72 * pr,

  buttonHeight: 150 * pr,
  buttonRadius: 75 * pr,

  width: width < height ? width : height,
  height: width < height ? height : width,
  behavior: Platform.OS == 'ios' ? 'padding' : undefined,
  barHeight:
    Platform.OS == 'ios' ? (height >= 812 && height <= 896 ? 40 : 20) : 0,
};

export default metrics;
