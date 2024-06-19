import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';

const ScapaJos = ({ subiecti, subiectulAles, setSubiectulAles }: { subiecti: Array<string>; subiectulAles: string; setSubiectulAles: Dispatch<SetStateAction<string>>; }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSelect = (item: string) => {
    // onValueChange(item.value);
    setSubiectulAles(item);
    setIsVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setIsVisible(true)}
      >
        <Text style={styles.dropdownButtonText}>
          {subiectulAles ? subiectulAles : 'Selectati o optiune'}
        </Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={isVisible} animationType="slide">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setIsVisible(false)}
        >
          <View style={styles.dropdown}>
            <FlatList
              data={subiecti}
              // keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleSelect(item)}
                >
                  {/* <Text style={styles.dropdownItemText}>{item.label}</Text> */}
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownButton: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdown: {
    width: '80%',
    maxHeight: 300,
    backgroundColor: 'white',
    borderRadius: 4,
    overflow: 'hidden',
  },
  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  dropdownItemText: {
    fontSize: 16,
  },
});

export default ScapaJos;