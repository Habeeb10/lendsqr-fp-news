import React from 'react';
import {View, Text} from 'react-native';
import {CommonStyles} from '../../../common/styles/CommonStyles';
import HideKeyboardOnTouch from '../../../common/util/HideKeyboardOnTouch';
import SpacerWrapper from '../../../common/util/SpacerWrapper';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import SignUpProfile from '../components/SignUpForm';
import {CancelButtonWithUnderline} from '../../../components/button/CancelButton';
import {Button} from '../../../components/button/Button';
import {Google} from '../../../../assets/svg';
import 'firebase/auth';
import {firebase} from '../../../firebase/config';
import {handleSignUp} from '../components/SingUpWithGoogleRegistration';

async function signUpWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    const user = result.user;
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}

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
            onPressButton={handleSignUp}
          />
        </View>
      </HideKeyboardOnTouch>
    </SpacerWrapper>
  );
};

export default SignUp;
