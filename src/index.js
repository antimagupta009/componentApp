import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet, Text} from 'react-native';
import Dimension from './Theme/Dimension';
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

// const MainScreen = () => {
//   const [dropdownVal, SetDropdownVal] = useState('');
//   const [CheckBoxVal, SetCheckBoxVal] = useState(1);
//   const [RadioBtnVal, SetRadioBtnVal] = useState(1);

//   const [SwitchStatus, setSwitchStatus] = useState(true);
//   const [startDate, setStartDate] = useState(new Date('15-05-2023'));
//   const [name, SetName] = useState('');

//   const options = [
//     {label: 'option1', value: 1},
//     {label: 'option1', value: 2},
//     {label: 'option1', value: 3},
//   ];

//   const CheckBoxData = [
//     {label: 'Check1', value: 1},
//     {label: 'Check2', value: 2},
//     {label: 'Check3', value: 3},
//   ];

//   const RadioBtnData = [
//     {label: 'Check1', value: 1},
//     {label: 'Check2', value: 2},
//     {label: 'Check3', value: 3},
//   ];
//   const FIELDS = [
//     {
//       component: RadioBtn,
//       data: RadioBtnData,
//       horizontalView: true,
//       onCheck: val => {
//         SetRadioBtnVal(val);
//       },
//       value: RadioBtnVal,
//       textStyle: {},
//       wrapperStyle: {},
//       containerStyle: {},
//       checkedIcon: () => null,
//       unCheckedIcon: () => null,
//     },
//     {
//       component: Chekbox,
//       label: 'ChekBox',
//       data: CheckBoxData,
//       horizontalView: true,
//       onCheck: val => {
//         SetCheckBoxVal(val);
//       },

//       value: CheckBoxVal,
//       textStyle: {},
//       wrapperStyle: {},
//       containerStyle: {},
//       checkedIcon: () => {},
//       unCheckedIcon: () => {},
//     },
//     {
//       component: DropDown,
//       onValueChange: val => SetDropdownVal(val),

//       label: 'labelText',
//       options: options,
//       value: dropdownVal,
//       dropDownBtnStyle: {},
//       dropDownWrapStyle: {},
//       labelStyle: {},
//       dropDownOptionStyle: {},
//       dropDownOptionTextStyle: {},
//       DropDownIcon: () => {},
//     },
//     {
//       component: FloatingInputLabel,
//       label: 'Name',

//       defaultValue: name,
//       value: name,
//       onChangeText: text => setName(text),
//       keyboardType: 'default',
//       editable: true,
//       maxLength: null,
//       onSubmitEditing: () => {},
//       Placeholder: 'Name',

//       RightIconView: () => null,
//       LeftIconView: () => null,

//       WrapperStyle: {},
//       labelStyle: {},
//       inputStyle: {},
//       LeftIconWrapStyle: {},
//       RightIconWrapStyle: {},
//     },
//     {
//       title: 'From Date',
//       label: 'From Date',
//       placeholder: '',
//       value:
//         typeof startDate == 'string'
//           ? startDate
//           : startDate.getDate() +
//             '-' +
//             (startDate.getMonth() + 1) +
//             '-' +
//             startDate.getFullYear(),
//       onChange: date => setStartDate(date),
//       component: CustomeDatePicker,
//     },
//     {
//       component: CustomSwitch,
//       title: 'Open settings',
//       onChange: val => setSwitchStatus(!SwitchStatus),
//       value: SwitchStatus,
//     },
//   ];
//   return (
//     // <Provider store={store}>
//     //   <Routes />
//     // </Provider>
//     <View style={styles.container}>
//       <Text style={styles.textStyle}>Sample App</Text>
//       <View>
//         {FIELDS.map((field, fieldKey) => (
//           <field.component {...field} key={fieldKey} />
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: Dimension.padding12,
//   },
//   textStyle: {
//     fontSize: Dimension.font14,
//     marginVertical: Dimension.margin20,
//   },
// });

// export default MainScreen;
