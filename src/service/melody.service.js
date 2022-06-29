import { storageService } from './storage.service.js';
import { httpService } from './httpService';

const STORAGE_KEY = 'melodyDB';
const BASE_URL = 'tab';

// const STORAGE_FAVORITE_KEY = 'favoriteDB';

export const melodyService = {
  query,
  addMelody,
  remove,
  getGenres,
  getById,
};

// async function query(filterBy) {
//   console.log('filterBy:', filterBy);

//   try {
//     return httpService.get(BASE_URL, filterBy);
//   } catch (err) {
//     console.log('cant get todos from server', err);
//     throw err;
//   }
// }

async function query({ genre, text } = {}) {
  let melodies = _loadMelodiesFromStorage();
  let melody = {
    id: 'jpAuJb',
    name: 'Scarborough Fair',
    image: 'taeeoz3vbsv4mnxdd7i8',
    genre: 'irish',
  };
  if (!melodies || melodies.length < 1) {
    const updatedMelodies = [...(melodies = []), melody];
    _saveMelodiesToStorage(updatedMelodies);
    return updatedMelodies;
  }

  try {
    let list = melodies;
    if (genre) {
      list = list.filter((m) => m.genre === genre);
    }
    if (text) {
      const filterRegex = new RegExp(text, 'i');
      list = list.filter((m) => filterRegex.test(m.name));
    }
    return list;
  } catch (err) {
    console.log('cant get melodies from local storage', err);
    throw err;
  }
}

function getGenres() {
  const genres = ['Irish', 'Movies/Series', 'Hebrew', 'American'];
  return genres;
}

function getById(melodyId) {
  return storageService.get(STORAGE_KEY, melodyId);
}

async function addMelody(melody) {
  let melodies = _loadMelodiesFromStorage();
  if (!melodies) melodies = [];
  const updatedMelodies = [...melodies, melody];
  _saveMelodiesToStorage(updatedMelodies);
}

function remove(melodyId) {
  return storageService.removeFromStorage(STORAGE_KEY, melodyId);
}

function _saveMelodiesToStorage(melodyData) {
  storageService.saveToStorage(STORAGE_KEY, melodyData);
}

function _loadMelodiesFromStorage() {
  return storageService.loadFromStorage(STORAGE_KEY);
}

// function _loadeFavoriteFromStorage() {
//   return storageService.loadFromStorage(STORAGE_FAVORITE_KEY);
// }

// function _saveFavoriteoStorage(favoriteData) {
//   storageService.saveToStorage(STORAGE_FAVORITE_KEY, favoriteData);
// }

// async function saveFavorites(favorites) {
//   const updatedFavorites = [...favorites];
//   _saveFavoriteoStorage(updatedFavorites);
// }

// async function removeFavorite(favoriteToRemove) {
//   let favorites = _loadeFavoriteFromStorage();
//   let updatedFavorites = favorites?.filter((favorite) => favorite.id !== favoriteToRemove);

//   _saveFavoriteoStorage(updatedFavorites);
//   return updatedFavorites;
// }
