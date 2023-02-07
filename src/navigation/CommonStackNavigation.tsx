import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/auth/signup/SignUp';
import SignIn from '../screens/auth/signin/SignIn';
import NewsListing from '../screens/newsList/NewsList';
import NewsDetails from '../screens/newsDetails/NewsDetails';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="newsListing" component={NewsListing} />
        <Stack.Screen name="newsDetails" component={NewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
