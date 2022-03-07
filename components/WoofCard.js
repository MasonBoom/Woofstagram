import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Avatar } from './Avatar';
import { Title } from './Title';

export const WoofCard = ({ name, avatar }) => (
  <Pressable style={({ pressed }) => [woofCardStyles.card, pressed && { backgroundColor: 'purple' }]}>
    <Avatar uri={avatar} />
    <Title>{name}</Title>
  </Pressable >
);

const woofCardStyles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#a6a6a6',
    borderRadius: 7,
    borderWidth: 1,
    flex: 1,
    height: 100,
    justifyContent: 'space-around',
    marginRight: 15,
    opacity: 0.8,
    padding: 10,
    shadowColor: '#6a6a6a',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 2 },
    elevation: 5,
    textAlign: 'center',
    width: 80
  },
  title: {},
});