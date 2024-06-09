import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../types/types';
import { useNavigation } from 'expo-router';
import Fisier from '../containere/Fisier';

const EcranDeNoteSalvate = () => {
  const navigation = useNavigation();

  const naviga = (subiect: string) => {
    navigation.navigate('Fisier', { subiect });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => naviga('programare')}><Text>programare</Text></Pressable>
      <Pressable onPress={() => naviga('istorie')}><Text>istorie</Text></Pressable>
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

export default EcranDeNoteSalvate;