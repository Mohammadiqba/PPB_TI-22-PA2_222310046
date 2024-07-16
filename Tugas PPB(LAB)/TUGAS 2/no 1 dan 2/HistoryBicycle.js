// components/HistoryBicycle.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryBicycle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>History of Bicycle</Text>
      <Text style={styles.content}>
        A bicycle, also called pedal cycle, bike, push-bike or cycle, is a human-powered or motor-powered, pedal-assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    backgroundColor: '#8B0000',
    padding: 15,
    textAlign: 'center',
    borderRadius: 1,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default HistoryBicycle;
