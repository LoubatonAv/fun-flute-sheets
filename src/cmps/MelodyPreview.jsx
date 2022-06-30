import { useDispatch } from 'react-redux';
import { loadMelodies, removeMelody } from './store/melody.action';
import { Modal } from './Modal';
import { useState } from 'react';
import TrashIcon from '../assets/Images/trash.png';

export const MelodyPreview = ({ melody, closeModal }) => {
  const CLOUD_NAME = 'dbgfhkg2d';
  const dispatch = useDispatch();
  const onRemoveMelody = (melody) => {
    if (window.confirm(`Are you sure you want to delete ${melody.name}?`)) {
      dispatch(removeMelody(melody._id));
      dispatch(loadMelodies());
    }
  };

  const [modal, setModal] = useState(false);

  const handleCloseModal = () => {
    closeModal(modal);
    setModal(!modal);
  };

  const image = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${melody.image}`;

  return (
    <div className='bg-white shadow-2xl'>
      <div className='relative'>
        <div className='text-center text-2xl py-3 font-cormorant lg:text-4xl'>{melody.name}</div>
        <button className='absolute right-1 top-1 h-5 w-5' onClick={() => onRemoveMelody(melody)}>
          <img className='h-max-content' src={TrashIcon} alt='trash-icon' />
        </button>
      </div>

      <div className='aspect-w-3 aspect-h-2' onClick={() => handleCloseModal(modal)}>
        <img src={image} alt='tab-modal' />
        {modal && <Modal children={<img src={image} alt='tab-modal' />} />}
      </div>
    </div>
  );
};

// https://day.js.org/docs/en/display/format
