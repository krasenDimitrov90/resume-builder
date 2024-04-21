import React from 'react';
import { CategorieInfo } from './CategorieInfo';

export const Categorie = ({ experience }) => {

  return (
    <section>
      <h3 class="main-titles">{experience.category}</h3>
      {experience.info.map(row => {
        const { title, period, description } = row;
        return <CategorieInfo title={title} period={period} description={description} />
      })}
    </section>
  );
};
