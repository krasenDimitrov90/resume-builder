import React from 'react';

export const CategorieInfo = (props) => {
  const { title, period, description } = props;
  return (
    <article>
      <h4 class="secondary-titles">{title}</h4>
      <div class="m-[0_5px_10px_0]">
        <span className='tracking-[2px] uppercase text-[10px] text-[#BCC0C7]' >{period}</span>
      </div>
      <p className='text-[14px]'>{description}</p>
    </article>
  );
};
