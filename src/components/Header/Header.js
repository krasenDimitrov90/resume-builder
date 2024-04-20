import React from 'react';
import './Header.styles.css';

export const Header = () => {
  return (
    <section className="flex">
      <div className="w-[100px] h-[100px]">
        <img className='header-image' src="images/cv-picture.jpg" alt="face" />
      </div>
      <div className="flex items-center ml-[50px]">
        <h2 className="text-[38px]">Krasen Dimitrov</h2>
      </div>
    </section>
  );
};
