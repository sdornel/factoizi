import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './MainScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;