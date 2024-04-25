import React from 'react';
import { Profile, Experience, AdditionalDetails, Header } from './components/index';
import { INFO } from './info';
import { PDFViewer, Document, Page, StyleSheet, View, Svg, Defs, Stop, Rect, RadialGradient } from '@react-pdf/renderer';

// Define styles for PDF layout
const styles = StyleSheet.create({
  viewer: {
    width: '100%',
    height: '100%',

  },
  document: {
    width: '100%',
    // display: 'flex',
    // flexDirection: 'row',
  },
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    // flexDirection: 'row',
    // backgroundColor: 'linear-gradient(to right, pink 0%, pink 50%, blue 50%, blue 100%)',
    // background: linear - gradient(
    //   to right,
    //   pink 0 %,
    //   pink 50 %,
    //   paleturquoise 50 %,
    //   paleturquoise 100 %
    // ),
    // padding: 10,
    backgroundColor: '#ffffff',
  },
  mainSection: {
    flex: 1,
    // width: '100%',
    flexDirection: 'row',
  },

  sectionLeft: {
    flex: 4,
    // width: '100%',
    // padding: 10,
  },
  sectionRight: {
    flex: 2,
    // width: '100%',
    // padding: 10,
  },
});

function App() {
  return (
    <>
      <PDFViewer style={styles.viewer}>

        <Document style={styles.document}>

          <Page size="A4" style={styles.page}>
            <View >
              <Header />
            </View>
            <View style={styles.mainSection}>
              <View style={styles.sectionLeft}>
                <Profile info={INFO.profile} />
                <Experience experience={INFO.experience} />
              </View>
              <View style={styles.sectionRight}>
                <AdditionalDetails />
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default App;
