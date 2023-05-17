import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import Dimension from '../Theme/Dimension';
import colors from '../Theme/Colors';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Chekbox = props => {
  console.log(props, 'chekbox');
  const {data, onCheck, value} = props;

  return (
    <>
      {(data || []).map((_, index) => (
        <CheckBox
          title={props.label}
          checked={_.value == value ? true : false}
          onPress={() => onCheck(_.value)}
          textStyle={[styles.checkboxTitle, props.textStyle]}
          fontFamily={Dimension.CustomMediumFont}
          wrapperStyle={[styles.checkboxwrapper, props.wrapperStyle]}
          containerStyle={[styles.checkboxContainer, props.containerStyle]}
          checkedIcon={props.checkedIcon()}
          unCheckedIcon={props.unCheckedIcon()}
        />
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  checkboxTitle: {
    fontSize: Dimension.font12,
    color: colors.FontColor,
    fontWeight: 'normal',
    marginLeft: Dimension.margin5,
  },
  checkboxwrapper: {
    backgroundColor: colors.transparent,
  },
  withMargincheckboxwrapper: {
    backgroundColor: colors.transparent,
    marginBottom: Dimension.margin25,
  },
  checkboxContainer: {
    backgroundColor: colors.transparent,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 0,
    borderColor: colors.WhiteColor,
    width: 'auto',
  },
});

export default Chekbox;
