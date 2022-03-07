import * as React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles';

export const Title = (props) => <Text style={styles.title}>{props.children}</Text>;