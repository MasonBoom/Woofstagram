import React, { useState, Component } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
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
      <Button title='Tap to sign up' onPress={goToSignIn} style={styles.button}/>
    </ScrollView>
  )
};

function confirmPasswordsMatch(confirmationPassword, originalPassword) {
  if (confirmationPassword !== originalPassword) {
    alert('Passwords do not match, please try again.');
  }
}

const InputWithLabel = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.label}</Text>
      <TextInput
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onSubmitEditing={props.onSubmitEditing}
        style={styles.placeholder}
      />
    </View>
  );
};