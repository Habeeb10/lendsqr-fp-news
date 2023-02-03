import React from 'react';
import {View, Text} from 'react-native';
import {CommonStyles} from '../../../common/styles/CommonStyles';
import SpacerWrapper from '../../../common/util/SpacerWrapper';
import BackButton from '../../../components/BackButton';
import {Button} from '../../../components/Button';
import {Input} from '../../../components/input';

const SignIn = ({navigation}: {navigation: any}) => {
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
              label="Username"
              style={[CommonStyles.password]}
              labelStyle={CommonStyles.label}
            />
          </View>

          <View>
            <Button
              icon={undefined}
              title="Continue"
              style={CommonStyles.signupwithgoogle}
              styleText={CommonStyles.textStyle}
            />
          </View>
        </View>
      </SpacerWrapper>
    </>
  );
};

export default SignIn;
