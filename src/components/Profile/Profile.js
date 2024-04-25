import React from 'react';
import './Profile.styles.css';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { H2, Heading, Paragraph } from '../../UI';

// Define styles for PDF layout
const styles = StyleSheet.create({
  view: {
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  header: {
    fontSize: '14px',
  },
  paragraphs: {
    marginTop: '10px',
  },
});

export const Profile = ({ info }) => {
  return (
    <View style={styles.view}>
      <Heading variant={'H2'} >Profile</Heading>
      <View style={styles.paragraphs} >
        <Paragraph variant={'SMALL_ASSISTANT'} style={styles.text}>
          {info}
        </Paragraph>
      </View>
    </View>
  );
};
