import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export type SvgIconProps = {
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};
export const Google = () => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.6327 4.91089C11.7034 4.02461 10.4633 3.54179 9.18017 3.56163C6.83221 3.56163 4.83809 5.14567 4.12708 7.27867C3.75008 8.39644 3.75008 9.60685 4.12708 10.7246H4.13038C4.84469 12.8543 6.83551 14.4384 9.18348 14.4384C10.3955 14.4384 11.436 14.1284 12.2425 13.5808V13.5786C13.1916 12.9502 13.8397 11.9614 14.0415 10.8437H9.18018V7.37794H17.6693C17.7751 7.97982 17.8247 8.59492 17.8247 9.20671C17.8247 11.9441 16.8464 14.2584 15.1442 15.8259L15.146 15.8273C13.6545 17.203 11.6075 18 9.18017 18C5.77726 18 2.66538 16.0819 1.13754 13.0428C-0.13895 10.4997 -0.138947 7.50359 1.13755 4.96052C2.66539 1.91808 5.77726 -3.85207e-06 9.18017 -3.85207e-06C11.4157 -0.0264599 13.5752 0.813518 15.2022 2.34135L12.6327 4.91089Z"
        fill="white"
      />
    </Svg>
  );
};

export const BackIcon = ({}: SvgIconProps) => {
  return (
    <Svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <Path
        d="M6.83333 12.6667L1 6.83333L6.83333 1"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
