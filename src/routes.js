import { Home } from './pages/Home.jsx';
import { LoginSignupModal } from './cmps/LoginSignupModal';

export const routes = [
  {
    path: '/tabs',
    component: Home,
  },
  {
    path: '/signup',
    component: LoginSignupModal,
  },
];
