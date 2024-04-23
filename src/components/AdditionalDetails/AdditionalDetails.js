import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  section: {
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  headers: {
    fontSize: '14px',
  },
  paragraphs: {
    fontSize: '10px',
  },
});

export const AdditionalDetails = () => {
  return (
    <>
      <View style={styles.section} class="mb-[50px]">
        <Text style={styles.headers} class="main-titles">Details</Text>
        <View>
          <Text style={styles.paragraphs}>
            Varna
          </Text>
        </View>
        <View>
          <Text style={styles.paragraphs}>
            Bulgaria
          </Text>
        </View>
        <View>
          <Text style={styles.paragraphs}>
            0897 865 012
          </Text>
        </View>
        <View>
          <Text style={styles.paragraphs}>
            krasen.dimitrov.vn@gmail.com
          </Text>
        </View>
      </View>

      <View class="mb-[50px] pr-[20px]">
        <Text style={styles.headers} class="main-titles">Driver license</Text>
        <View>
          <Text style={styles.paragraphs}>B</Text>
        </View>
      </View>

      <View class="mb-[50px]">
        <Text style={styles.headers} class="main-titles">Languages</Text>
        <View>
          <Text style={styles.paragraphs}>Bulgarian</Text>
        </View>
        <View>
          <Text style={styles.paragraphs}>English</Text>
        </View>
      </View>

      <View class="mb-[50px]">
        <Text style={styles.headers} class="main-titles">Hobbies</Text>
        <View>
          <Text style={styles.paragraphs}>Mountain climbing</Text>
        </View>
        <View>
          <Text style={styles.paragraphs}>Music</Text>
        </View>
        <View>
          <Text style={styles.paragraphs}>Puzzle games</Text>
        </View>
      </View>
    </>
  );
};
