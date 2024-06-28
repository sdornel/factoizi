import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../types/types';
import { Link, useNavigation } from 'expo-router';
import Dosar from '../containere/Dosar';
import { useRouter } from 'expo-router';

const EcranDeNoteSalvate = () => {
  const router = useRouter();

  const naviga = (subiect: string) => {
    router.push({ pathname: '/containere/Dosar', params: { subiect } });
  };

  return (
    // in future need to have a better format for containers
    <View style={styles.container}>
      <Text>Acesta este ecranul de note salvate.</Text>
      <Button
        title='Programare'
        onPress={() => naviga('programare')}
      />
      <View style={styles.distanțier}></View>
      <Button
        title='Istorie'
        onPress={() => naviga('istorie')}
      />
      <View style={styles.distanțier}></View>
      <Button
        title='Limbi'
        onPress={() => naviga('limbi')}
      />
            <View style={styles.distanțier}></View>
      <Button
        title='Alt'
        onPress={() => naviga('alt')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  distanțier: {
    marginTop: 10
  }
});

export default EcranDeNoteSalvate;