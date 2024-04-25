import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';
import { Heading, Paragraph } from '../../UI';

const styles = StyleSheet.create({
  title: {
    fontSize: '14px',
  },
  description: {
    fontSize: '10px',
  },
  period: {
    fontSize: '8px',
  },
});

export const CategorieInfo = (props) => {
  const { title, period, description } = props;
  return (
    <View>
      <Heading variant={'H3'} class="secondary-titles">{title}</Heading>
      {period
        ? <View class="m-[0_5px_10px_0]">
          <Text style={styles.period} className='tracking-[2px] uppercase text-[10px] text-[#BCC0C7]' >{period}</Text>
        </View>
        : null
      }
      {description
        ? <Paragraph variant={'SMALL_ASSISTANT'} style={styles.description} className='text-[14px]'>{description}</Paragraph>
        : null}
    </View>
  );
};
