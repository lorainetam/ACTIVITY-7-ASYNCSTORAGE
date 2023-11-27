import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, StyleSheet } from 'react-native';

const FormCom = ({ onAddData }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');

  const handleAddData = () => {
    if (!firstName || !lastName || !selectedCourse || !userName || !userPassword) {
      setError('FILL ALL THE BLANKS!');
      return;
    }

    setError('');

    onAddData({ firstName, lastName, selectedCourse, userName, userPassword });

    setFirstName('');
    setLastName('');
    setSelectedCourse('');
    setUserName('');
    setUserPassword('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="FIRST NAME"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="LAST NAME"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <Picker
        style={styles.input}
        selectedValue={selectedCourse}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
      >
        <Picker.Item label="SELECT COURSE" value="" />
        <Picker.Item label="BSIT" value="BSIT" />
        <Picker.Item label="BSCS" value="BSCS" />
        <Picker.Item label="BSELEC" value="BSELEC" />
        <Picker.Item label="BSELEX" value="BSELEX" />
        <Picker.Item label="BSCRIM" value="BSCRIM" />
      </Picker>
      <TextInput
        style={[styles.input, styles.usernameInput]}
        placeholder="USER NAME"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
      <TextInput
        style={[styles.input, styles.passwordInput]}
        placeholder="PASSWORD"
        value={userPassword}
        onChangeText={(text) => setUserPassword(text)}
        secureTextEntry
      />
      <View style={styles.errorContainer}>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddData}>
          <Text style={styles.buttonText}> ADD DATA </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 180,
    paddingTop: 200,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  usernameInput: {
    marginTop: 20,
  },
  passwordInput: {
    marginTop: 1,
  },
  errorContainer: {
    height: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 0,
    marginBottom: 1,
  },
  addButton: {
    backgroundColor: 'pink',
    padding: 10,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'lime',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default FormCom;