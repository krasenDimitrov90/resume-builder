import React from 'react';
import { Font, StyleSheet, Text } from '@react-pdf/renderer';

Font.register({
  family: 'PathwayGothicOne',
  fonts: [
    {
      src: '/fonts/PathwayGothicOne-Regular.ttf',
      fontWeight: 800,
    },
  ]
});

const styles = StyleSheet.create({
  H1: {
    fontFamily: 'PathwayGothicOne',
    fontSize: '28px',
  },
  H2: {
    fontFamily: 'PathwayGothicOne',
    fontSize: '24px',
  },
  H3: {
    fontFamily: 'PathwayGothicOne',
    fontSize: '16px',
  },
});

export const Heading = ({ children, variant }) => {
  return (
    <Text style={styles[variant]}>{children}</Text>
  );
};
