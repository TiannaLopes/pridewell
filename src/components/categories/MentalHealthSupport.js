// MentalHealthSupport.js
import React from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';

const MentalHealthSupport = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mental Health Support</Text>
      <Text style={styles.text}>
        Access a wide range of mental health resources specifically curated for
        the LGBTQ+ community. Connect with supportive therapists, join support
        groups, and find tools to help you navigate through anxiety, depression,
        and more.
      </Text>

      <Button title="Find a Therapist" onPress={() => {}} />
      <Button title="Join a Support Group" onPress={() => {}} />
      <Button title="Mental Health Tools & Resources" onPress={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  // Add more styles as needed
});

export default MentalHealthSupport;
