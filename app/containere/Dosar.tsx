import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

const Dosar = () => {
  const route = useRoute();
  
  const { subiect } = route.params as { subiect: string; };

  const [dataArray, setDataArray] = useState<Array<string>>([]);
  const [arataText, setArataText] = useState<string>('');

  useEffect(() => {
    const retrieveData = async () => {
      const accessedStorageArray: string | null = await AsyncStorage.getItem(subiect);
      console.log('accessedStorageArray', accessedStorageArray);
      if (accessedStorageArray !== null) {
        setDataArray(JSON.parse(accessedStorageArray));
      }
    };

    retrieveData();
  }, [subiect]);
  
  return (
    <View style={styles.container}>
      <Text>Detail Screen for {subiect}</Text>
      <View style={styles.spacer} />
      {
        dataArray.map((val, i) => {
          const previewText = val.slice(0, val.indexOf('\n'));
          return (
            <View key={i}>
              <Pressable
                style={styles.card}
                onPress={() => setArataText(arataText === val ? '' : val)}
              >
                <Text>{previewText}</Text>
              </Pressable>
              {
                arataText === val &&
                <Text style={styles.fullText}>{val}</Text>
              }
            </View>
          );
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
  card: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  fullText: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
});

export default Dosar;