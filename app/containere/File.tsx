import { StyleSheet, Text, View } from 'react-native';
import Nota from '../componente/Nota';

const File = ({ subiect }: { subiect: string}) => {
  // folosesti async storage aici
    return (
      <View>
        <Text>Subject: {subiect}</Text>
        <Text></Text>
        <Nota />
      </View>
    );
  };
  
const styles = StyleSheet.create({

});
  
export default File;