import { routes } from './routes.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

export function RootCmp() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} exact element={<route.component />} path={route.path} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}
