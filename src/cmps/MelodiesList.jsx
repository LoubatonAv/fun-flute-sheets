import React from 'react';
import { MelodyPreview } from './MelodyPreview';

export const MelodiesList = ({ melodies, closeModal }) => {
  return (
    <div>
      <div className='grid grid-cols-3 gap-5 '>
        {melodies.map((melody) => (
          <MelodyPreview melody={melody} closeModal={closeModal} />
        ))}
      </div>
    </div>
  );
};
