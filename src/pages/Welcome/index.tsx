import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container, Banner, Title, Button, Icon,
} from './styles';

const Welcome = () => {
  const navigation = useNavigation();

  function navigateToTimer() {
    navigation.navigate('Timer');
  }

  return (
    <Container>
      <Banner source={require('../../assets/banner.png')} />
      <Title>Staying focused at work isn’t easy!</Title>
      <Button onPress={navigateToTimer}>
        <Icon name="chevron-right" />
      </Button>
    </Container>
  );
};

export default Welcome;
