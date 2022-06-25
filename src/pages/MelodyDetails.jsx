import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { melodyService, getById } from '../service/melody.service.js';

export const MelodyDetails = () => {
  const { melodyId } = useParams();

  const [melody, setMelody] = useState(null);

  const getById = (melodyId) => {
    return melodyService.getById(melodyId).then((melody) => {
      return melody;
    });
  };

  useEffect(() => {
    getById(melodyId).then((melody) => {
      setMelody(melody);
    });
  }, []);

  console.log('melody:', melody);

  return <div>{/* <div>{melody.im}</div> */}</div>;
};
