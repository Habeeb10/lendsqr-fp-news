import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {CommonStyles} from '../../../common/styles/CommonStyles';
import SpacerWrapper from '../../../common/util/SpacerWrapper';
import BackButton from '../../../components/button/BackButton';
import {Button} from '../../../components/button/Button';
import {CancelButtonWithUnderline} from '../../../components/button/CancelButton';
import {Input} from '../../../components/input/input';

const SignIn = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const handleLogin = () => {
    if (!email) {
      return Alert.alert('Warning', 'Enter your email address');
    } else {
      navigation.navigate('newsListing');
    }
  };
  return (
    <>
      <SpacerWrapper>
        <View style={CommonStyles.container}>
          <View style={CommonStyles.backIcon}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text style={CommonStyles.header}>SignIn</Text>
          <Text style={CommonStyles.enterMail}>
            Enter your Username to continue
          </Text>
          <View style={CommonStyles.emailContainer}>
            <Input
              label="Email Address"
              style={[CommonStyles.password]}
              labelStyle={CommonStyles.label}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View>
            <Button
              onPressButton={handleLogin}
              icon={undefined}
              title="Sign In"
              style={CommonStyles.signupwithgoogle}
              styleText={CommonStyles.textStyle}
              disabled={!email}
            />
          </View>
          <View style={CommonStyles.alternativeContainer}>
            <Text style={CommonStyles.alternativeText}>OR</Text>
          </View>
          <View style={CommonStyles.row}>
            <Text style={[CommonStyles.account]}>
              SignIn with your Google Account?{' '}
            </Text>
            <CancelButtonWithUnderline
              title="Login"
              styleText={CommonStyles.buttonSignIn}
            />
          </View>
        </View>
      </SpacerWrapper>
    </>
  );
};

export default SignIn;
