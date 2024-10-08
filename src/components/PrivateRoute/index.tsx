import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';


const PrivateRoute: React.FC = () => {
  const { accessToken } = useAuth();

  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
