import { useNavigation } from 'expo-router';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const Nota = (props: { value: string; key: number; }) => {

  const sterge = () => {
    // delete from async storage using key
  };
  
  return (
    <View>
      <Text>{props.value}</Text>
      <Pressable
        onPress={() => sterge()}
        style={styles.button}
      >
        Șterge
      </Pressable>
    </View>
    );
  };
  

const styles = StyleSheet.create({
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
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
});

  
export default Nota;