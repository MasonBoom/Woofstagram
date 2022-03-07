import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './navigators/AuthNavigator';

const App = () => (
  <NavigationContainer>
    <AuthNavigator />
  </NavigationContainer>
);

export default App;

