import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity } from 'react-native';

const DataDiri = () => {
  const [npm, setNpm] = useState('');
  const [fullname, setFullname] = useState('');
  const [kelas, setKelas] = useState('');

  const handleInputChange = (text) => {
    setNpm(text);
  };

  const handleInputChange2 = (text) => {
    setFullname(text);
  };

  const handleInputChange3 = (text) => {
    setKelas(text);
  };

  const handleSubmit = () => {
    // Lakukan sesuatu ketika tombol diklik, misalnya, kirim data ke server
    console.log('Data submitted:', { npm, fullname, kelas });
  };

  const imageSource = require('../TUGAS 3/boy.png');

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.profileImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.header}>Data Diri</Text>
        <Text>NPM</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Masukkan NPM"
          keyboardType="numeric"
          onChangeText={handleInputChange}
          value={npm}
          maxLength={10}
        />
        <Text>Nama</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Masukkan Nama"
          onChangeText={handleInputChange2}
          value={fullname}
          maxLength={50} // Sesuaikan dengan kebutuhan
        />
        <Text>Kelas</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Masukkan Kelas"
          onChangeText={handleInputChange3}
          value={kelas}
          maxLength={20} // Sesuaikan dengan kebutuhan
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  infoContainer: {},
  inputText: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: 200,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  buttonContainer: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DataDiri;
