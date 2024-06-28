import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Nota from '../componente/Nota';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dosar = () => {
  const route = useRoute();
  // if no subject i need to redirect to main page
  const { subiect } = route.params as { subiect: string; }; // i should try to do this more nicely in future
  
  const [dataArray, setDataArray] = useState<Array<string>>([]);

  useEffect(() => {
    const retrieveData = async () => {
      const accessedStorageArray: string | null = await AsyncStorage.getItem(subiect);
      console.log('accessedStorageArray', accessedStorageArray);
      if (accessedStorageArray !== null) {
        setDataArray(JSON.parse(accessedStorageArray));
      }
    }

    retrieveData();
  }, [subiect])
  console.log('dataArray', dataArray);
  return (
    <View style={styles.container}>
      <Text>Detail Screen for {subiect}</Text>
      <View style={styles.spacer}/>
      {
        // AsyncStorage.subiect loop
        dataArray.map((val, i) => {
          return (
            <Nota value={val} key={i}/>
          )
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    height: 20,
  },
  padder: {
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default Dosar;