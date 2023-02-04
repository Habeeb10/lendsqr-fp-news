import React from 'react';
import {View, Text} from 'react-native';
import {CommonStyles} from '../../../common/styles/CommonStyles';
import HideKeyboardOnTouch from '../../../common/util/HideKeyboardOnTouch';
import SpacerWrapper from '../../../common/util/SpacerWrapper';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import SignUpProfile from '../components/SignUpForm';
import {CancelButtonWithUnderline} from '../../../components/CancelButton';
import {hp} from '../../../common/util/LayoutUtils';

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
          <View style={{alignSelf: 'center', marginBottom: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>OR</Text>
          </View>
          <View style={CommonStyles.row}>
            <Text style={[CommonStyles.account]}>
              SignUp with your Google Account?{' '}
            </Text>
            <CancelButtonWithUnderline
              title="SignUp"
              // onPressButton={() => navigation.getParent()?.navigate("SignIn")}
              styleText={{
                fontSize: hp(14),
                fontWeight: '500',
              }}
            />
          </View>
        </View>
      </HideKeyboardOnTouch>
    </SpacerWrapper>
  );
};

export default SignUp;
