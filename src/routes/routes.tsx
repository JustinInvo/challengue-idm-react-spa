import { BrowserRouter, Routes, Route } from 'react-router';
import routes from './navigation';
import { Navbar } from '../components/navbar/Navbar';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};