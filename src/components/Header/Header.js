import React from 'react';
import './Header.styles.css';
import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  imageContainer: {
    width: '100px',
    height: '100px',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: '80% 15%',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '30px',
  },
  text: {
    // fontSize: '38px',
  },
});

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} >
        <Image  style={styles.image} src="images/cv-picture.jpg" alt="face" />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Krasen Dimitrov</Text>
      </View>
    </View>
  );
};
