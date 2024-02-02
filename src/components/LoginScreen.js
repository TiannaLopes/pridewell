// Example for LoginScreen.js
import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const LoginScreen = () => {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Log In" onPress={() => {}} />
    </View>
  );
};

export default LoginScreen;
