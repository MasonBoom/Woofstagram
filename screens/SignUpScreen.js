import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { InputWithLabel } from '../components/InputWithLabel';
import { styles } from '../styles';

export const SignUpScreen = ({ navigation }) => {
  const goToSignIn = () => navigation.navigate('SignIn');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [toy, setToy] = useState('');

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
      <InputWithLabel
        label="Confirm password"
        placeholder="Re-type your password here"
        onSubmitEditing={(e) => {
          confirmPasswordsMatch(e.nativeEvent.text, password);
        }}
        secureTextEntry
      />
      <InputWithLabel
        label="Name"
        placeholder="Type your dog's name here"
        value={name}
        onChangeText={setName}
      />
      <InputWithLabel
        label="Birthday"
        placeholder="Type your dog's date of birth here"
        value={birthday}
        onChangeText={setBirthday}
      />
      <InputWithLabel
        label="Breed"
        placeholder="Type your dog's breed here"
        value={breed}
        onChangeText={setBreed}
      />
      <InputWithLabel
        label="Favorite toy"
        placeholder="Type your dog's favorite toy here"
        value={toy}
        onChangeText={setToy}
      />
      <TouchableOpacity onPress={goToSignIn}>
        <Text style={styles.button}>Tap to sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  )
};

function confirmPasswordsMatch(confirmationPassword, originalPassword) {
  if (confirmationPassword !== originalPassword) {
    alert('Passwords do not match, please try again.');
  }
}
