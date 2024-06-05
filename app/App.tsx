import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import EcranPrincipal from './EcranPrincipal';
import EcranDeNoteSalvate from './EcranDeNoteSalvate';

const App = () => {
  // add button to toggle which component renders
  return (
    <View style={styles.container}>
      <Button 
        title='Comutați vizualizarea'
        onPress={() => {}}
      />
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