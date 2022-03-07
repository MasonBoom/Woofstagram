import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainNavigator } from '../navigators/MainNavigator';
import { SignInScreen } from '../screens/SignInScreen';
import { SignUpScreen } from '../screens/SignUpScreen';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='SignUp'>
      <Stack.Screen
        component={SignInScreen}
        name='SignIn'
      />
      <Stack.Screen
        component={SignUpScreen}
        name='SignUp'
      />
      <Stack.Screen
        component={MainNavigator}
        name='Main'
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
};