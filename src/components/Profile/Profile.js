import React from 'react';
import './Profile.styles.css';

export const Profile = ({ info }) => {
  return (
    <section className='py-[15px]'>
      <h3 class="main-titles">Profile</h3>
      <p className='text-[14px]'>
        {info}
      </p>
    </section>
  );
};
