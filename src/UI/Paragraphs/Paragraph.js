import React from 'react';
import { Font, StyleSheet, Text } from '@react-pdf/renderer';

Font.register({
  family: 'Assistant',
  fonts: [
    {
      src: '/fonts/Assistant-Regular.ttf',
      fontWeight: 400,
    },
  ]
});

const styles = StyleSheet.create({
  SMALL_ASSISTANT: {
    fontFamily: 'Assistant',
    fontSize: '10px',
  },
  MEDIUM_ASSISTANT: {
    fontFamily: 'Assistant',
    fontSize: '14px',
  },
  LARGE_ASSISTANT: {
    fontFamily: 'Assistant',
    fontSize: '18px',
  },
});

export const Paragraph = ({ children, variant }) => {
  return (
    <Text style={styles[variant]}>{children}</Text>
  );
};
