/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import DropDown from './component/DropDown';
import RadioBtn from './component/RadioBtn';
import Chekbox from './component/Checkbox';
import CustomeDatePicker from './component/Datepicker/index';
import CustomSwitch from './component/Switch/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FloatingInputLabel from './component/FloatingInput';

export default {
  RadioBtn,
  Chekbox,
  CustomeDatePicker,
  CustomSwitch,
  FloatingInputLabel,
  DropDown,
};
AppRegistry.registerComponent(appName, () => App);
