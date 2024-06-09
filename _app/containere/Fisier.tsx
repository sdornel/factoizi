import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Nota from '../componente/Nota';

const Fisier = ({ route }: { route: { params: String; }}) => {
  const subiect = route.params;

  return (
    <View style={styles.container}>
      <Text>Detail Screen for {subiect}</Text>
      <Nota />
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

export default Fisier;