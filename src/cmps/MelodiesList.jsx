import React from 'react';
import { MelodyPreview } from './MelodyPreview';

export const MelodiesList = ({ melodies, closeModal, currentUser }) => {
  return (
    <div>
      <div className='grid gap-5 sm:grid-cols-1 pt-10 lg:grid-cols-3'>
        {melodies.map((melody) => (
          <MelodyPreview melody={melody} closeModal={closeModal} currentUser={currentUser} />
        ))}
      </div>
    </div>
  );
};
