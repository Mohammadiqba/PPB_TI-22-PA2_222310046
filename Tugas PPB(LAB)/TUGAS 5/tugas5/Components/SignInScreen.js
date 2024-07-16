import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('222310046@student.ibik.ac.id');
  const [password, setPassword] = useState('Ibay890!');
  const [passwordError, setPasswordError] = useState('');

  const handleSignIn = () => {
    const validationError = validatePassword();
    if (validationError) {
      setPasswordError(validationError);
    } else if (email === '222310046@student.ibik.ac.id' && password === 'Ibay890!') {
      Alert.alert('Success', 'Login successful!', [
        { text: 'OK', onPress: () => navigation.navigate('MainTabs') }
      ]);
    } else {
      Alert.alert('Error', 'Email/Password is not match');
    }
  };

  const validatePassword = () => {
    if (password.length < 3) {
      return 'Type minimum 3 characters';
    } else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return 'Value must contain alphabet, number, and symbol';
    }
    return ''; // No error
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setPasswordError(validatePassword(text));
        }}
        secureTextEntry={true}
      />
      <Button title="SIGN IN" onPress={handleSignIn} />
      {passwordError ? <Text style={{ marginTop: 20, color: 'red' }}>{passwordError}</Text> : null}
    </View>
  );
};

export default SignInScreen;
