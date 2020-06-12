import React, { useState, useRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import styles from './styles';

function formatSeconds(seconds: number): string {
  if (seconds < 60) {
    return `${seconds} seg`;
  }

  return `${Math.floor(seconds / 60)} min`;
}

const Timer = () => {
  const timeRef = useRef<number>();

  const [timerEnabled, setTimerEnabled] = useState(false);
  const [secondsEllapsed, setSecondsEllapsed] = useState(0);

  function toggleTimer() {
    if (timerEnabled) {
      clearInterval(timeRef.current);

      setTimerEnabled(false);
    } else {
      timeRef.current = setInterval(() => {
        setSecondsEllapsed((state) => state + 1);
      }, 1000);

      setTimerEnabled(true);
    }
  }

  return (
    <LinearGradient
      colors={['#e7f3fe', '#9abee0']}
      style={styles.container}
    >
      <Text style={styles.title}>Native Pomodoro</Text>
      <AnimatedCircularProgress
        size={200}
        width={12}
        fill={(secondsEllapsed * 100) / 1500}
        tintColor="#75a1de"
        backgroundColor="#fff"
        rotation={0}
      >
        {() => <Text style={styles.progress}>{formatSeconds(secondsEllapsed)}</Text>}
      </AnimatedCircularProgress>
      <TouchableOpacity style={styles.button} onPress={toggleTimer}>
        <Icon name={timerEnabled ? 'pause' : 'play-arrow'} size={32} color="#fff" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Timer;
