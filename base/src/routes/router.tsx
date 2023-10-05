import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import { ProtectedRoute } from './privateRoutes';

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
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
