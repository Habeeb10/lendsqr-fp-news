import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  View,
  TextStyle,
} from 'react-native';
import {hp, wp} from '../common/util/LayoutUtils';
import * as Colors from '../constants/Colors';

export type InputProps = {
  label: string;
  isPhone?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle: StyleProp<TextStyle>;
};

export const Input = ({
  label,
  isPhone,
  style,
  labelStyle,
  ...rest
}: InputProps & TextInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      {isPhone ? (
        <View style={[styles.textInput, isPhone && styles.isPhone]}>
          <Text style={styles.countryCode}>+91</Text>
          <View style={styles.divider} />
          <TextInput
            placeholder="Your 10-digit phone number"
            style={styles.phoneInput}
            keyboardType="number-pad"
          />
        </View>
      ) : (
        <TextInput {...rest} style={[styles.textInput, style]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp(20),
  },
  phoneInput: {
    fontSize: 15,
    paddingRight: wp(10),
  },
  countryCode: {
    color: 'black',
    fontSize: 15,
    marginRight: wp(7),
  },
  label: {
    fontSize: 15,
    color: Colors.deepgrey,
  },
  textInput: {
    backgroundColor: Colors.purple,
    borderRadius: 9,
    height: hp(55),
    marginTop: hp(7),
    fontSize: 15,
    paddingLeft: wp(10),
    paddingRight: wp(10),
  },
  divider: {
    width: 1,
    backgroundColor: Colors.black,
    height: hp(18),
    marginRight: wp(7),
  },
  isPhone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
