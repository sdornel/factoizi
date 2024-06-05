import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EcranPrincipal = () => {
  const salvațiTextul = () => {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Scrieți Aici</Text>
      <Button
        title='Inregistra'
        onPress={salvațiTextul}
      />

      <TextInput
        style={styles.textInput}
        multiline={true}
        numberOfLines={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    marginTop: 10,
    height: 250,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 50
  }
});

export default EcranPrincipal;