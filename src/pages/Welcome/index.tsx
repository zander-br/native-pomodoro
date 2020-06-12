import React from 'react';
import {
  Image, Text, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Welcome = () => {
  const navigation = useNavigation();

  function navigateToTimer() {
    navigation.navigate('Timer');
  }

  return (
    <LinearGradient
      colors={['#e7f3fe', '#9abee0']}
      style={styles.container}
    >
      <Image source={require('../../assets/banner.png')} style={styles.banner} />
      <Text style={styles.title}>Staying focused at work isn’t easy!</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToTimer}>
        <Icon name="chevron-right" size={32} color="#fff" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Welcome;
