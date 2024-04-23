import React from 'react';
import './Profile.styles.css';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

// Define styles for PDF layout
const styles = StyleSheet.create({
  view: {
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  header: {
    fontSize: '14px',
  },
  text: {
    fontSize: '10px',
  },
});

export const Profile = ({ info }) => {
  return (
    <View style={styles.view}>
      <Text >Profile</Text>
      <Text style={styles.text}>
        {info}
      </Text>
    </View>
  );
};
