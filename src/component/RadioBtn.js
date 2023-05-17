import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import Dimension from '../Theme/Dimension';
import colors from '../Theme/Colors';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RadioBtn = props => {
  console.log(props, 'chekbox');
  const {data, onCheck, value} = props;

  return (
    <>
      {(data || []).map((_, index) => (
        <CheckBox
          key={index}
          title={_.label}
          onPress={() => onCheck(_.value)}
          checkedIcon={
            props.checkedIcon() ? (
              props.checkedIcon()
            ) : (
              <Icon
                name={'circle-slice-8'}
                size={Dimension.font20}
                color={colors.FontColor}
              />
            )
          }
          uncheckedIcon={
            props.checkedIcon() ? (
              props.unCheckedIcon()
            ) : (
              <Icon
                name={'circle-outline'}
                size={Dimension.font20}
                color={colors.FontColor}
              />
            )
          }
          checked={_.value == value ? true : false}
          textStyle={[styles.checkboxTitle, props.textStyle]}
          fontFamily={Dimension.CustomMediumFont}
          wrapperStyle={[styles.checkboxwrapper, props.wrapperStyle]}
          containerStyle={[styles.checkboxContainer, props.containerStyle]}
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

export default RadioBtn;
