// AppNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FamilyPlanning from './components/FamilyPlanning';
import MentalHealthSupport from './components/MentalHealthSupport';
// Import other screens

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="FamilyPlanning"
      component={FamilyPlanning}
      options={{title: 'Family Planning'}}
    />
    <Stack.Screen
      name="MentalHealthSupport"
      component={MentalHealthSupport}
      options={{title: 'Mental Health Support'}}
    />
    {/* Define other screens here */}
  </Stack.Navigator>
);

export default AppNavigator;
