import { Home } from './pages/Home.jsx';
import { MelodyDetails } from './pages/MelodyDetails.jsx';

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
