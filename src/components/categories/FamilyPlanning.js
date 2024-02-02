// FamilyPlanning.js
import React from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';

const FamilyPlanning = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Family Planning Options</Text>
      <Text style={styles.text}>
        Explore various family planning options tailored for the LGBTQ+
        community, including adoption, surrogacy, and IVF. Connect with LGBTQ+
        friendly clinics and get all the support you need for your family
        building journey.
      </Text>

      <Button title="Learn More About Adoption" onPress={() => {}} />
      <Button title="Find Surrogacy Resources" onPress={() => {}} />
      <Button title="IVF and Assisted Reproduction" onPress={() => {}} />
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

export default FamilyPlanning;
