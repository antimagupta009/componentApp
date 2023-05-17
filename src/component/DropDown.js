import React, {useState} from 'react';

import Dimension from '../Theme/Dimension';
import colors from '../Theme/Colors';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
//import CustomeIcon from './CustomeIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
const DropDown = props => {
  const {onValueChange, label, value, options} = props;

  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  return (
    <Menu
      visible={visible}
      anchor={
        <TouchableOpacity
          onPress={showMenu}
          style={[styles.dropDownBtn, props.dropDownBtnStyle]}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.labelStyle, props.labelStyle]}>
              {value || label}
            </Text>
          </View>
          {props.DropDownIcon() ? (
            props.DropDownIcon()
          ) : (
            <Icon
              name={'chevron-down'}
              size={Dimension.font18}
              color={colors.FontColor}></Icon>
          )}
        </TouchableOpacity>
      }
      onRequestClose={hideMenu}
      style={[styles.dropDownWrap, props.dropDownWrapStyle]}>
      {options.map((item, itemIndex) => (
        <MenuItem
          onPress={() => {
            onValueChange(item.value);
            hideMenu();
          }}
          textStyle={[styles.dropdownval, styles.dropDownOptionTextStyle]}
          style={[styles.dropDowninnerWrap, props.dropDownOptionStyle]}>
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};
const styles = StyleSheet.create({
  dropDownBtn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 6,
    paddingHorizontal: Dimension.padding15,
    paddingVertical: Dimension.padding12,
    height: Dimension.height40,
    marginBottom: Dimension.margin10,
    justifyContent: 'space-between',
    width: '100%',
  },
  dropDownWrap: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 4,
    backgroundColor: '#fff',
    width: '92%',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    marginTop: Dimension.margin40,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginVertical: 0,
  },
  dropdownval: {
    fontSize: Dimension.font14,
    color: colors.FontColor,
    fontFamily: Dimension.CustomRegularFont,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 10,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 0.5,

    paddingVertical: Dimension.padding5,
    marginHorizontal: 5,
  },
  labelStyle: {
    fontSize: Dimension.font16,
    color: colors.DateBgColor,
    fontFamily: Dimension.CustomMediumFont,
    marginLeft: Dimension.margin8,
    fontWeight: 'normal',
    position: 'absolute',
    //top: Dimension.padding2,
    //paddingLeft: Dimension.padding20,
    // width: '100%',
    //backgroundColor: '#ccc',
  },

  dropDowninnerWrap: {
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginVertical: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  DropDownIcon: {
    marginTop: Dimension.margin20,
  },
});

export default DropDown;
