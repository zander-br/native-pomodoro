import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled(LinearGradient).attrs({
  colors: ['#e7f3fe', '#9abee0'],
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.Image`
  align-self: flex-end;
`;

export const Title = styled.Text`
  color: #1c354f;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  max-width: 300px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const Button = styled.TouchableOpacity`
    width: 72px;
    height: 72px;
    background: #2e5b9a;
    border-radius: 36px;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs({
  size: 32,
  color: '#fff',
})``;
