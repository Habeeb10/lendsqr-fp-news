import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/auth/signup/SignUp';
import SignIn from '../screens/auth/signin/SignIn';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="signin" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
