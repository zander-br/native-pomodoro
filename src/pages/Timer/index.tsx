import React, { useState, useRef } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import {
  Container, Title, Button, Icon, Progress,
} from './styles';

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
    <Container>
      <Title>Native Pomodoro</Title>
      <AnimatedCircularProgress
        size={200}
        width={12}
        fill={(secondsEllapsed * 100) / 1500}
        tintColor="#de75a1"
        backgroundColor="#fff"
        rotation={0}
      >
        {() => <Progress>{formatSeconds(secondsEllapsed)}</Progress>}
      </AnimatedCircularProgress>
      <Button onPress={toggleTimer}>
        <Icon name={timerEnabled ? 'pause' : 'play-arrow'} />
      </Button>
    </Container>
  );
};

export default Timer;
