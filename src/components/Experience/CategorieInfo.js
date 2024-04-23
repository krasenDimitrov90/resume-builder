import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

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
      <Text style={styles.title} class="secondary-titles">{title}</Text>
      {period
        ? <View class="m-[0_5px_10px_0]">
          <Text style={styles.period} className='tracking-[2px] uppercase text-[10px] text-[#BCC0C7]' >{period}</Text>
        </View>
        : null
      }
      {description
        ? <Text style={styles.description} className='text-[14px]'>{description}</Text>
        : null}
    </View>
  );
};
