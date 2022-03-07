import * as React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export const TabBarIcon = ({ focused, color, size, route }) => {
  let iconName;
  switch (route.name) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Search':
      iconName = focused ? 'search' : 'search-outline';
      break;
    case 'Account':
      iconName = focused ? 'person-circle' : 'person-circle-outline';
      break;
    default:
      break;
  };
  return <Ionicons name={iconName} size={size} color={color} />;
};