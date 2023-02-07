import React, {FC} from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text,
} from 'react-native';
import {hp} from '../common/util/LayoutUtils';

type ButtonPropsType = {
  title: string;
  color?: string;
  onPressButton?: () => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};

export const CancelButtonWithUnderline: FC<ButtonPropsType> = ({
  title,
  color,
  onPressButton,
  style,
  styleText,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      style={[
        {
          borderBottomColor: color,
          paddingBottom: 2,
          borderBottomWidth: 1,
          alignSelf: 'center',
          marginTop: 3,
        },
        style,
      ]}>
      <Text
        style={[
          {
            fontSize: hp(30),
          },
          styleText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
