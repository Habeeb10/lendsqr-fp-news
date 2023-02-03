import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {BackIcon} from '../../assets/svg';
import {hp} from '../common/util/LayoutUtils';

type BackButtonType = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const BackButton: FC<BackButtonType> = ({style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.backContainer, style]} onPress={onPress}>
      <BackIcon size={16} />
      <Text style={styles.back}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  back: {
    marginLeft: hp(5),
    fontSize: hp(16),
    fontWeight: '400',
    // fontFamily: 'Euclid-Circular-A',
  },
  backContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default BackButton;
