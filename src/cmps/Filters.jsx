import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadMelodies } from '../cmps/store/melody.action.js';
import { melodyService } from '../service/melody.service.js';
import { useNavigate } from 'react-router-dom';

const Filters = ({ currentUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genres = melodyService.getGenres();
  const [filter, setFilter] = useState({
    text: null,
    genre: null,
  });

  useEffect(() => {
    dispatch(loadMelodies(filter, currentUser));
  }, [filter, dispatch]);

  const goToLogin = () => {
    navigate('/signup');
  };

  return (
    <div>
      <div className='flex justify-end bg-white cursor-pointer' onClick={goToLogin}>
        Welcome {currentUser ? currentUser.username : 'Guest'} !
      </div>
      <div className='w-full flex flex-col justify-center h-full sticky top-0 z-50 bg-white lg:flex-row pb-5'>
        <input
          className='block appearance-none border text-sm border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline '
          type='text'
          placeholder='Search...'
          value={filter.text}
          onChange={(e) => setFilter({ ...filter, text: e.target.value })}
        />
        <select
          className='block appearance-none border text-sm border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
          value={filter.genre}
          onChange={(e) => setFilter({ ...filter, genre: e.target.value })}>
          <option value={''}>None</option>
          {genres.map((genre) => (
            <option value={genre.toLowerCase()}>{genre}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
