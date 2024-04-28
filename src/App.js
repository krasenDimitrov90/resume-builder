import React from 'react';
import { Profile, Experience, AdditionalDetails, Header } from './components/index';
import { INFO } from './info';
import { PDFViewer, Document, Page, StyleSheet, View, Svg, Defs, Stop, Rect, RadialGradient, Circle, LinearGradient, Path, Text } from '@react-pdf/renderer';

// Define styles for PDF layout
const styles = StyleSheet.create({
  viewer: {
    width: '100%',
    height: '100%',

  },
  document: {
    // width: '100%',
  },
  page: {
    paddingTop: 35,
    paddingHorizontal: 35,
    paddingBottom: 35,
    backgroundColor: '#ffffff',
  },
  mainSection: {
    flex: 1,
    flexDirection: 'row',
  },
  sectionLeft: {
    flex: 4,
    paddingRight: '20px',
  },
  sectionRight: {
    flex: 2,
    paddingLeft: '40px'
  },
  rightBackgorund: {
    backgroundColor: '#082A4D',
    position: 'absolute',
    zIndex: '-1',
    top: '0',
    right: '0',
    bottom: '0',
    left: '370px',
  },
  fixed: {
    top: 0,
    bottom: 0,
    right: 0,
    width: '42%',
    // padding: 10,
    backgroundColor: '#082A4D',
    position: 'absolute',
    zIndex: '-1',
  }

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
            <View style={styles.fixed} fixed>
            </View>
            {/* <View style={styles.rightBackgorund}>
            </View> */}
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default App;
