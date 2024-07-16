import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function No3() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./logo ibik.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A0DAD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100, // Adjust the size of your logo
  },
  loadingText: {
    marginTop: 20,
    color: '#FFFFFF',
    fontSize: 16,
  },
});
