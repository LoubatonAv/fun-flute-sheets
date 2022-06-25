import { Home } from './pages/Home.jsx';
import { MelodyDetails } from './pages/MelodyDetails.jsx';
import { useParams } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/melody/:melodyId',
    component: MelodyDetails,
  },
];
