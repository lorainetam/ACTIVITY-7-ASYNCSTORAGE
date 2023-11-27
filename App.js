import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormCom from './Src/FormCom.js'; 
import TableCom from './Src/TableCom.js'; 
import ModalCom from './Src/ModalCom.js'; 

const ComApp = () => { 
  const [dataItems, setDataItems] = useState([]); 
  const [showDataList, setShowDataList] = useState(false); 
  const [selectedDataIndex, setSelectedDataIndex] = useState(null); 
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setNotifications('');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const addData = (data) => { 
    setDataItems([...dataItems, data]); 
    saveData([...dataList, data]);
    setNotifications('ADDED!');
  };

  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('dataItems', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem('dataItems');
      if (data !== null) {
        setDataList(JSON.parse(data));
      }
    } catch (error) {
      console.error('ERROR:', error);
    }
  };

  const onViewData = (index) => { 
    setSelectedDataIndex(index);
  };

  const closeModal = () => {
    setSelectedDataIndex(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {selectedDataIndex !== null && (
          <ModalCom 
            isVisible={selectedDataIndex !== null}
            data={dataItems[selectedDataIndex]} 
            onClose={closeModal}
          />
        )}
        {showDataList ? (
          <TableCom 
            dataItems={dataItems} 
            onViewData={onViewData} 
          />
        ) : (
          <FormCom 
            onAddData={addData} 
          />
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setShowDataList(!showDataList)}
      >
        <Text style={styles.buttonText}>
          {showDataList ? '     ADD DATA    ' : '          VIEW DATA LIST       '}
        </Text>
      </TouchableOpacity>
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'pink',
    padding: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    marginBottom: 110,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
  message: {
    position: 'absolute',
    bottom: 5,
    backgroundColor: 'lime',
    color: 'white',
    padding: 10,
    borderRadius: 3,
  },
});

export default ComApp;