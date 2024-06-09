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
    // navigation.navigate('Dosar', { subiect });
    router.push({ pathname: '/Dosar', params: { subiect } });
  };

  return (
    <View style={styles.container}>
      {/* <Pressable onPress={() => naviga('programare')}><Text>programare</Text></Pressable>
      <Pressable onPress={() => naviga('istorie')}><Text>istorie</Text></Pressable> */}
      <Text>This is the saved notes screen.</Text>
      <Button
        title="Go to Dosar with Note1"
        onPress={() => naviga('Note1')}
      />
      <Button
        title="Go to Dosar with Note2"
        onPress={() => naviga('Note2')}
      />
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
});

export default EcranDeNoteSalvate;