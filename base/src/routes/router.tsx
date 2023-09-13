import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import { ProtectedRoute } from './privateRoutes';

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="register" element={<div />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <div />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
