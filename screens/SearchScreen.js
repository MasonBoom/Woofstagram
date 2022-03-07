import * as React from 'react';
import { TextInput, Button, View } from 'react-native';
import { styles } from '../styles';

const { useState } = React;

export const SearchScreen = () => {
  const [value, setValue] = useState('');
  const handleChangeValue = (e) => setValue(e);
  const handleSearch = () => console.log('SEARCHING FOR: ', value);
  return (
    <View style={[styles.view, { flexDirection: 'row' }]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChangeValue}
        placeholder='Search'
      />
      <Button color='hsl(260, 70%, 25%)' style={styles.button} title='Search' onPress={handleSearch} />
    </View>
  )
};

