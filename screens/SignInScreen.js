import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { InputWithLabel } from '../components/InputWithLabel';
import { styles } from '../styles';

export const SignInScreen = ({ navigation }) => {
  const goToMain = () => navigation.navigate('Main');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <ScrollView>
      <InputWithLabel
        label="Email"
        placeholder="Type your email here"
        value={email}
        onChangeText={setEmail}
      />
      <InputWithLabel
        label="Password"
        placeholder="Type your password here"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={goToMain}>
        <Text style={styles.button}>Tap to sign in</Text>
      </TouchableOpacity>
    </ScrollView>
  )
};