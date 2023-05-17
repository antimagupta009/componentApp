import React, {useState, useRef, useEffect} from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  Animated,
  Platform,
} from 'react-native';

import Dimension from '../Theme/Dimension';
import colors from '../Theme/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingInputLabel = props => {
  const inEditing = useState(false);
  const labelAnim = useRef(new Animated.Value(0)).current;
  const onFocus = e => {
    Animated.spring(labelAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (props.value) {
      onFocus();
    }
  }, [props.value]);

  return (
    <View style={[styles.WrapperStyle, props.WrapperStyle]}>
      <Animated.Text
        style={[
          styles.labelStyle,
          props.labelStyle,

          {
            transform: [
              {
                translateY: labelAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -20],
                }),
              },
            ],
          },
          props.LeftIconView()
            ? {left: Dimension.padding30}
            : {left: Dimension.padding10},
        ]}>
        {props.label}
      </Animated.Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={[
            styles.inputStyle,
            props.inputStyle,
            props.LeftIconView()
              ? {paddingLeft: Dimension.padding20}
              : {paddingLeft: 0},
            props.RightIconView()
              ? {paddingRight: Dimension.padding20}
              : {paddingRight: 0},
          ]}
          autoCapitalize="none"
          defaultValue={props.defaultValue}
          value={props.value}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
          editable={props.editable}
          maxLength={props.maxLength}
          onFocus={onFocus}
          onSubmitEditing={props.onSubmitEditing}
          //onBlur={(e)=>onBlur(e.target.value)}
          placeholder={props.Placeholder}
        />
      </View>
      {props.LeftIconView ? (
        <View style={[styles.LeftIconWrap, props.LeftIconWrapStyle]}>
          {props.LeftIconView()}
        </View>
      ) : null}
      {props.RightIconView ? (
        <View style={[styles.RightIconWrap, props.RightIconWrapStyle]}>
          {props.RightIconView()}
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  WrapperStyle: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
    paddingHorizontal: Dimension.padding20,
    paddingVertical: Dimension.padding12,
    height: Dimension.height40,
    marginBottom: Dimension.margin10,
    position: 'relative',
    marginTop: Dimension.margin20,
  },
  labelStyle: {
    fontSize: Dimension.font16,
    color: colors.DateBgColor,
    fontFamily: Dimension.CustomMediumFont,
    // fontWeight:(Platform.OS === 'ios') ? "500" : "",
    marginLeft: Dimension.margin8,
    // marginBottom: Dimension.margin5,
    fontWeight: 'normal',
    position: 'absolute',
    top: Dimension.padding10,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  inputContainerStyle: {
    paddingBottom: 0,
    borderBottomWidth: 0,
    marginBottom: 0,
    paddingVertical: 0,
    paddingTop: 0,
  },

  inputStyle: {
    fontSize: Dimension.font16,
    color: colors.FontColor,
    fontFamily: Dimension.CustomMediumFont,
    // fontWeight:(Platform.OS === 'ios') ? "500" : "",
    paddingLeft: 0,
    marginBottom: 0,
    flex: 1,
    marginTop: Platform.OS == 'ios' ? Dimension.margin20 : Dimension.margin10,

    lineHeight: Dimension.height20,
  },
  iconStyle: {
    width: Dimension.width24,
    height: Dimension.height24,
    paddingRight: 0,
  },
  errorText: {
    fontSize: Dimension.font12,
    color: colors.brandColor,
    fontFamily: Dimension.CustomMediumFont,
    //fontWeight:(Platform.OS === 'ios') ? "500" : "",
  },

  RightIconWrap: {
    position: 'absolute',
    right: Dimension.margin10,
    top: Dimension.margin10,
  },
  LeftIconWrap: {
    position: 'absolute',
    left: Dimension.margin10,
    top: Dimension.margin10,
  },
});
export default FloatingInputLabel;
