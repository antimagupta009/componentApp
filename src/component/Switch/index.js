import React from 'react';
import Colors from '../../Theme/Colors';
import {Switch, View, Text, StyleSheet, Image} from 'react-native';
import Dimension from '../../Theme/Dimension';

const CustomSwitch = props => {
  return (
    <View style={styles.Switchboxwrapper}>
      <Switch
        trackColor={{false: '#f2dad3', true: '#f2dad3'}}
        thumbColor={Colors.brandColor}
        ios_backgroundColor="#ccc"
        onValueChange={props.onChange}
        value={props.value}
      />
      <Text style={styles.SwitchTitle}> {props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  whatsAppImg: {
    width: Dimension.width16,
    height: Dimension.height16,
    marginLeft: Dimension.margin5,
  },
  SwitchTitle: {
    fontSize: Dimension.font10,
    color: Colors.FontColor,
    fontWeight: 'normal',
    marginLeft: Dimension.margin5,
    fontFamily: Dimension.CustomMediumFont,
  },
  Switchboxwrapper: {
    backgroundColor: Colors.transparent,
    marginBottom: Dimension.margin10,
    flexDirection: 'row',
    marginTop: 5,
  },
  withMargincheckboxwrapper: {
    backgroundColor: Colors.transparent,
    marginBottom: Dimension.margin25,
  },
  checkboxContainer: {
    backgroundColor: Colors.transparent,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 0,
    borderColor: Colors.WhiteColor,
    width: 'auto',
  },
});

export default CustomSwitch;
