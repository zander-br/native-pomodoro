import React from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    alignSelf: 'flex-end',
  },
  title: {
    color: '#1c354f',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 300,
    marginVertical: 80,
  },
  button: {
    width: 72,
    height: 72,
    backgroundColor: '#2e5b9a',
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
