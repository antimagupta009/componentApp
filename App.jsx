import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView,View, StyleSheet, Text} from 'react-native';
import Dimension from './src/Theme/Dimension';
import DropDown from './src/component/DropDown';
import RadioBtn from './src/component/RadioBtn';
import Chekbox from './src/component/Checkbox';
import CustomeDatePicker from './src/component/Datepicker/index'
import CustomSwitch from './src/component/Switch/index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FloatingInputLabel from './src/component/FloatingInput';
import MainScreen from './src';

const App = () => {

  return (
    // <Provider store={store}>
    //   <Routes />
    // </Provider>
    // <View style={styles.container}>
     
    //  <MainScreen></MainScreen>
      
    // </View>
    <View></View>
    
  );
};

const styles = StyleSheet.create({
  container : {
    paddingHorizontal: Dimension.padding12,
  },
  textStyle:{
    fontSize: Dimension.font14,
    marginVertical: Dimension.margin20
  }
});

export default App;
