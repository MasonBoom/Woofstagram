import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { AccountScreen } from '../screens/AccountScreen';
import { TabBarIcon } from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ size, focused, color }) => <TabBarIcon size={size} focused={focused} color={color} route={route} />,
      tabBarActiveTintColor: 'darkslateblue',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
      />

      <Tab.Screen
        name='Search'
        component={SearchScreen}
      />

      <Tab.Screen
        name='Account'
        component={AccountScreen}
      />
    </Tab.Navigator>
  )
};