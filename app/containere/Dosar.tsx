import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Nota from '../componente/Nota';
import { useRoute } from '@react-navigation/native';

const Dosar = () => {
  const route = useRoute();
  const { subiect } = route.params as { subiect: string; }; // i should try to do this more nicely in future

  return (
    <View style={styles.container}>
      <Text>Detail Screen for {subiect}</Text>
      <Nota props={''}/>
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

export default Dosar;