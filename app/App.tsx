import React from 'react';
import { StyleSheet, View } from 'react-native';
import EcranPrincipal from './EcranPrincipal';
import EcranDeNoteSalvate from './EcranDeNoteSalvate';

const App = () => {
  return (
    <View style={styles.container}>
      <EcranDeNoteSalvate />
      <EcranPrincipal />
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