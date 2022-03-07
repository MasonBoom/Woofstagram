import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles';

export const SignInScreen = ({ navigation }) => {
  const goToMain = () => navigation.navigate('Main');
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Sign In</Text>
      <Button title='Tap to sign in' onPress={goToMain} />
    </View>
  )
};