// components/ProfilePicture.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ProfilePicture = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../user.png')} 
        style={styles.image} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000',
  },
});

export default ProfilePicture;
