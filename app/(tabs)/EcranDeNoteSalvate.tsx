import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../types/types';
import { Link, useNavigation } from 'expo-router';
import Dosar from '../containere/Dosar';
import { useRouter } from "expo-router";

const EcranDeNoteSalvate = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const naviga = (subiect: string) => {
    router.push({ pathname: '/containere/Dosar', params: { subiect } });
  };

  return (
    // in future need to have a better format for containers
    <View style={styles.container}>
      <Text>This is the saved notes screen.</Text>
      <Button
        title="Programare"
        onPress={() => naviga('Programare')}
      />
      <View style={styles.distanțier}></View>
      <Button
        title="Go to Dosar with Note2"
        onPress={() => naviga('Note2')}
      />
      <View style={styles.distanțier}></View>
      <Button
        title="Go to Dosar with Note3"
        onPress={() => naviga('Note3')}
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