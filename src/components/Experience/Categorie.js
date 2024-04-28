import React from 'react';
import { CategorieInfo } from './CategorieInfo';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { H2, Heading } from '../../UI';

export const Categorie = ({ experience }) => {

  return (
    <View >
      <Heading variant={'H2'} class="main-titles">{experience.category}</Heading>
      {experience.info.map(row => {
        const { title, period, description } = row;
        return <CategorieInfo title={title} period={period} description={description} />
      })}
    </View>
  );
};
