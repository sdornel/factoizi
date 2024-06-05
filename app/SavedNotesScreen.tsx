import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SavedNotesScreen = () => {
    return (
      <View style={styles.container}>
        {/* scroll down and each tab is a "category" */}
        {/* in each category have another screen with a for loop for note components */}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
  });
  
  export default SavedNotesScreen;