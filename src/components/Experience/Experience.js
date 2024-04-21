import React from 'react';
import { Categorie } from './Categorie';

export const Experience = ({ experience }) => {

  return (
    <>
      {
        experience.map(experience => {
          return (
            <Categorie experience={experience} />
          );
        })
      }
    </>
  );
};
