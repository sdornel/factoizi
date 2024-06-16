import React, { useState } from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import 'expo-router/entry';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScapaJos from '../componente/ScapaJos';

const index = () => {
  const [text, setText] = useState('');
  const [subiectulAles, setSubiectulAles] = useState('');
  const subiecti = [
    'programare',
    'istorie',
    'alt',
  ];

  const salvațiTextul = () => {
    console.log('text input:', text);
    // AsyncStorage.setItem('', text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Scrieți Aici</Text>
      <Pressable
        onPress={(e) => salvațiTextul()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Înregistra</Text>
      </ Pressable>
      {/* <TextInput
        style={styles.textInput}
        multiline={false}
        onChangeText={setSubiect}
        value={subiect}
      /> */}
      <ScapaJos subiecti={subiecti} setSubiectulAles={setSubiectulAles} />
      <TextInput
        style={styles.textInput}
        multiline={true}
        numberOfLines={4}
        onChangeText={setText}
        value={text}
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
    verticalAlign: 'top',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default index;