import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles';

export const SignUpScreen = ({ navigation }) => {
  const goToSignIn = () => navigation.navigate('SignIn');
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Sign Up</Text>
      <Button title='Tap to sign up' onPress={goToSignIn} />
    </View>
  )
};