import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled(LinearGradient).attrs({
  colors: ['#fee7f3', '#e09abe'],
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #4f1c35;
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
    background: #9a2e5b;
    border-radius: 36px;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
`;

export const Icon = styled(MaterialIcons).attrs({
  size: 32,
  color: '#fff',
})``;

export const Progress = styled.Text`
  color: #4f1c35;
  font-size: 38px;
  font-weight: bold;
  text-align: center;
`;
