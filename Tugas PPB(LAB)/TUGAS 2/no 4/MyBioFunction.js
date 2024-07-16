// components/MyBioFunction.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyBio from './Mybio';

const MyBioFunction = () => {
  const bio = MyBio;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bio (Function Component)</Text>
      <Text>NPM: {bio.identity.npm}</Text>
      <Text>Full Name: {`${bio.identity.firstname} ${bio.identity.middlename} ${bio.identity.lastname}`}</Text>
      <Text>Education:</Text>
      {bio.educations.map((edu) => (
        <Text key={edu.id}>- {edu.school}</Text>
      ))}
      <Text>Mobile Phone: {bio.mobile_phone}</Text>
      <Text>Email: {bio.email}</Text>
      <Text>Gender: {bio.gender}</Text>
      <Text>Height: {bio.tall_body} cm</Text>
      <Text>Weight: {bio.weight_body} kg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MyBioFunction;
