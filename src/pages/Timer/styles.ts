import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#1c354f',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 300,
    marginBottom: 80,
  },

  button: {
    width: 72,
    height: 72,
    backgroundColor: '#2e5b9a',
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },

  progress: {
    color: '#1c354f',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
