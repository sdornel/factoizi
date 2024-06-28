import { useNavigation } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const Nota = (props: { value: string; key: number; }) => {

  return (
      <View style={styles.padder}>
        <Text>{props.value}</Text>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  padder: {
    paddingLeft: 30,
    paddingRight: 30,
  },
});

  
export default Nota;