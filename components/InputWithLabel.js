import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles';

export const InputWithLabel = (props) => {
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