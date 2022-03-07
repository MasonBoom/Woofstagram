import * as React from 'react';
import { Image } from 'react-native';
import { styles } from '../styles';

export const Avatar = ({ uri }) => <Image style={styles.avatar} source={{ uri }} />;