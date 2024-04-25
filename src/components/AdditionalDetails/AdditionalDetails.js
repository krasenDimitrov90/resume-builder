import { Font, StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';
import { Heading, Paragraph } from '../../UI';

Font.register({
  family: 'Assistant',
  src: "https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&family=Lusitana:wght@400;700&display=swap",
  // fontStyle: 'normal',
});

Font.register({
  family: 'PathwayGothicOne',
  fonts: [
    {
      src: '/fonts/PathwayGothicOne-Regular.ttf',
      fontWeight: 400,
    },
  ]
});


Font.register({
  family: 'Ubuntu',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
    },
    {
      src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
      fontWeight: 'bold',
    },
    {
      src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  ],
});

const styles = StyleSheet.create({
  section: {
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  headers: {
    fontSize: '14px',
    fontFamily: 'PathwayGothicOne',
    fontWeight: 'bold',
  },
  paragraphs: {
    fontSize: '10px',
  },
});

export const AdditionalDetails = () => {
  return (
    <>
      <View style={styles.section} class="mb-[50px]">
        <Heading variant={'H2'} class="main-titles">Details</Heading>
        <View>
          <Paragraph variant={'SMALL_ASSISTANT'} >
            Varna
          </Paragraph>
        </View>
        <View>
          <Paragraph variant={'SMALL_ASSISTANT'} >
            Bulgaria
          </Paragraph>
        </View>
        <View>
          <Paragraph variant={'SMALL_ASSISTANT'} >
            0897 865 012
          </Paragraph>
        </View>
        <View>
          <Paragraph variant={'SMALL_ASSISTANT'} >
            krasen.dimitrov.vn@gmail.com
          </Paragraph>
        </View>
      </View>

      <View class="mb-[50px] pr-[20px]">
        <Heading variant={'H2'}  class="main-titles">Driver license</Heading>
        <View>
          <Paragraph variant={'SMALL_ASSISTANT'} >B</Paragraph>
        </View>
      </View>

      <View class="mb-[50px]">
        <Heading variant={'H2'}  class="main-titles">Languages</Heading>
        <View>
          <Paragraph variant={'SMALL_ASSISTANT'} >Bulgarian</Paragraph>
        </View>
        <View>
          <Paragraph variant={'SMALL_ASSISTANT'} >English</Paragraph>
        </View>
      </View>

      <View class="mb-[50px]">
        <Heading variant={'H2'}  class="main-titles" >Hobbies</Heading>
        <View>
          <Paragraph variant={'SMALL_ASSISTANT'} >Mountain climbing</Paragraph>
        </View>
        <View>
          <Paragraph variant={'SMALL_ASSISTANT'} >Music</Paragraph>
        </View>
        <View>
          <Paragraph variant={'SMALL_ASSISTANT'} >Puzzle games</Paragraph>
        </View>
      </View>
    </>
  );
};
