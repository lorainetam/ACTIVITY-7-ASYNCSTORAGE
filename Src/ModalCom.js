import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const ModalCom = ({ isVisible, data, onClose }) => {

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>STUDENT DETAILS:</Text>
          {data && (
            <View>
              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>First Name: </Text>
                <Text>{data.firstName}</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>Last Name: </Text>
                <Text>{data.lastName}</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>Course: </Text>
                <Text>{data.selectedCourse}</Text>
              </View>
            </View>
          )}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lime',
  },
  modalContent: {
    backgroundColor: 'pink',
    padding: 20,
    borderRadius: 0,
    width: '40%',
  },
  boldText: {
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'pink',
    padding: 5,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'lime',
  },
});

export default ModalCom;