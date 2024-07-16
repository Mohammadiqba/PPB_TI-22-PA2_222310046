// components/MyBioClass.js

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyBio from './Mybio';

class MyBioClass extends Component {
  constructor(props) {
    super(props);
    this.state = MyBio;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Bio (Class Component)</Text>
        <Text>NPM: {this.state.identity.npm}</Text>
        <Text>Full Name: {`${this.state.identity.firstname} ${this.state.identity.middlename} ${this.state.identity.lastname}`}</Text>
        <Text>Education:</Text>
        {this.state.educations.map((edu) => (
          <Text key={edu.id}>- {edu.school}</Text>
        ))}
        <Text>Mobile Phone: {this.state.mobile_phone}</Text>
        <Text>Email: {this.state.email}</Text>
        <Text>Gender: {this.state.gender}</Text>
        <Text>Height: {this.state.tall_body} cm</Text>
        <Text>Weight: {this.state.weight_body} kg</Text>
      </View>
    );
  }
}

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

export default MyBioClass;
