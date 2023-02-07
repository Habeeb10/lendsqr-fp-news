import React, {FC} from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text,
  StyleSheet,
} from 'react-native';
import {hp} from '../../common/util/LayoutUtils';

type ButtonPropsType = {
  title: string;
  color?: string;
  onPressButton?: () => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};

export const CancelButtonWithUnderline: FC<ButtonPropsType> = ({
  title,
  onPressButton,
  style,
  styleText,
}) => {
  return (
    <TouchableOpacity onPress={onPressButton} style={[styles.underline, style]}>
      <Text style={[styles.title, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: hp(30),
  },
  underline: {
    paddingBottom: 2,
    borderBottomWidth: 1,
    alignSelf: 'center',
    marginTop: 3,
  },
});
