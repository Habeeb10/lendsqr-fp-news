import React from 'react';
import {View, Text} from 'react-native';
import {CommonStyles} from '../../../common/styles/CommonStyles';
import HideKeyboardOnTouch from '../../../common/util/HideKeyboardOnTouch';
import SpacerWrapper from '../../../common/util/SpacerWrapper';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import SignUpProfile from '../components/SignUpForm';

const SignUp = ({navigation}: {navigation: any}) => {
  return (
    <SpacerWrapper>
      {/* <View style={{marginLeft: 20}}>
          <BackButton onPress={() => navigation.goBack()} />
        </View> */}
      <HideKeyboardOnTouch>
        <View style={CommonStyles.signUp}>
          <View style={[CommonStyles.phoneContainer]}>
            <Text style={[CommonStyles.headerText]}>SignUp</Text>
            <Text style={[CommonStyles.bodyText]}>Set up your account</Text>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SignUpProfile navigation={navigation} />
          </TouchableWithoutFeedback>
        </View>
      </HideKeyboardOnTouch>
    </SpacerWrapper>
  );
};

export default SignUp;
