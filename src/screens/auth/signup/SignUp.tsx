import React from 'react';
import {View, Text} from 'react-native';
import {CommonStyles} from '../../../common/styles/CommonStyles';
import HideKeyboardOnTouch from '../../../common/util/HideKeyboardOnTouch';
import SpacerWrapper from '../../../common/util/SpacerWrapper';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import SignUpProfile from '../components/SignUpForm';
import {CancelButtonWithUnderline} from '../../../components/CancelButton';
import {hp} from '../../../common/util/LayoutUtils';
import {Button} from '../../../components/Button';
import {Google} from '../../../../assets/svg';
import {handleGoogleSignUp} from '../components/SingUpWithGoogleRegistration';

const SignUp = ({navigation}: {navigation: any}) => {
  return (
    <SpacerWrapper>
      <HideKeyboardOnTouch>
        <View style={CommonStyles.signUp}>
          <View style={[CommonStyles.phoneContainer]}>
            <Text style={[CommonStyles.headerText]}>SignUp</Text>
            <Text style={[CommonStyles.bodyText]}>Set up your account</Text>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SignUpProfile navigation={navigation} />
          </TouchableWithoutFeedback>

          <View style={CommonStyles.row}>
            <Text style={[CommonStyles.account]}>
              Already have an account Account?{' '}
            </Text>
            <CancelButtonWithUnderline
              title="Login"
              onPressButton={() => navigation.navigate('signin')}
              styleText={CommonStyles.cancelButton}
            />
          </View>
          <View style={CommonStyles.alternativeContainer}>
            <Text style={CommonStyles.alternativeText}>OR</Text>
          </View>
          <Button
            style={CommonStyles.buttonBackground}
            title="Connect Google Account"
            icon={<Google />}
            styleText={CommonStyles.buttonSignup}
            onPressButton={handleGoogleSignUp}
          />
        </View>
      </HideKeyboardOnTouch>
    </SpacerWrapper>
  );
};

export default SignUp;
