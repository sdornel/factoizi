import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRoute, useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

const Dosar = () => {
  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
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

  const sterge = async () => {
    const accessedStorageArray: string | null = await AsyncStorage.getItem(subiect);

    if (accessedStorageArray !== null) {
      const convertedToJson: Array<string> = JSON.parse(accessedStorageArray);
      convertedToJson.splice(convertedToJson.indexOf(arataText), 1);

      await AsyncStorage.setItem(subiect, JSON.stringify(convertedToJson));
      setDataArray(convertedToJson);
      setArataText(''); // clear text on delete
    }
  };
  
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('EcranDeNoteSalvate')}
        style={styles.button}
      >
        <Text>Intoarce-te</Text>
      </Pressable>
      <View style={styles.spacer}></View>
      <Text>ecran de detaliu pentru {subiect}</Text>
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
                <View>
                  <Text style={styles.fullText}>{val}</Text>
                    <Pressable
                      onPress={() => sterge()}
                      style={styles.button}
                    >
                    <Text>Șterge</Text>
                  </Pressable>
                </View>
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
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,

  },
});

export default Dosar;