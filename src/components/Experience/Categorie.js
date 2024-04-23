import React from 'react';
import { CategorieInfo } from './CategorieInfo';
import { Text, View } from '@react-pdf/renderer';

export const Categorie = ({ experience }) => {

  return (
    <View>
      <Text class="main-titles">{experience.category}</Text>
      {experience.info.map(row => {
        const { title, period, description } = row;
        return <CategorieInfo title={title} period={period} description={description} />
      })}
    </View>
  );
};
