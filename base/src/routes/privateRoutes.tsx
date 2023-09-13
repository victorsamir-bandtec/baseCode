import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  redirectPath?: string;
  children?: React.ReactNode;
}

export const ProtectedRoute = ({
  redirectPath = '/',
  children,
}: ProtectedRouteProps) => {
  const user = window.localStorage.getItem('auth');

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
