import * as React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles';

export const Heading = (props) => <Text style={styles.heading}>{props.children}</Text>;