import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import File from "./containere/File";

const EcranDeNoteSalvate = () => {
    return (
      <View style={styles.container}>
        {/* scroll down and each tab is a "category" */}
        {/* in each category have another screen with a for loop for note components */}
        <File subiect="programare" />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      // padding: 20,
    },
  });
  
  export default EcranDeNoteSalvate;