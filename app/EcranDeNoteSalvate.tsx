import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import Fisier from './containere/Fisier';
import { RootStackParamList } from './types/types';

const EcranDeNoteSalvate = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const naviga = (subiect: string) => {
    navigation.navigate('Fisier', { subiect });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => naviga('programare')} />
      <Pressable onPress={() => naviga('istorie')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default EcranDeNoteSalvate;