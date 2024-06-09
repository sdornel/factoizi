import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import EcranPrincipal from './EcranPrincipal';
import EcranDeNoteSalvate from './EcranDeNoteSalvate';

const App = () => {
  
  const [comutare, reglaComutare] = useState(false);

  const comutatorApăsat = () => {
    reglaComutare(!comutare);
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={comutatorApăsat} style={styles.button}>
        <Text style={styles.buttonText}>Comutați vizualizarea</Text>
      </Pressable>
      {comutare ? <EcranDeNoteSalvate /> : <EcranPrincipal />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;