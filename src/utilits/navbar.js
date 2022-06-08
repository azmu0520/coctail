import Generic from '../components/Generic';
import Home from '../components/Home';
import Login from '../components/Login';

export const data = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    Component: Home,
  },
  {
    id: 2,
    title: 'About',
    path: '/about',
    Component: Generic,
  },
  {
    id: 3,
    title: 'Login',
    hidden: true,
    path: '/login',
    Component: Login,
  },
];
