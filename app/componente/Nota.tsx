import { useNavigation } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const Nota = (props: { value: string; key: number; }) => {

  return (
    <View>
      <Text>{props.value}</Text>
      butonul pentru ștergere aici in rosu
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
});

  
export default Nota;