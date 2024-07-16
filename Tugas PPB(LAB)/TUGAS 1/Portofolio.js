import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const PortfolioScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../TUGAS 1/ibay.jpg')} style={styles.profileImage} />
      <Text style={styles.name}>Mohammad Iqbal Fahmi</Text>
      <Text style={styles.title}>Mahasiswa</Text>
      <Text style={styles.sectionTitle}>Tentang Saya</Text>
      <Text style={styles.description}>
        saya adalah Mahasiswa di insitut bisnis informatika kesatuan yang masuk fakultas Teknologi Informasi.
      </Text>
      <Text style={styles.sectionTitle}>Proyek Saya</Text>
      <View style={styles.project}>
        <Text style={styles.projectTitle}>Pengalaman</Text>
        <Text style={styles.projectDescription}>
          perbaiki TV , Perbaiki laptop dan Merusak laptop
        </Text>
      </View>
      <View style={styles.project}>
        <Text style={styles.projectTitle}>Hobi</Text>
        <Text style={styles.projectDescription}>
          Berenang, Travelling,
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  project: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 16,
  },
});

export default PortfolioScreen;
