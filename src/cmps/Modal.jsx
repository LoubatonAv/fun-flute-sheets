import React from 'react';

export const Modal = ({ image }) => {
  return (
    <div className='fixed top 0 right-0 left-0 z-10 justify-center items-center flex max-w-full max-h-full bg-black bg-opacity-70  '>
      <img src={image} alt='tab-modal' />
    </div>
  );
};
