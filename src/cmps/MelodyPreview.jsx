import { useDispatch } from 'react-redux';
import { removeMelody } from './store/melody.action';
import { Modal } from './Modal';
import { useState } from 'react';
import TrashIcon from '../assets/Images/trash.png';

export const MelodyPreview = ({ melody, closeModal }) => {
  const CLOUD_NAME = 'dbgfhkg2d';
  const dispatch = useDispatch();
  const onRemoveMelody = (melody) => {
    if (window.confirm(`Are you sure you want to delete ${melody.name}?`)) {
      dispatch(removeMelody(melody.id));
    }
  };

  const [modal, setModal] = useState(false);

  const handleCloseModal = () => {
    closeModal(modal);
    setModal(!modal);
  };

  const image = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${melody.image}`;

  // <Link to={`/melody/${melody.id}`}>
  // </Link>

  return (
    <div className='bg-white relative shadow-2xl'>
      <div className='text-center text-4xl py-3 font-cormorant'>{melody.name}</div>
      <button className='absolute -right-0 top-1 h-7 w-7  ' onClick={() => onRemoveMelody(melody)}>
        <img className='h-max-content ' src={TrashIcon} alt='trash-icon' />
      </button>
      <div className='aspect-w-3 aspect-h-2' onClick={() => handleCloseModal(modal)}>
        <img src={image} alt='tab-modal' />
        {modal && <Modal image={image} />}
      </div>
    </div>
  );
};

// https://day.js.org/docs/en/display/format
