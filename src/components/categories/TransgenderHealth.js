// TransgenderHealth.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TransgenderHealth = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transgender Health</Text>
      {/* Content goes here */}
    </View>
  );
};

// Reuse or customize the styles as needed
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Add more styles as needed
});

export default TransgenderHealth;
